const initialState = { count: 69 }

const basicReducer = (prevState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: prevState.count + action.value
      }
    default:
      return initialState
  }
}

export default basicReducer
