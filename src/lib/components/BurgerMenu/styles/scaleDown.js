const styles = {
  pageWrap: (isOpen, width) => ({
      MozTransform: isOpen ? '' : `translate3d(0, 0, -${width})`,
      MsTransform: isOpen ? '' : `translate3d(0, 0, -${width})`,
      OTransform: isOpen ? '' : `translate3d(0, 0, -${width})`,
      WebkitTransform: isOpen ? '' : `translate3d(0, 0, -${width})`,
      transform: isOpen ? '' : `translate3d(0, 0, -${width})`,
      transformOrigin: '100%',
      transformStyle: 'preserve-3d',
      transition: 'all 0.5s'
  }),

  outerContainer: () => ({
    perspective: '1500px'
  })
};

export default styles;
