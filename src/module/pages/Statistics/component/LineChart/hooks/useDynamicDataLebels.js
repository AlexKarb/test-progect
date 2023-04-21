import { useSelector } from 'react-redux';
import { getRequest } from 'service/redux/request';
import { caclStatisticsEntries } from './caclStatisticsEntries';
import { dynamicLebels } from './dynamicLebels';
import { sortAndFormatedArray } from './sortAndFormatedArray';

export const useDynamicDataLebels = () => {
  const requestData = useSelector(getRequest);
  const arrayDataAddApp = [];
  const arrayDataCloseApp = [];

  const allData = requestData
    .map(({ dataAdd, dataClose }) => {
      if (dataClose) arrayDataCloseApp.push(dataClose);
      if (dataAdd) arrayDataAddApp.push(dataAdd);

      return dataClose ? [dataAdd, dataClose] : [dataAdd];
    })
    .flat();

  const addStatictics = caclStatisticsEntries(sortAndFormatedArray(arrayDataAddApp));
  const closeStatictics = caclStatisticsEntries(sortAndFormatedArray(arrayDataCloseApp));
  const dymanicDataLebels = dynamicLebels(allData);

  return [dymanicDataLebels, addStatictics, closeStatictics];
};

//   allData.push(
//     ...test,
//     '2023-10-24T12:37:13.616Z',
//     '2023-10-23T12:37:13.616Z',
//     '2020-04-25T12:37:13.616Z',
//     '2020-02-22T16:22:36.745Z',
//     '2022-02-22T16:22:36.745Z',
//     '2023-02-22T16:22:36.745Z',
//     '2036-11-22T16:22:36.745Z',
//     '2038-11-22T16:22:36.745Z',
//     '2039-11-22T16:22:36.745Z',
//     '2040-11-22T16:22:36.745Z',
//     '2037-12-22T16:22:36.745Z',

//     '2025-04-25T12:37:13.616Z',
//     '2026-02-22T16:22:36.745Z',
//     '2027-02-22T16:22:36.745Z',
//     '2028-02-22T16:22:36.745Z',
//     '2024-11-22T15:05:09.526Z',
//     '2024-11-22T09:39:16.002Z',
//     '2024-11-22T12:37:13.616Z',
//     '2024-11-22T12:37:13.616Z',
//     '2024-11-22T16:22:36.745Z',
//     '2024-11-22T12:37:13.616Z',
//     '2035-11-22T16:22:36.745Z',
//     '2036-11-22T16:22:36.745Z',
//     '2036-11-22T16:22:36.745Z'
// //   );

// var test = [
//   '2020-02-02T15:05:09.526Z',
//   '2021-05-11T09:39:16.002Z',
//   '2022-11-22T12:37:13.616Z',
//   '2023-04-25T12:37:13.616Z',
//   '2023-02-22T16:22:36.745Z',
//   '2022-07-21T12:37:13.616Z',
//   '2023-05-29T16:23:07.723Z',

//   '2024-11-22T15:05:09.526Z',
//   '2024-11-22T09:39:16.002Z',
//   '2024-11-22T12:37:13.616Z',
//   '2024-11-22T12:37:13.616Z',
//   '2024-11-22T16:22:36.745Z',
//   '2024-11-22T12:37:13.616Z',
//   '2034-04-29T16:23:07.723Z',

//   '2023-02-02T15:05:09.526Z',
//   '2022-05-11T09:39:16.002Z',
//   '2022-12-22T12:37:13.616Z',
//   '2022-03-25T12:37:13.616Z',
//   '2022-03-22T16:22:36.745Z',
//   '2023-02-21T12:37:13.616Z',
//   '2023-04-29T16:23:07.723Z',

//   '2023-05-25T12:37:13.616Z',
//   '2023-03-22T16:22:36.745Z',
// ];

// var arrayDataAddApp = [
//   ...test,
//   '2020-04-25T12:37:13.616Z',
//   '2020-02-22T16:22:36.745Z',
//   '2022-02-22T16:22:36.745Z',
//   '2023-02-22T16:22:36.745Z',

//   '2025-04-25T12:37:13.616Z',
//   '2026-02-22T16:22:36.745Z',
//   '2027-02-22T16:22:36.745Z',
//   '2028-02-22T16:22:36.745Z',
// ]; //del

// var arrayDataCloseApp = [
//   ...test,
//   '2023-10-24T12:37:13.616Z',
//   '2023-10-23T12:37:13.616Z',
//   '2024-11-22T15:05:09.526Z',
//   '2024-11-22T09:39:16.002Z',
//   '2024-11-22T12:37:13.616Z',
//   '2024-11-22T12:37:13.616Z',
//   '2024-11-22T16:22:36.745Z',
//   '2035-11-22T16:22:36.745Z',
//   '2036-11-22T16:22:36.745Z',
//   '2038-11-22T16:22:36.745Z',
//   '2039-11-22T16:22:36.745Z',
//   '2040-11-22T16:22:36.745Z',
//   '2037-12-22T16:22:36.745Z',
// ]; //del
