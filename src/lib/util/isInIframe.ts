const isInIframe = () => {
  try {
    return window.self !== window.top;
  } catch (_) {
    return true;
  }
};

export default isInIframe;
