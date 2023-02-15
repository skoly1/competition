import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(props: any) {
  const { title, imgurl, height, desc } = props;
  console.log(title, imgurl);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: height }} image={imgurl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
