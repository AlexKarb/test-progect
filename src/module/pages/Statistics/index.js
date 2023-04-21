import { WorkStatictics } from './component/WorkStatictics/WorkStatictics';

import { Title } from 'module/Utils/Title/Title';
import { MainContainerWithoutBg } from 'module/Utils/MainContainer/MainContainer';
import { useGetStatistics } from './service/useGetStatistics';
import { MainSpiner } from 'module/Utils/MainSpiner/MainSpiner';
import { PieChart } from './component/PieChart';
import { LineChart } from './component/LineChart';
import { Wrapp } from './component/Wrapper/Wrapper';

const Statistics = () => {
  const [statistics] = useGetStatistics();

  return (
    <>
      <MainContainerWithoutBg>
        {!statistics && <MainSpiner />}
        {statistics && (
          <>
            <Title text={'Статистика роботи'} />

            <WorkStatictics statistics={statistics} />
            <Wrapp>
              <LineChart />
              <PieChart statistics={statistics} />
            </Wrapp>
          </>
        )}
      </MainContainerWithoutBg>
    </>
  );
};
export default Statistics;
