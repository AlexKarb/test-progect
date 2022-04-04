import { ApplicationList } from '../ApplicationList/ApplicationList';

export const ActiveApplication = () => (
  <ApplicationList>
    тут буде знаходиться майбутній список активних заявок
  </ApplicationList>
);

// const WhoNeedHelpList = () => {
//   const [data, setData] = useState();
//   const [filters, setFilter] = useState([]);
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     setItems(data);
//     const filteredItems = data?.filter(({ type }) =>
//       filters.every(filter => type.includes(filter))
//     );
//     setItems(filteredItems);
//   }, [data, filters]);

//   useEffect(() => {
//     getPendingPublications().then(setData);
//   }, []);

//   return (
//     <>
//       <Filter setFilter={setFilter} filter={filters} />
//       {data && <HelpList data={items} />}
//     </>
//   );
// };

// export default WhoNeedHelpList;
