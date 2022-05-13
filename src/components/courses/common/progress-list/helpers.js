export const prepareProgressData = (previusData, current, index, array) => {
  const previusItem = previusData[index - 1] || null;

  const currentItem = {
    ...current,
    isFirstItem: index === 0,
    isCompleted: current.progress > 55,
    isLastItem: index === array.length - 1,
    isPreviusCompleted: previusItem ? previusItem.progress > 55 : false,
  };

  return [...previusData, currentItem];
};
