import { Box, Toolbar, Typography, AppBar, Button } from "@mui/material";
import * as React from "react";
import { useLocation } from "react-router-dom";
import * as _ from "lodash";

export default function Header() {
  var location = useLocation();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="relative"
          style={{ background: "white", color: "black" }}
        >
          <Toolbar>
            <Button color="inherit" href="/">
              <Typography
                variant="h5"
                component="div"
                style={{ paddingRight: "2rem" }}
              >
                Nick's
              </Typography>
            </Button>
            <Button
              color="inherit"
              href="/projects"
              sx={{
                fontWeight: _.includes(location.pathname, "/projects")
                  ? "bold"
                  : _.includes(location.pathname, "/")
                  ? "bold"
                  : "regular",
              }}
            >
              Projects
            </Button>
            {/* <Button color="inherit" href="/shop">
              Shop
            </Button> */}
            <Button
              color="inherit"
              href="/about"
              sx={{
                fontWeight: _.includes(location.pathname, "/about")
                  ? "bold"
                  : "regular",
              }}
            >
              About Me
            </Button>
            <Button
              color="inherit"
              href="/contact"
              sx={{
                fontWeight: _.includes(location.pathname, "/contact")
                  ? "bold"
                  : "regular",
              }}
            >
              Contact Me
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
