import * as t from '../constants/news'

const initialState = {
    newsList: [],
    newsItem: null,
    request: false,
}
const news = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case t.NEWS_REQUEST:
            return {
                ...state,
                request: action.request,
            }
        case t.NEWS_SUCCESS:
            console.log(action.payload.getNews.data[0])
            return {
                ...state,
                newsList: action.payload.getNews.data,
            }
        case t.DETAIL_NEWS_SUCCESS:
            return {
                ...state,
                newsItem: action.payload.data
            }
        default:
            return state
    }
}

export default news