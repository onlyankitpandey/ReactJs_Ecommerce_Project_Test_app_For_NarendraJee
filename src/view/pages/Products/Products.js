import React, { Fragment, useEffect, useState } from 'react'
import { Button, Box, Grid, FormControl, Select, InputLabel, MenuItem, Container } from '@mui/material'
import usePaginatedData from '../../../CustomHooks/usePagination';
import ProductCard from '../../../components/ProductCard';
import "../../../App.css"
const apiUrl = 'https://dummyjson.com/products';

const Products = () => {
    const [start, setStart] = useState(0);
    const [limit, setLimit] = useState(10);
    const [loading, setLoading] = useState(true);
    const [selectedWithStart, setSelectedWithStart] = useState(false)

    const handleChange = (event) => {
        setStart(event.target.value);
    };
    const handleChangeLimit = (event) => {
        setLimit(event.target.value);
    };

    const { data, productList, isLoading } = usePaginatedData(apiUrl, start, limit, selectedWithStart);

    const handelInfiniteScroll = async () => {
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight
            ) {
                setLoading(true);
                setStart((prev) => prev + 10);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
    }, []);

    return (
        <Fragment>
            <Container maxWidth="lg">
                <Box className="App">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Start With</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={start}
                                    label="Start"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0} onClick={() => setSelectedWithStart(true)}>0 Items</MenuItem>
                                    <MenuItem value={20} onClick={() => setSelectedWithStart(true)}>20 Items</MenuItem>
                                    <MenuItem value={30} onClick={() => setSelectedWithStart(true)}>30 Items</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Item Limit</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={limit}
                                    label="Start"
                                    onChange={handleChangeLimit}
                                >
                                    <MenuItem value={10}>10 Items</MenuItem>
                                    <MenuItem value={20}>20 Items</MenuItem>
                                    <MenuItem value={30}>30 Items</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <br />
                    <Grid container spacing={2}>
                        {productList && productList.map((items, index) => {
                            return <Grid item xs={12} sm={6} md={4} key={index}>
                                <ProductCard data={items} />
                            </Grid>
                        })}
                    </Grid>
                </Box>
            </Container>
        </Fragment>
    )
}

export default Products;