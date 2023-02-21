import { Card, Skeleton, Grid } from "../../components";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import errorImage from "../../media/img.png";
const CardComponent = (props: any) => {
  const { text, characters } = props;
  return (
    <Grid
      sx={{
        background: "#000",
        height: "100%",
        p: 4,
        mt: 4,
        width: "80%",
      }}
      justifyContent="center"
    >
      <Grid
        container
        // justifyContent="center"
        justifyContent="flex-start"
        spacing={2}
        sx={{
          pt: 0,
          p: 4,
        }}
      >
        {text !== "OK" && (
          <>
            {Array.from(Array(18)).map((_, e) => {
              return (
                <Grid key={e} item>
                  <Skeleton variant="rounded" height="350px" width="250px" />
                </Grid>
              );
            })}
          </>
        )}
        {text === "OK" && (
          <>
            {characters?.map((char: any) => {
              return (
                <Grid key={char?.id} item justifyContent="start">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={() => {}}
                  >
                    <Card
                      sx={{
                        height: "350px",
                        width: "250px",
                        boxShadow: 12,
                        background: "#141414",
                      }}
                    >
                      {/* <CardMedia
                        component="img"
                        // height={`${char?.hoverStatus ? "75%" : "100%"}`}
                        height="75%"
                        image={`${char?.thumbnail?.path}.${char?.thumbnail?.extension}`}
                        alt={`${char?.name}`}
                        sx={{ objectFit: "fill" }}
                      /> */}
                      {/* not_available */}
                      {/* {`${char?.thumbnail?.path}.${char?.thumbnail?.extension}`} */}
                      <CardMedia
                        component="img"
                        // height={`${char?.hoverStatus ? "75%" : "100%"}`}
                        height="75%"
                        image={
                          `${char?.thumbnail?.path}`.includes("not_available")
                            ? errorImage
                            : `${char?.thumbnail?.path}.${char?.thumbnail?.extension}`
                        }
                        alt={`${char?.name}`}
                        sx={{ objectFit: "fill" }}
                      />

                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{
                            pb: 6,
                            fontWeight: "600",
                            color: "#fff",
                            textAlign: "center",
                          }}
                        >
                          {char.name || char.title}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
      {/* </InfiniteScroll> */}
    </Grid>
  );
};
export default CardComponent;
