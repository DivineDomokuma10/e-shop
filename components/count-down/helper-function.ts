export const showTimeTitle = (index: number) => {
  switch (index + 1) {
    case 1:
      return "Days";
    case 2:
      return "Hrs";
    case 3:
      return "Mins";
    default:
      return "Secs";
  }
};
