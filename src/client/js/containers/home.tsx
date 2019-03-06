import * as React from 'react';
import ProductListItem from './product/product-list-item';
import { itemsFetchData, fetchSessionUser } from '../actions';
import { connect } from 'react-redux';

class Home extends React.Component<any, any> {

    componentDidMount() {
        this.props.fetchData('/api/fetchdata');
        this.props.fetchSession();
    }

    showError = () => (<p>Sorry! There was an error loading the items</p>);
    showLoading = () => (<p>Loading…</p>);

    render() {
        return(
            <div>
                {this.props.hasErrored ? this.showError() : this.props.isLoading 
                    ? this.showLoading() : <ProductListItem products={this.props.items}/>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
})

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(itemsFetchData(url)),
    fetchSession: () => dispatch(fetchSessionUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);