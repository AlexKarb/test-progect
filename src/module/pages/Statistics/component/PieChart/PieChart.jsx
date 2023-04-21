import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { STATUS_OF_APP } from 'static/transtale/status_of_app';
import { Container, FilterIcn } from './PieChart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.color = '#2f4fbb';

const LABELS_PIE_CHART = Object.values(STATUS_OF_APP);

export const PieChart = ({ statistics }) => {
  const data = Object.keys(STATUS_OF_APP).reduce((acc, status) => {
    acc.push(statistics[status]);
    return acc;
  }, []);

  return (
    <Container>
      <FilterIcn />
      <Pie
        options={{
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            title: {
              display: true,
              padding: {
                bottom: 20,
              },
              text: 'Загальна кількість заявок',
            },
          },
        }}
        data={{
          labels: LABELS_PIE_CHART,

          datasets: [
            {
              label: 'Кількість заявок: ',
              data,
              backgroundColor: [
                '#3764343d',
                '#c9d07c5e',
                '#7ea2ea40',
                'rgba(113, 113, 113, 0.2)',
              ],
              borderColor: ['#48be40', '#c8921c', '#3b73e4', '#ffffff50'],
              borderWidth: 1,
            },
          ],
        }}
      />
    </Container>
  );
};
