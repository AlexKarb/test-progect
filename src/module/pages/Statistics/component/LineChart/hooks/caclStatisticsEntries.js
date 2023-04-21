export const caclStatisticsEntries = array => {
  return array.reduce((acc, data) => {
    const indexInStatistics = acc.findIndex(el => el[0] === data);

    if (indexInStatistics === -1) {
      acc.push([data, 1]);
    } else {
      const lebelInStatistics = acc[indexInStatistics];
      lebelInStatistics[1]++;
    }

    return acc;
  }, []);
};
