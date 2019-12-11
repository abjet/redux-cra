export default (state = {}, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       ...state, count: 10
      }
     default:
      return state
    }
   }