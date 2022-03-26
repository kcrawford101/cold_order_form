import * as React from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from '../components/Navbar/Navbar';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

/*
const products = [
    {
        name: "Coffee",
        upc: "123456789",
        productCode: "string",
        category: "string",
        certification: "string",
        size: "string",
        caseSize: 1,
        unitCost: 1,
        discountedUnitCost: 1,
        productImageURL: "string",
    }
];
*/

function Order(props) {
    return (
        <div className="order">
            {/* 
            {products.map(products) => (
                Some UI here
                image src={products.productImageURL} alt="{products.name}"
                Product details (name etc.)

                UI for the 'Add' button
            )}
            */}
            <ThemeProvider theme={theme}>
                <Navbar />
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}> 
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Product
                                        </Typography>
                                        <Typography>
                                            This is the product description
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{margin:'auto'}}>
                                        <Button size="small">Add to cart</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </ThemeProvider>


        </div>
    );
}

export default Order;

/*
Notes:
- Iterate (map?) through the be items and display them
*/