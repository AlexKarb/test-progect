export const closeAppLine = statistics => ({
  label: 'Виконані',
  data: statistics.map(el => ({ x: el[0], y: el[1] })),
  borderColor: '#3b73e4',
  backgroundColor: '#6692eb96',
  pointRadius: 1,
  borderWidth: 1,
  fill: {
    target: 'origin',
    above: '#7ea2ea40',
  },
});
