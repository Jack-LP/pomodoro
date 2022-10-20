const padTo2Digits = (num) => {
  return num.toString().padStart(2, '0');
};

export const convertTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
};
