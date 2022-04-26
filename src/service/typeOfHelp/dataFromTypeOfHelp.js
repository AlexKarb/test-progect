import typeOfHelp from 'service/typeOfHelp/typeOfHelp';

// {children_food: "", ...}
export const nameObjectTypeOfHelp = () =>
  typeOfHelp.reduce((pV, { name }) => {
    return { ...pV, [name]: '' };
  }, {});

//  [{type: 'clothes_adult', label: 'одяг для дорослих'}, {..},]
export const nameLabelArrayTypeOfHelp = () =>
  typeOfHelp.map(({ name, label }) => {
    return { name, label };
  });

//{children_food: "дитяче харчування", ...}
export const nameEngUkrObjectTypeOfHelp = () =>
  typeOfHelp.reduce((pV, { name, label }) => {
    return { ...pV, [name]: label };
  }, {});

export const allTypeOfHelp = () => typeOfHelp;
