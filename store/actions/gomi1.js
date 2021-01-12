export const OnMoeru = (moeru) => {
  return{
    type: 'ON_MOERU',
    moeru,
  };
};

export const OffMoeru = (moeru) => {
  return{
    type: 'OFF_MOERU',
    moeru,
  };
};
