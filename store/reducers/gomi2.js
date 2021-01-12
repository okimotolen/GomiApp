const initialState = {
  plastics:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_PLAS':
      return{
        plastics:[...state.plastics, action.plastic],
      };
    case 'OFF_PLAS':
      return {
        plastics:[...state.plastics.filter(plastic => plastic !== action.plastic)],
      };
    default:
      return state;
  }
};

export default reducer;
