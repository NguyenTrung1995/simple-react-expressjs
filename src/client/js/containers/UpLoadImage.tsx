import * as React from 'react';
import axios from 'axios';

class UpLoadImage extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            loaded: 0
        }
    }
    handleselectedFile = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }
    handleUpload = () => {
        const data = new FormData();
        data.append('file', this.state.selectedFile, this.state.selectedFile.name);
        axios
            .post('/api/upload', data, {
                onUploadProgress: ProgressEvent => {
                    this.setState({
                        loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
                    })
                },
            })
            .then(res => {
                console.log(res)
            })
    }
    render() {
        return (
            <div>
                <input type="file" name="" id="" onChange={this.handleselectedFile.bind(this)} />
                <button onClick={this.handleUpload}>Upload</button>
                <div> { Math.round(this.state.loaded) } %</div>
            </div>
        )
    }
}

export default UpLoadImage;