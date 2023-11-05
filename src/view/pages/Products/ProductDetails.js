import React, { Fragment, useState, useEffect } from 'react'
import { Grid, Container, Rating, Box, Paper, Typography, Button } from '@mui/material'
import "../../../App.css"
import axios from 'axios';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ProductImageGallery from './ProductImageGallery'
import { useSearchParams, useNavigate } from 'react-router-dom';

const apiUrl = 'https://dummyjson.com/products';

const ProductDetails = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const product_id = searchParams.get('product_id');

  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState([]);



  async function fetchDataFromAPI() {
    setLoading(true)
    try {
      const response = await axios.get(`${apiUrl}/${product_id}`);
      setProductDetails(response.data);
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false)
      throw error;
    }
  }

  useEffect(() => {
    fetchDataFromAPI()
  }, [])

  return (
    <Fragment>
      <Container maxWidth="lg">
        {loading ? ":oading Page Data......" : <Paper className="soldproductdetails">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <ProductImageGallery images={productDetails.images} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='h3' color="#FFFFFF" >{productDetails?.title}</Typography>
              <br />
              <Typography variant='h5' >{productDetails?.description}</Typography>
              <br />
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography variant='h6' >{`Price: $${productDetails?.price}`}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant='h6'>Stock:</Typography>&nbsp;
                    <Typography variant='h6' sx={{ fontWeigth: "500" }} className={`${productDetails?.stock > 50 ? "available" : "outofstoke"}`} >{`${productDetails?.stock > 50 ? productDetails?.stock : "Out Of Stock"}`}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='h6' >{`Brand: ${productDetails?.brand}`}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='h6' >{`Discount: ${productDetails?.discountPercentage}%`}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Rating name="read-only" value={productDetails?.rating} readOnly />
                </Grid>
                <Grid item xs={6}>
                  <Button variant='Success' onClick={() => navigate(-1)}><KeyboardBackspaceIcon />Back</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>}

      </Container>
    </Fragment>
  )
}

export default ProductDetails