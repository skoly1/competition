import React, { Suspense } from "react";

import * as CONSTANTS from "../../utility/constants";

import InfiniteScroll from "react-infinite-scroll-component";
import CardComponent from "../UI Component";
import { usePageInit, useGetPageData } from "../../hooks";
import { Container } from "../../components";

const CharactersPage = () => {
  const charReduxData = usePageInit(CONSTANTS.CHARACTERS);

  const getData = useGetPageData(CONSTANTS.CHARACTERS);

  const fetchMore = () => {
    getData();
  };

  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};

export default CharactersPage;
