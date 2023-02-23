import { Card, Skeleton, Grid } from "../../components";
import { CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const PlaceHolderImg = (props: any) => {
  const { char } = props;
  return (
    <>
      <img
        alt="nothing"
        src={`${char?.thumbnail?.path}/portrait_medium.${char?.thumbnail?.extension}`}
        height="100%"
      />
    </>
  );
};

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
                      <div style={{ height: "75%" }}>
                        <LazyLoadImage
                          placeholder={<PlaceHolderImg char={char} />}
                          style={{ objectFit: "fill" }}
                          height="100%"
                          width="100%"
                          effect="blur"
                          src={`${char?.thumbnail?.path}.${char?.thumbnail?.extension}`} // use normal <img> attributes as props
                        />
                      </div>
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
    </Grid>
  );
};
export default CardComponent;
