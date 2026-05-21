const getScoreColor = (status) => {
  switch (status) {
    case "good":
      return "text-green-500 bg-green-50";

    case "average":
      return "text-orange-500 bg-orange-50";

    case "bad":
      return "text-red-500 bg-red-50";

    default:
      return "text-gray-500 bg-gray-50";
  }
};

export { getScoreColor };