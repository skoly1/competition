import React, { lazy, useEffect, Suspense, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getNewsData } from "../../api";

import InfiniteScroll from "react-infinite-scroll-component";

import { COMICS } from "../../utility/constants";
import { comicActions } from "../../store/comic-slice";
const CardComponent = lazy(() => import("../UI Component"));
const ComicsPage = () => {
  const comicObject = useSelector((state: any) => state.comic);
  const [scrolled, setscrolled] = useState(true);
  const comicItems = comicObject.data;
  const text = comicObject.text;
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const init = async () => {
 
      const comicData = await getNewsData(COMICS, {
        limit: 16,
        page: page,
      });
      dispatch(comicActions.Replace(comicData));
    };
    init();
    setPage((prev) => prev + 2);
  }, [scrolled]);

  const fetchMore = () => {
    setscrolled(!scrolled);
    console.log(comicItems);
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <InfiniteScroll
          dataLength={comicItems.length}
          next={fetchMore}
          hasMore={comicItems.length < 100}
          loader={<div>Infinite Scrolling</div>}
          endMessage={<div>You reached End page</div>}
        >
          <CardComponent text={text} characters={comicItems} />;
        </InfiniteScroll>
      </Suspense>
    </>
  );
};

export default ComicsPage;
