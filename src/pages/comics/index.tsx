import React, { Suspense, useEffect, useState } from "react";
import { getNewsData } from "../../api";
import * as CONSTANTS from "../../utility/constants";

import { useSelector, useDispatch } from "react-redux";

import { comicActions } from "../../store/comic-slice";
import InfiniteScroll from "react-infinite-scroll-component";
import CardComponent from "../UI Component";

const ComicsPage = () => {
  const comicReduxData = useSelector((state: any) => {
    return state?.comics;
  });
  const scroll = useSelector((state: any) => state.comics.scrollPosition);
  const dispatch = useDispatch();
  const getCharData = async () => {
    const comicData = await getNewsData(CONSTANTS.COMICS, {
      limit: 20,
      offset: comicReduxData?.offsetPage,
    });
    dispatch(
      comicActions.ComicReducer({
        comicData,
        offsetPage: comicReduxData?.offsetPage + 20,
        scrollPosition: window.pageYOffset,
      })
    );
  };

  // init function for Characters
  const init = async () => {
    if (comicReduxData?.data?.length > 0) {
    } else {
      getCharData();
    }
  };

  useEffect(() => {
    window.scrollTo(0, scroll);

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMore = () => {
    getCharData();
  };

  return (
    <>
      <Suspense fallback={<div style={{ color: "white" }}>Loading...</div>}>
        <InfiniteScroll
          dataLength={comicReduxData?.data?.length || 0}
          next={fetchMore}
          hasMore={(comicReduxData?.data?.length || 0) < comicReduxData?.total}
          loader={<div style={{ color: "white" }}>Infinite Scrolling</div>}
          endMessage={<div>You reached End page</div>}
        >
          <CardComponent
            text={comicReduxData?.text}
            characters={comicReduxData?.data}
          />
        </InfiniteScroll>
      </Suspense>
    </>
  );
};

export default ComicsPage;
