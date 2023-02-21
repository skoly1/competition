import React, { Suspense, useEffect, useState } from "react";
import { getNewsData } from "../../api";
import * as CONSTANTS from "../../utility/constants";

import { useSelector, useDispatch } from "react-redux";

import { charactersActions } from "../../store/characters-slice";
import InfiniteScroll from "react-infinite-scroll-component";
import CardComponent from "../UI Component";

const CharactersPage = () => {
  const scroll = useSelector((state: any) => state.characters.scrollPosition);

  const charReduxData = useSelector((state: any) => {
    return state?.characters;
  });

  const dispatch = useDispatch();

  const getCharData = async () => {
    const charData = await getNewsData(CONSTANTS.CHARACTERS, {
      limit: 20,
      offset: charReduxData?.offsetPage,
    });
    dispatch(
      charactersActions.characterReducer({
        charData,
        offsetPage: charReduxData?.offsetPage + 20,
        scrollPosition: window.pageYOffset,
      })
    );
  };

  // init function for Characters
  const init = async () => {
    window.scrollTo(0, scroll);
    if (!(charReduxData?.data?.length > 0)) {
      getCharData();
    }
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMore = () => {
    getCharData();
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <InfiniteScroll
          dataLength={charReduxData?.data?.length || 0}
          next={fetchMore}
          hasMore={(charReduxData?.data?.length || 0) < charReduxData?.total}
          loader={<div>Infinite Scrolling</div>}
          endMessage={<div>You reached End page</div>}
        >
          <CardComponent
            text={charReduxData?.text}
            characters={charReduxData?.data}
          />
        </InfiniteScroll>
      </Suspense>
    </>
  );
};

export default CharactersPage;
