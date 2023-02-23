import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import FilterGrid from "../fitlerGrid";
import InputFiled from "./inputFiled";
const searchBar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "absolute",
    right: "1%",
    top: "20%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    top: "6px",
    pointerEvents: "none",
    // display: "flex",
    alignItems: "center",
    // justifyContent: "center",
  }));

  return (
    <Search style={{ marginRight: "8px" }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputFiled />
    </Search>
  );
};
export default searchBar;
