export const scalesOption = ({ minX }) => {
  return {
    x: {
      axis: 'x',
      offset: true,
      min: minX,

      grid: {
        display: true,
        drawTicks: false,
        z: -2,
      },
    },

    y: {
      axis: 'y',
      min: 0,
      title: { display: true, text: 'Кількість заявок', padding: 3 },
      grid: {
        display: false,
        drawTicks: false,
        z: -2,
      },
      ticks: {
        count: 6,
        stepSize: 10,
      },
    },
  };
};
