import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNewsById} from '../../actions/news'

class DetailNews extends Component {
    componentDidMount() {
        this.props.getNewsById(1)
    }
    render() {
        console.log('1', this.props)

        return (
            <div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        news: state.news
    };
}

export default connect(
    mapStateToProps, {getNewsById}
)(DetailNews);
