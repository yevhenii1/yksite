import React from 'react'
import {connect} from "react-redux";
import {getNews} from "../../actions/news";
import News from "./News";

class NewsContainer extends React.Component {
    componentDidMount() {
        this.props.getNews()
    }
    render() {
        return (
            <News news={this.props.news} />
        )
    }
}

const mapStateToProps = state => {
    return {
        news: state.news
    }
}

export default connect(mapStateToProps, {getNews})(NewsContainer)