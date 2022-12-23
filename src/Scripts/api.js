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
            _order: params.order,
            q:params.q,
            category: params.category,
            brand: params.brand,
            department: params.department,
            subCategory: params.subCategory,
            id: params.id,
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

export const validateLogin = (url, params) => {
    const config = {
        method: 'GET',
        baseURL: BASE_URL,
        url,
        params,
    }
    return axios(config)
}

export const patchData = (data, url, params) => {
    const config = {
        method: 'POST',
        baseURL: BASE_URL,
        url,
        data,
        params,
    }
    return axios(config)
}

export const deleteData = (url, params) => {
    
}