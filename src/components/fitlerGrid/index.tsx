import React from "react";
import { Container } from "../../components";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid } from "../../components";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
const FilterGrid = () => {
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));

  const dummyData = [
    {
      id: 116,
      title: "Acts of Vengeance!",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/40/51ca10d996b8b",
        extension: "jpg",
      },
    },
    {
      id: 314,
      title: "Age of Ultron",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/10/51ca0fc4c83c8",
        extension: "jpg",
      },
    },
    {
      id: 303,
      title: "Age of X",
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/5/40/51ca12a34615b",
        extension: "jpg",
      },
    },
  ];
  console.log(dummyData[0].id);
  return (
    <Grid>
      {/* {dummyData.map((ele: any) => (
        <Item style={{ margin: "5px 0px" }}>{ele.title}</Item>
      ))} */}
      {dummyData.map((ele: any) => {
        return (
          <Paper
            key={ele.id}
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 500,
              display: "relative",
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <img
                    alt="complex"
                    src={`${ele?.thumbnail?.path}/portrait_small.${ele?.thumbnail?.extension}`}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {ele.title}
                    </Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </Grid>
  );
};

export default FilterGrid;
