import request from 'superagent'

export const fetchItemsApi = async () => {
    const {body} = await request.get(
      'http://localhost:3000/shipments?_page=1&_limit=20'
    )
    return body
}
  

export const loadMorePhonesApi = async(page) => {
    const {body} = await request.get(
        `http://localhost:3000/shipments?_page=${page}&_limit=20`
    )
    return body
}

export const fetchPhoneByIdApi = async id => {
    const {body} = await request.get(
        `http://localhost:3000/shipments/${id}`
      )
      return body
}
