import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import logo from "../../media/spiderman.png";

const pages = ["Characters", "Comics", "Events", "Series"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ background: "rgb(18, 18, 18)" }}>
        <Grid sx={{ pl: 12, pr: 12 }}>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* mobile */}
                {pages.map((page) => (
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={`${page.toLowerCase()}`}
                    key={page}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography component={Link} to="/">
              <img
                src={logo}
                alt="bug"
                height={40}
                style={{ filter: "invert(1)" }}
              />
            </Typography>
            <Box
              sx={{ ml: 2, flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {/* web */}
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: "bold",
                  }}
                  component={Link}
                  to={page.toLowerCase()}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Grid>
      </AppBar>
      <Outlet />
    </>
  );
}
export default Navbar;
