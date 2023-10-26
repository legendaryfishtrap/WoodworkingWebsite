import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 6,
        }}
        component="footer"
      >
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            Here is a footer.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
