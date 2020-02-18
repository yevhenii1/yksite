import * as axios from 'axios'
import * as t from '../constants/news'
import * as url from '../constants/url_site'

export const getNews = () => async dispatch => {
    try {
        dispatch({
            type: t.NEWS_REQUEST,
            request: false,
        })
        const res = await axios.get(`http://${url.URL_SITE}/wp-json/wp/v2/posts/`)
        if (res.status === 200){
            dispatch({
                type: t.NEWS_SUCCESS,
                payload: {
                    getNews: res,
                }
            })
        }else {
            console.log('error')
        }
    }
    catch(error) {
        console.log(error)
    }
}

export const getNewsById = (id) => async dispatch => {
    try {

        const res = await axios.get(`http://${url.URL_SITE}/wp-json/wp/v2/posts/${(id)}`)
        console.log('id', res)
        dispatch({
            type: t.DETAIL_NEWS_SUCCESS,
            payload: {
                data: res.data,
            }
        })
    }
    catch(error) {
        console.log(error)
    }
}