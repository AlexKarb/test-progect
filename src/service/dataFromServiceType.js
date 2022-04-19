import servicesType from 'Storage/servicesType.json';

// {children_food: "", ...}

export const servicesTypesObject = () =>
  servicesType.reduce((pV, { type }) => {
    return { ...pV, [type]: '' };
  }, {});

//  [{type: 'clothes_adult', label: 'одяг для дорослих'}, {..},]
export const namesOfServiceTypes = () =>
  servicesType.map(({ type, label }) => {
    return { type, label };
  });

//{children_food: "дитяче харчування", ...}
export const namesOfServiceTypesObject = () =>
  servicesType.reduce((pV, { type, label }) => {
    return { ...pV, [type]: label };
  }, {});

export const allDataServicesType = () => servicesType;
