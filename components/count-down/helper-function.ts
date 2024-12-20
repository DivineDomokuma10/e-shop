export const showTimeTitle = (index: number) => {
  switch (index) {
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
