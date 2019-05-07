import request from 'superagent'
  
export const loadItemsForPageApi = async(page) => {
    const {body} = await request.get(
        `http://localhost:3000/shipments?_page=${page}&_limit=20`
    )
    return body
}

export const fetchItemByIdApi = async id => {
    const {body} = await request.get(
        `http://localhost:3000/shipments/${id}`
      )
      return body
}
