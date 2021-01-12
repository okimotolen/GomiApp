const initialState = {
  moerus:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_MOERU':
      return{
        moerus:[...state.moerus, action.moeru],
      };
    case 'OFF_MOERU':
      return {
        moerus:[...state.moerus.filter(moeru => moeru !== action.moeru)],
      };
    default:
      return state;
  }
};

export default reducer;
