import React from "react";
import Container from "@mui/material/Container";

const ContainerComp = (props: any) => {
  return (
    <Container {...props} maxWidth="xl">
      {props.children}
    </Container>
  );
};

export default ContainerComp;
