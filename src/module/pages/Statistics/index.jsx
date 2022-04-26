import { WorkStatictics } from './component/WorkStatictics/WorkStatictics';
import { TotalStatistics } from './component/TotalStatistics/TotalStatistics';
import { Title } from 'module/Utils/Title/Title';
import { MainContainer } from 'module/Utils/MainContainer/MainContainer';
import { useGetStatistics } from './service/useGetStatistics';
import { MainSpiner } from 'module/Utils/MainSpiner/MainSpiner';

const Statistics = () => {
  const [number, isLoad] = useGetStatistics();

  return (
    <>
      {isLoad && <MainSpiner />}
      {!isLoad && (
        <MainContainer>
          <Title text={'Статистика роботи'} />
          <TotalStatistics number={number.all} />
          <WorkStatictics number={number} />
        </MainContainer>
      )}
    </>
  );
};

export default Statistics;
