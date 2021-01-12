export const OnSound = (sound) => {
  return{
    type: 'ON_SOUND',
    sound,
  };
};

export const OffSound = (sound) => {
  return{
    type: 'OFF_SOUND',
    sound,
  };
};
