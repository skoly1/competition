import React, { useEffect } from "react";
import { getNewsData } from "../../api";
import * as CONSTANTS from "../../utility/constants";
import { useSelector, useDispatch } from "react-redux";
import { creatorActions } from "../../store/comic-slice";
import { Card, Container, Skeleton, Grid } from "../../components";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
const CreatorsPage = () => {
  const dispatch = useDispatch();
  const creatorsObj = useSelector((state: any) => state.creators);
  const status: any = creatorsObj.status;
  const characters = creatorsObj.data;
  const text = creatorsObj.text;

  useEffect(() => {
    const init = async () => {
      const comicData = await getNewsData(CONSTANTS.CREATORS, { limit: 100 });
      dispatch(creatorActions.Replace(comicData));
    };
    init();
  }, []);

  return (
    <>
      <Grid
        sx={{
          background: "#fff",
          height: "100%",
          p: 4,

          mt: 4,
        }}
        justifyContent="center"
      >
        <Grid container justifyContent="center" spacing={6}>
          {text !== "OK" && (
            <>
              {Array.from(Array(18)).map((_, e) => {
                return (
                  <Grid key={e} item>
                    <Skeleton variant="rounded" height="350px" width="250px" />
                  </Grid>
                );
              })}
              {/* </Grid> */}
            </>
          )}
          {text === "OK" && (
            <>
              {/* <Grid container justifyContent="center" spacing={6}> */}
              {characters?.map((char: any) => {
                return (
                  <Grid key={char?.id} item justifyContent="start">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={(e) => {
                        // console.log("hover", char?.id);
                        // hoverHandler(char?.id, true);
                      }}
                      onHoverEnd={() => {
                        //console.log("end", char?.id);
                        // hoverHandler(char?.id, false);
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
                          alt={`${char?.firstName}`}
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
                            {char?.firstName}
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
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default CreatorsPage;
