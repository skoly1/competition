import React, { useEffect, useState } from "react";
import { Card, Container, Skeleton } from "../../components";
import { getNewsData } from "../../api";
import * as CONSTANTS from "../../utility/constants";
import { Box } from "@mui/system";
import { CardContent, CardMedia, Grid, Typography } from "@mui/material";

const CharactersPage = () => {
  const [characters, setCharacters] = useState<any>();

  // init function for Characters
  const init = async () => {
    const charData = await getNewsData(CONSTANTS.CHARACTERS, { limit: 18 });
    console.log(charData);
    setCharacters(charData);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Grid
        sx={{
          background: "#fff",
          height: "100%",
          p: 4,
          pt: 0,
          mt: 2,
        }}
        justifyContent="center"
      >
        {characters?.text !== "OK" && (
          <>
            <Grid container justifyContent="center" spacing={6}>
              {Array.from(Array(18)).map((_, e) => {
                return (
                  <Grid key={e} item>
                    <Skeleton variant="rounded" height="350px" width="250px" />
                  </Grid>
                );
              })}
            </Grid>
          </>
        )}
        {characters?.text === "OK" && (
          <>
            <Grid container justifyContent="center" spacing={6}>
              {characters?.data?.map((char: any) => {
                console.log(char);
                return (
                  <Grid key={char?.id} item justifyContent="start">
                    <Card sx={{ height: "350px", width: "250px" }}>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={`${char?.thumbnail?.path}.${char?.thumbnail?.extension}`}
                        alt="Paella dish"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {char?.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {char?.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default CharactersPage;
