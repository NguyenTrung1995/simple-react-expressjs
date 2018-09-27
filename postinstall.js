var fs = require('fs');

var source = '.editorconfig';
var target = '.editorconfig1';
// var target = '../../../.editorconfig';

if (!fs.existsSync(target)) {
	return fs.createReadStream(source).pipe(fs.createWriteStream(target));
}

fs.readFile(target, 'utf8', (err, data) => {
	if (err) throw err;
	var targetData = handleData(data);
	targetData = mergeRulesSameSectionName(targetData);
	fs.readFile(source, 'utf8', (err, data) => {
		var sourceData = handleData(data);
		var myMap = new Map();
		var myMapTemp = new Map();
		var listNameSection = [];
		targetData.map(v => myMap.set(v.name, v.rules));
		sourceData.map(v => {
			if (myMap.get(v.name)) {
				var listRules = v.rules;
				var rulesMap = transferRulesMap(myMap.get(v.name));
				listRules = listRules.filter(vRules => !rulesMap.has(transferKey(vRules)));
				if (listRules.length != 0) {
					myMapTemp.set(v.name, listRules);
					listNameSection.push(v.name);
				}
			} else {
				myMapTemp.set(v.name, v.rules);
				listNameSection.push(v.name);
			}
		});
		 listNameSection.map(v => {
			 fs.appendFileSync(target,'\n' + v + '\n', 'utf8');
			 myMapTemp.get(v).map(value => {
				fs.appendFileSync(target, value + '\n', 'utf8');
			 })
		 })
	});
});

/* Merge rules same section name  */

function mergeRulesSameSectionName(targetData) {
  for (var i = 0; i < targetData.length - 1; i++) {
		for (var j = i + 1; j < targetData.length; j++) {
			if (targetData[i].name == targetData[j].name) {
				var mapTarget = transferRulesMap(targetData[i].rules);
				targetData[j].rules.map(x => {
					if (!mapTarget.has(transferKey(x))) {
						targetData[i].rules.push(x);
					}
				});
			}
		}
	}
	var arrNameChecked = [];
	targetData = targetData.filter(x => {
		if (arrNameChecked.indexOf(x.name) < 0) {
			arrNameChecked.push(x.name);
			return true;
		}
  })
  return targetData;
}

/* Transfer Array rule to Map rule */

function transferRulesMap(arr) {
	var rulesMap = new Map();
	arr.map(x => rulesMap.set(transferKey(x), ''));
	return rulesMap;
}

/* Transfer string of rules to keys */

function transferKey(value) {
	for (var i = 0; i < value.length; i++) {
		if (value[i] == '=') {
			value = value.slice(0, i - 1);
			break;
		}
	}
	return value;
}

/* Convert string data .editorconfig file to array object section */

function handleData(data) {
	var section_list = [];
	var array = data
		.split('\n')
		.filter(value => value && !/root/i.test(value))
		.map(v => v);
	var list_index = [];
	array.map((value, index) => {
		if (/[*]/i.test(value)) {
			list_index.push(index);
		}
	});
	for (var i = 0; i < list_index.length; i++) {
		var sectionArr = [];
		var section = {
			name: '',
			rules: []
		};
		if (i == list_index.length - 1) {
			sectionArr = array.slice(list_index[i], array.length);
		} else {
			sectionArr = array.slice(list_index[i], list_index[i + 1]);
		}
		sectionArr.map((value, index) => {
			if (index == 0) {
				section.name = value;
			} else {
				section.rules.push(value);
			}
		});
		section_list.push(section);
	}
	return section_list;
}
