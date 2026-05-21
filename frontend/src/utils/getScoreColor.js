const getScoreColor = (status) => {
  switch (status) {
    case "good":
      return "text-green-500";

    case "average":
      return "text-orange-500";

    case "bad":
      return "text-red-500";

    default:
      return "text-gray-500";
  }
};

export { getScoreColor };