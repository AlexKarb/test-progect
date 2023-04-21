import { Line } from 'react-chartjs-2';
import { useState } from 'react';
import { BntView, Container, FilterIcn, SpnArow } from './LineChart.styled';
import { useDynamicDataLebels } from './hooks/useDynamicDataLebels';
import { addAppLine, chartTitle } from './chartOpt';
import { closeAppLine, legendOption, scalesOption } from './chartOpt';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const LineChart = () => {
  const [activeBtn, setActiveBtn] = useState(false);
  const [dymanicDataLebels, addStatictics, closeStatictics] = useDynamicDataLebels();

  const dynamicMinXscale = activeBtn
    ? undefined
    : dymanicDataLebels[dymanicDataLebels.length - 23];

  return (
    <div>
      <Container>
        {dymanicDataLebels.length >= 23 && (
          <BntView onClick={() => setActiveBtn(!activeBtn)} open={activeBtn}>
            {activeBtn ? 'Скорочний звіт' : `Повний звіт `}
            <SpnArow open={activeBtn}> &#10142;</SpnArow>
          </BntView>
        )}
        <FilterIcn />
        <Line
          options={{
            responsive: true,
            maintainAspectRatio: false,
            tension: 0.5,
            plugins: {
              legend: legendOption,
              title: chartTitle,
            },
            scales: scalesOption({ minX: dynamicMinXscale }),
          }}
          data={{
            labels: [...dymanicDataLebels],
            datasets: [closeAppLine(closeStatictics), addAppLine(addStatictics)],
            scale: {
              type: 'time',
            },
          }}
        />
      </Container>
    </div>
  );
};
