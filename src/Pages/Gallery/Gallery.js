import {
  Button,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Item,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Masonry from "@mui/lab/Masonry";
import { ImageRepo } from "../../Data/ImageRepo";
import { Images } from "../../Data/Images";
import * as _ from "lodash";

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

export default function Gallery() {
  var localImages = Images;
  localImages = _.concat(localImages, Images);
  localImages = _.concat(localImages, Images);

  return (
    <>
      <Container disableGutters={true} maxWidth="xl">
        <Paper
          square
          elevation={2}
          sx={{
            maxWidth: "100%",
            marginTop: 2,
            marginBottom: 2,
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 8,
            paddingRight: 8,
          }}
        >
          <Masonry
            columns={5}
            spacing={2}
            sx={{ maxWidth: "100%", minHeight: "1000px" }}
          >
            {localImages.map((item) => {
              return (
                <Button
                  key={item.title}
                  focusRipple
                  href={`/projects/${item.project}`}
                  sx={{
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
                    loading="lazy"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  ></img>
                </Button>
              );
            })}
          </Masonry>
        </Paper>
      </Container>
    </>
  );
}
