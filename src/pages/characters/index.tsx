import React, { useEffect, useState } from "react";
import { Card, Container } from "../../components";
import { getNewsData } from "../../api";

const CharactersPage = () => {
  const [characters, setCharacters] = useState<any>();
  const init = async () => {
    setCharacters(await getNewsData());
  };
  useEffect(() => {
    init();
  }, []);
  console.log(characters);
  return (
    <>
      <Container>
        {characters?.status === 200 &&
          characters?.data?.map((char: any) => {
            return (
              <>
                <Card></Card>
              </>
            );
          })}
      </Container>
    </>
  );
};

export default CharactersPage;
