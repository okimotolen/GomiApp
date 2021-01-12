export const OnPlas = (plastic) => {
  return{
    type: 'ON_PLAS',
    plastic,
  };
};

export const OffPlas = (plastic) => {
  return{
    type: 'OFF_PLAS',
    plastic,
  };
};
