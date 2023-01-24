import { MainSpiner } from 'module/Utils/MainSpiner/MainSpiner';
import { Spiner } from './EditModal.styled';

export const MiniSpiner = () => {
  return (
    <Spiner>
      <MainSpiner styled={'margin: 0; width:30px; height:30px;'} />
    </Spiner>
  );
};
