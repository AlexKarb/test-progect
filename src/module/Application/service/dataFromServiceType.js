import servicesType from 'Storage/servicesType.json';

export const servicesTypesObject = servicesType.reduce((pV, { type }) => {
  return { ...pV, [type]: '' };
}, {});

export const allDataServicesType = servicesType;
