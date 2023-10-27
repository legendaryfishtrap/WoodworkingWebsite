import {
  Box,
  Typography,
  Container,
  Divider,
  Link,
  Stack,
} from "@mui/material";
import * as React from "react";
import Copyright from "../Copyright/Copyright";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          paddingTop: 2,
          paddingBottom: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component="footer"
      >
        <Divider style={{ width: "calc(100vw - 5vw)" }} />
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack sx={{ p: 2 }}>
            <Typography variant="h5">Quick Links</Typography>
            <Stack sx={{ pl: 1 }}>
              <Link
                href="/projects"
                variant="fullWidth"
                underline="hover"
                color="inherit"
              >
                Projects
              </Link>
              <Link
                href="/shop"
                variant="fullWidth"
                underline="hover"
                color="inherit"
              >
                Shop
              </Link>
              <Link
                href="/about"
                variant="fullWidth"
                underline="hover"
                color="inherit"
              >
                About Me
              </Link>
              <Link
                href="/contact"
                variant="fullWidth"
                underline="hover"
                color="inherit"
              >
                Contact Me
              </Link>
            </Stack>
          </Stack>
          <Stack sx={{ p: 2 }}>
            <Typography variant="subtitle1">Instagram Link</Typography>
            <Typography variant="subtitle1">Twitter Link</Typography>
            <Typography variant="subtitle1">Facebook Link</Typography>
            <Typography variant="subtitle1">Etsy Link</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <EmailIcon />
              <Typography variant="subtitle1">
                nickswoodworking@proton.me
              </Typography>
            </Box>
          </Stack>
        </Container>
        <Divider
          style={{ width: "calc(100vw - 5vw)" }}
          sx={{ marginBottom: 2 }}
        />
        <Copyright />
      </Box>
    </>
  );
}
