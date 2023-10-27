import { Button, Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Masonry from "@mui/lab/Masonry";
import { ImageRepo } from "../../Data/ImageRepo";
import { Images } from "../../Data/Images";
import * as _ from "lodash";
import * as React from "react";

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.0,
  transition: theme.transitions.create("opacity"),
}));

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

export default function Projects() {
  var localImages = Images;
  localImages = _.concat(localImages, Images);
  localImages = _.concat(localImages, Images);

  return (
    <Box sx={{ mt: 2 }}>
      <Container
        maxWidth="xl"
        sx={{
          px: "4px",
          minHeight: "calc(100vh)",
        }}
      >
        <Masonry columns={4}>
          {localImages.map((item, index) => {
            return (
              <Button
                key={item.title}
                focusRipple
                href={`/projects/${item.project}`}
                sx={{
                  width: "100%",
                  "&:hover": {
                    "& .MuiTypography-root": {
                      opacity: 1,
                    },
                    "& .MuiImageBackdrop-root": {
                      opacity: 0.4,
                    },
                  },
                }}
              >
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="h5"
                    sx={{
                      position: "absolute",
                      opacity: "0",
                      maxWidth: "90%",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Image>
                <img
                  src={`${ImageRepo}${item.img}`}
                  srcSet={`${ImageRepo}${item.img}`}
                  alt={item.title}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                ></img>
              </Button>
            );
          })}
        </Masonry>
      </Container>
    </Box>
  );
}
