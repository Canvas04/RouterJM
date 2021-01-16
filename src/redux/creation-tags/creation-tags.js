export default (state = { tagList: [], inputData: [] }, action) => {
  switch (action.type) {
    case 'TYPE':
      return {
        ...state,
        inputData: [[...action.payload].join('')],
        isEmpty: false,
      }
    case 'ADD_TAG':
      return {
        inputData: [],
        isEmpty: true,
        tagList: [...action.payload, ...action.prevState],
      }
    case 'REMOVE_TAG':
      const removingElementId = action.payload
      const { tagList } = state
      const resArr = tagList.filter((el,i) => i !== removingElementId)
      return { ...state, tagList: resArr }
    default:
      return state
  }
}
