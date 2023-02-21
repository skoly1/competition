import { Suspense, useEffect } from "react";
import { getNewsData } from "../../api";
import * as CONSTANTS from "../../utility/constants";

import { useSelector, useDispatch } from "react-redux";

import { seriesActions } from "../../store/series-slice";
import InfiniteScroll from "react-infinite-scroll-component";
import CardComponent from "../UI Component";

const SeriesPage = () => {
  const seriesReduxData = useSelector((state: any) => {
    return state?.series;
  });
  const scroll = useSelector((state: any) => state.series.scrollPosition);
  const dispatch = useDispatch();
  const getCharData = async () => {
    const seriesData = await getNewsData(CONSTANTS.SERIES, {
      limit: 20,
      offset: seriesReduxData?.offsetPage,
    });

    dispatch(
      seriesActions.SeriesReducer({
        seriesData,
        offsetPage: seriesReduxData?.offsetPage + 20,
        scrollPosition: window.pageYOffset,
      })
    );
  };

  // init function for Characters
  const init = async () => {
    if (seriesReduxData?.data?.length > 0) {
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
          dataLength={seriesReduxData?.data?.length || 0}
          next={fetchMore}
          hasMore={
            (seriesReduxData?.data?.length || 0) < seriesReduxData?.total
          }
          loader={<div style={{ color: "white" }}>Infinite Scrolling</div>}
          endMessage={<div>You reached End page</div>}
        >
          <CardComponent
            text={seriesReduxData?.text}
            characters={seriesReduxData?.data}
          />
        </InfiniteScroll>
      </Suspense>
    </>
  );
};

export default SeriesPage;
