import React, { Suspense, useEffect, useState } from "react";
import { getNewsData } from "../../api";
import * as CONSTANTS from "../../utility/constants";

import { useSelector, useDispatch } from "react-redux";

import { eventActions } from "../../store/event-slice";
import InfiniteScroll from "react-infinite-scroll-component";
import CardComponent from "../UI Component";

const EventsPage = () => {
  const eventReduxData = useSelector((state: any) => {
    return state?.events;
  });
  const scroll = useSelector((state: any) => state.events.scrollPosition);
  const dispatch = useDispatch();
  const getCharData = async () => {
    const eventData = await getNewsData(CONSTANTS.EVENTS, {
      limit: 20,
      offset: eventReduxData?.offsetPage,
    });

    dispatch(
      eventActions.EventReducer({
        eventData,
        offsetPage: eventReduxData?.offsetPage + 20,
        scrollPosition: window.pageYOffset,
      })
    );
  };

  // init function for Characters
  const init = async () => {
    if (eventReduxData?.data?.length > 0) {
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
          dataLength={eventReduxData?.data?.length || 0}
          next={fetchMore}
          hasMore={(eventReduxData?.data?.length || 0) < eventReduxData?.total}
          loader={<div style={{ color: "white" }}>Infinite Scrolling</div>}
          endMessage={<div>You reached End page</div>}
        >
          <CardComponent
            text={eventReduxData?.text}
            characters={eventReduxData?.data}
          />
        </InfiniteScroll>
      </Suspense>
    </>
  );
};

export default EventsPage;
