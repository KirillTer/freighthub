import * as R from 'ramda'

export const getCurrentPageSelector = state => state.phonesPage.currentPage

export const getPhoneByIdSelector = (state, id) => R.prop(id, state.phones)

export const getPhonesSelector = (state, ownProps) => {

    const applySearch = item => R.contains(
      state.phonesPage.search,
      R.prop('name', item)
    )

    const phones = R.compose(
      R.filter(applySearch),
      R.map(id => getPhoneByIdSelector(state, id))
    )(state.phonesPage.ids)
  
    return phones
  }
