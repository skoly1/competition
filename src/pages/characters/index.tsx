import React, { Suspense, useEffect, useState } from "react";
import { getNewsData } from "../../api";
import * as CONSTANTS from "../../utility/constants";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { charactersActions } from "../../store/characters-slice";
import InfiniteScroll from "react-infinite-scroll-component";
import CardComponent from "../UI Component";
import { charsState } from "../../utility/interfaces";

const CharactersPage = () => {
  const [charPageData, setCharPageData] = useState<charsState>({
    status: 0,
    text: "",
    data: [],
    total: 0,
    offsetPage: 0,
  });
  const charReduxData = useSelector((state: any) => {
    return state?.characters;
  });

  console.log(charReduxData);

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
      })
    );

    setCharPageData((prev: any) => {
      return {
        ...prev,
        text: charData?.text,
        status: charData?.status,
        data: [...prev?.data, ...charData?.data],
        total: charData?.total,
        offsetPage: charPageData?.offsetPage + 20,
      };
    });
  };

  // init function for Characters
  const init = async () => {
    if (charReduxData?.data?.length > 0) {
      setCharPageData(charReduxData);
    } else {
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
          dataLength={charPageData?.data?.length || 0}
          next={fetchMore}
          hasMore={(charPageData?.data?.length || 0) < charPageData?.total}
          loader={<div>Infinite Scrolling</div>}
          endMessage={<div>You reached End page</div>}
        >
          <CardComponent
            text={charPageData?.text}
            characters={charPageData?.data}
          />
        </InfiniteScroll>
      </Suspense>
    </>
  );
};

export default CharactersPage;
