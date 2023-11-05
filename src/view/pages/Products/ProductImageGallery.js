import React, { useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import "../../../App.css"
const ProductImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);


  console.log("images---", images);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <Box mt={4}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <figure className="mainImagedThumbnail">
            <img src={mainImage} alt="Product" style={{ width: "100%" }} />
          </figure>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {images.map((image, index) => (
              <Grid item xs={3} key={index}>
                <figure className="thumbnailImage">
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() => handleThumbnailClick(image)}
                  />
                </figure>
              </Grid>
            ))}
          </Grid>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductImageGallery;
