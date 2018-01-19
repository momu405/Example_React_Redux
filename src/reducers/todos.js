// import dotProp from 'dot-prop-immutable'
const initailState = []


const todos = (state = initailState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            description: action.descript
          }
        ]
      default:
        return state
    }
  }
  
  export default todos