import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useLocation } from "react-router-dom";
import { useGetPageData } from "../../hooks";
import { useState } from "react";
const InputFiled = () => {
  const [enteredKey, setenteredKey] = useState("");
  const location = useLocation();

  const pathName = location.pathname.slice(1);
  console.log(pathName);
  // const apiData = useGetPageData(pathName, enteredKey);
  // console.log(apiData());
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "16ch",
        "&:focus": {
          width: "30ch",
        },
      },
    },
  }));
  const onChangeHandler = (e: any) => {
    setenteredKey(e.target.value);
  };
  return (
    <div>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default InputFiled;
