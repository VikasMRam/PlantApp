export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const getWindowObject = () => {
  if (window) {
    return window;
  }
};
