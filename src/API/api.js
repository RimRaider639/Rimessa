import axios from 'axios'
const BASE_URL = 'https://rimessa.cyclic.app/'

export const getData = (url, params) => {
    const config = {
        method: 'GET',
        baseURL: BASE_URL,
        url,
        params:{
            _page: params.page,
            _limit: params.limit,
            _sort: params.sort,
            _orderBy: params.orderBY,
        }
    }
    return axios(config)
}
export const postData = (data, url) => {
    const config = {
        method: 'POST',
        baseURL: BASE_URL,
        url,
        data,
    }
    return axios(config)
}
