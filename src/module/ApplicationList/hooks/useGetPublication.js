import { filteringItems } from 'module/Filter/hooks/filteringItems';
import { useEffect, useState } from 'react';
import { getSortedPublications } from 'service/api-service';
import { Request } from 'service/redux/api';

export const useGetPublication = (type, filter) => {
  const [itemsOfList, setItemsOfList] = useState();
  const allItems = Request.getAll();

  useEffect(() => {
    (async function () {
      const sortedItemByType = await getSortedPublications(type, allItems?.data);
      const filtered = await filteringItems(sortedItemByType, filter);

      setItemsOfList(filtered || sortedItemByType);
    })();
  }, [filter, allItems?.data, type]);

  return [itemsOfList];
};

// var testJSON = [
//   {
//     contacts: {
//       name: 'wsdc',
//       tel: 'scsdc',
//       adress: 'sdc ',
//     },
//     additional: {
//       clothes_adult: 'dvs',
//       clothes_child: '',
//       food: '',
//       children_food: '',
//       diapers: '',
//       hygiene: '',
//       otherHelp: '',
//     },
//     _id: '63cabfccdb11248a23a14a2a',
//     dataInProgress: null,
//     dataCompleted: null,
//     dataClose: null,
//     typeHelp: ['clothes_adult'],
//     info: '',
//     delivery: false,
//     status: 'pending',
//     owner: '63b56595267ca915027d9389',
//     creator: '63b56595267ca915027d938b',
//     dataAdd: '2023-01-20T16:22:36.745Z',
//   },
//   {
//     contacts: {
//       name: 'qwedf',
//       tel: 'wedc',
//       adress: 'sdc',
//     },
//     additional: {
//       clothes_adult: 'sdc',
//       clothes_child: '',
//       food: '',
//       children_food: '',
//       diapers: '',
//       hygiene: '',
//       otherHelp: '',
//     },
//     _id: '63cabfebdb11248a23a14a2e',
//     dataInProgress: null,
//     dataCompleted: null,
//     dataClose: null,
//     typeHelp: ['clothes_adult'],
//     info: '',
//     delivery: false,
//     status: 'pending',
//     owner: '63b56595267ca915027d9389',
//     creator: '63b56595267ca915027d938b',
//     dataAdd: '2023-01-20T16:23:07.723Z',
//   },
// ];
