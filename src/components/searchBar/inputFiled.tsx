import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useLocation } from "react-router-dom";
import { useGetPageData } from "../../hooks";
import { useState } from "react";
import FilterGrid from "../fitlerGrid";
import { Container } from "../../components";
const InputFiled = () => {
  const [showSuggestion, setshowSuggestion] = useState(false);
  const location = useLocation();

  const pathName = location.pathname.slice(1);
  // console.log(pathName);
  // const apiData = useGetPageData(pathName, enteredKey);

  // Custom search bar
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
          display: "relative",
          width: "30ch",
        },
      },
    },
  }));

  const onChangeHandler = (e: any) => {
    console.log(e.target.value);
    {
      e.target.value.length > 0 && setshowSuggestion(true);
    }
  };
  return (
    <div>
      <StyledInputBase
        placeholder="Search…"
        key="search"
        inputProps={{ "aria-label": "search" }}
        onChange={onChangeHandler}
        // value={enteredKey}
      />

      {showSuggestion && <FilterGrid />}
    </div>
  );
};

export default InputFiled;
