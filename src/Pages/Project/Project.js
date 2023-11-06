import * as React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { Projects } from "../../Data/projects";
import { ImageRepo } from "../../Data/ImageRepo";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { KeyboardReturn } from "@mui/icons-material";

export function loader({ params }) {
  return Projects[params.projectName];
}

function ConvertImagesToImageGalleryFormat(
  projectName,
  images,
  projectThumbnails
) {
  let converted = [];
  images.forEach((image, index) => {
    converted.push({
      original: `${ImageRepo}${projectName}/${image}`,
      thumbnail: `${ImageRepo}${projectName}/${projectThumbnails[index]}`,
    });
  });
  return converted;
}

export default function Project() {
  const project = useLoaderData();

  const convertedImages = ConvertImagesToImageGalleryFormat(
    project.projectName.toLowerCase(),
    project.projectImages,
    project.projectThumbnails
  );

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "95vh",
          padding: "16px",
          alignItems: "center",
        }}
      >
        <ImageGallery
          items={convertedImages}
          showNav={false}
          showPlayButton={false}
        />
        <Container
          sx={{
            marginTop: "32px",
          }}
        >
          <Typography variant="h4" gutterBottom textAlign={"center"}>
            {project.projectName}
          </Typography>
          <Typography variant="body1">{project.projectDescription}</Typography>
        </Container>
      </Container>
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          transform: "translateZ(0px)",
          flexGrow: 1,
        }}
      >
        <IconButton
          href="/projects"
          size="large"
          sx={{
            position: "relative",
            borderRadius: "50%",
            backgroundColor: "grey",
            "&:hover": {
              backgroundColor: "black",
            },
          }}
          color="primary"
        >
          <KeyboardReturn fontSize="large" style={{ color: "white" }} />
        </IconButton>
      </Box>
    </>
  );
}
