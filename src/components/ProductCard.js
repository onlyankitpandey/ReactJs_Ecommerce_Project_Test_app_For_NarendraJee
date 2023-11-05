import React, { Fragment } from 'react'
import { Box, Button, Grid, Paper, Rating, Typography } from '@mui/material';
import './ProductCard.css'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data }) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
      if(data.stock > 50) {
          navigate(`/product-details?product_id=${data.id}`);
      }
    };

    return (
        <Fragment>
            <Paper onClick={handleNavigation} className={`${data.stock > 50 ? 'productCard' : 'soldproductCard'}`}>
                <Box >
                    <figure className='card'>
                        <img width="100%" src={data?.thumbnail} alt={data?.thumbnail} />
                    </figure>
                </Box>
                <Box>
                    <Typography variant='h5' >{data?.title}</Typography>
                    <p >{data?.description}</p>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <h6 >{`Price: $${data?.price}`}</h6>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: "flex" }}>
                                <h6>Stock:</h6>&nbsp;
                                <h6 sx={{ fontWeigth: "500" }} className={`${data?.stock > 50 ? "available" : "outofstoke"}`} >{`${data?.stock > 50 ? data?.stock : "Out Of Stock"}`}</h6>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <h6 >{`Brand: ${data?.brand}`}</h6>
                        </Grid>
                        <Grid item xs={6}>
                            <h6 >{`Discount: ${data?.discountPercentage}%`}</h6>
                        </Grid>
                        <Grid item xs={6}>
                            <Rating name="read-only" value={data?.rating} readOnly />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Fragment>
    )
}

export default ProductCard;