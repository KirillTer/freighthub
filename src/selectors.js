import * as R from 'ramda'

export const getCurrentPageSelector = state => state.itemsPage.currentPage

export const getItemByIdSelector = (state, id) => R.prop(id, state.items)

export const getItemsSelector = (state, ownProps) => {

    const applySearch = item => R.contains(
      state.itemsPage.search,
      R.prop('name', item)
    )

    const items = R.compose(
      R.filter(applySearch),
      R.map(id => getItemByIdSelector(state, id))
    )(state.itemsPage.ids)
  
    return items
  }
