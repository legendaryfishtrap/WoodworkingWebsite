import { Box, Toolbar, Typography, AppBar, Button } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" component="div">
              Nick's
            </Typography>
            <Button color="inherit" href="/about">
              About Me
            </Button>
            <Button color="inherit" href="/gallery">
              Gallery
            </Button>
            <Button color="inherit" href="/projects">
              Projects
            </Button>
            <Button color="inherit" href="/sale">
              For Sale
            </Button>
            <Button color="inherit" href="/plans">
              Plans
            </Button>
            <Button color="inherit" href="/contact">
              Contact Me
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
