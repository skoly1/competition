import React, { useEffect, useState } from "react";
import { Card, Skeleton } from "../../components";
import { getNewsData } from "../../api";
import * as CONSTANTS from "../../utility/constants";
import { CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const CharactersPage = () => {
  const [characters, setCharacters] = useState<any>();
  const [charStatus, setChardacterStatus] = useState<string>("");

  // init function for Characters
  const init = async () => {
    const charData = await getNewsData(CONSTANTS.COMICS, { limit: 18 });

    setCharacters(charData?.data);
    setChardacterStatus(charData?.text);
  };

  useEffect(() => {
    init();
  }, []);

  const hoverHandler = (id: number, hoverStatus: boolean) => {
    const newCharData = characters?.map((char: any) => {
      if (char.id === id) {
        return { ...char, hoverStatus };
      }
      return char;
    });

    setCharacters(() => newCharData);
  };

  return (
    <>
      <Grid
        sx={{
          background: "#000",
          height: "100%",
          p: 4,

          mt: 4,
        }}
        justifyContent="center"
      >
        {charStatus !== "OK" && (
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
        {charStatus === "OK" && (
          <>
            <Grid container justifyContent="center" spacing={6}>
              {characters?.map((char: any) => {
                return (
                  <Grid key={char?.id} item justifyContent="start">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {
                        console.log("hover", char?.id);
                        hoverHandler(char?.id, true);
                      }}
                      onHoverEnd={() => {
                        console.log("end", char?.id);
                        hoverHandler(char?.id, false);
                      }}
                    >
                      <Card
                        sx={{
                          height: "350px",
                          width: "250px",
                          boxShadow: 12,
                          background: "#141414",
                        }}
                      >
                        <CardMedia
                          component="img"
                          // height={`${char?.hoverStatus ? "75%" : "100%"}`}
                          height="75%"
                          image={`${char?.thumbnail?.path}.${char?.thumbnail?.extension}`}
                          alt={`${char?.name}`}
                          sx={{ objectFit: "fill" }}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                              pb: 6,
                              fontWeight: "600",
                              color: "#fff",
                              textAlign: "center",
                            }}
                          >
                            {char?.title}
                          </Typography>
                          {/* <Typography variant="body2" color="text.secondary">
                            {char?.description}
                          </Typography> */}
                        </CardContent>
                      </Card>
                    </motion.div>
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
