const getStatus = (score) => {
  if (score >= 8) return "good";
  if (score >= 5) return "average";
  return "bad";
};

export { getStatus };
