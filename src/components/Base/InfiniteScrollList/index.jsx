import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const InfiniteScrollList = ({
  data,
  handleNext,
  hasMore,
  parentRef,
  children,
}) => {
  return (
    <InfiniteScroll
      dataLength={data?.length}
      next={handleNext}
      hasMore={hasMore}
      scrollableTarget={parentRef}
    >
      {children}
    </InfiniteScroll>
  );
};

export default InfiniteScrollList;
