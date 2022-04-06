import { Link, Outlet } from 'react-router-dom';

export const ArchiveList = () => {
  return (
    <>
      <Link to="/archive/completed">Виконані заявки</Link>
      <br />
      <hr />
      <Link to="/archive/deleted">Видалені заявки </Link>
      <br />
      <hr />
      <Outlet />
    </>
  );
};
