import servicesType from 'Storage/servicesType.json';

export const servicesTypesObject = servicesType.reduce((pV, { type }) => {
  return { ...pV, [type]: '' };
}, {});

export const namesOfServiceTypes = servicesType.map(({ type, label }) => {
  return { type, label };
});

export const allDataServicesType = servicesType;
