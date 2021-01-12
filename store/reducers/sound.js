const initialState = {
  sounds:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_SOUND':
      return{
        sounds:[...state.sounds, action.sound],
      };
    case 'OFF_SOUND':
      return {
        sounds:[...state.sounds.filter(sound => sound !== action.sound)],
      };
    default:
      return state;
  }
};

export default reducer;
