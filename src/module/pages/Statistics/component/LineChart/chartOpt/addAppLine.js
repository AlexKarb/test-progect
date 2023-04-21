export const addAppLine = statistics => ({
  label: 'Нові',
  data: statistics.map(el => ({ x: el[0], y: el[1] })),
  borderColor: '#176012',
  backgroundColor: '#2099189e',
  pointRadius: 1,
  borderWidth: 1,
  fill: {
    target: 'origin',
    above: '#3764343d',
  },
});
