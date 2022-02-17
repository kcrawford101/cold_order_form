import React from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import AcUnitIcon from '@mui/icons-material/AcUnit';

function addProduct() {

    const btnStyle={margin:'8px 0'}
    const logo={fontSize:'175px', margin:'15px 0 0', color:'#5e9dd6'}
    const logoName={margin:'0 0 50px', color:'#5e9dd6' }
    const paperStyle={padding: 20, height: 'fit-content', width: 500, margin: '20px auto'}

    return (
        <Grid>
            <Grid align='center'>
                <AcUnitIcon style={logo} /><Typography style={logoName} variant='h2'>Add Product</Typography>
            </Grid>            
            <Paper elevation={10} style={paperStyle}>
                <TextField label='Category' placeholder='Enter Category' fullWidth required/>
                <TextField label='Product Description' placeholder='Enter Description' fullWidth required/>
                <TextField label='Size/Weight' placeholder='Enter Size/Weight' fullWidth required/>
                <TextField label='Case Size' placeholder='Enter Case Size' fullWidth required/>
                <TextField label='Unit Cost' placeholder='Enter Unit Cost' fullWidth required/>
                <TextField label='Discounted Unit Cost' placeholder='Enter Discounted Unit Cost' fullWidth required/>
                <TextField label='Product Code' placeholder='Enter Product Code' fullWidth required/>
                <TextField label='UPC Code' placeholder='Enter UPC Code' fullWidth required/>
                <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth>Add</Button>
            </Paper>
        </Grid>
    )
}

export default addProduct;