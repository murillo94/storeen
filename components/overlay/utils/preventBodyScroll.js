let previousOverflow;

const preventBodyScroll = preventScroll => {
  if (preventScroll) {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = previousOverflow || '';
  }
};

export default preventBodyScroll;
