import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, FormGroup } from '@material-ui/core';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useMutation } from '@apollo/client';
// import { ADD_PRODUCT } from '../utils/mutations';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function AddProduct() {

	const btnStyle = { margin: '8px 0' }
	const logo = { fontSize: '175px', margin: '15px 0 0', color: '#5e9dd6' }
	const logoName = { margin: '0 0 50px', color: '#5e9dd6' }
	const paperStyle = { padding: 20, height: 'fit-content', width: 500, margin: '20px auto' }

	// const [addProduct] = useMutation(ADD_PRODUCT)

  const [productData, setProductData] = useState(
    { 
      category: '', 
      productDescription: '', 
      sizeWeight: '',
      caseSize: '',
      unitCost: '',
      discountedUnitCost: '',
      productCode: '',
      upc: '',
    })


	const handleInputChange = (event) => {
		const { name, value } = event.target;
    console.log(name, value)
    let productDataClone = {...productData}
		switch (name) {
			case "Product Description": {
        productDataClone.productDescription = value
				setProductData(productDataClone);
				break;
			}
			case "Category": {
				productDataClone.category = value
				setProductData(productDataClone);
				break;
			}
			case "Size": {
				productDataClone.sizeWeight = value
				setProductData(productDataClone);
				break;
			}
			case "Case Size": {
				productDataClone.caseSize = value
				setProductData(productDataClone);
				break;
			}
			case "Unit Cost": {
				productDataClone.unitCost = value
				setProductData(productDataClone);
				break;
			}
      case "Discounted Unit Cost": {
				productDataClone.discountedUnitCost = value
				setProductData(productDataClone);
				break;
			}
      case "Product Code": {
				productDataClone.productCode = value
				setProductData(productDataClone);
				break;
			}
      case "UPC": {
				productDataClone.upc = value
				setProductData(productDataClone);
				break;
			}
			default: {
				break
			}
		}
    
	};



	const handleFormSubmit = async (event) => {
		event.preventDefault();
    console.log('test')
		// formatting so it works with our mutation
		const product = [productData]

		try {
			// await addProduct({
			// 	variables: { product: product }
			// })
      console.log({ product: product })

		} catch (err) {
			console.error(err);
		}

		// sets fields back to blank
    setProductData( 
      { 
      category: '', 
      productDescription: '', 
      sizeWeight: '',
      caseSize: '',
      unitCost: '',
      discountedUnitCost: '',
      productCode: '',
      upc: '',
    })
		
	};

	const theme = createTheme();

	return (
	<div>
	<ThemeProvider theme={theme}>
      <CssBaseline />
		<Grid>
			<Grid align='center'>
				<AcUnitIcon style={logo} /><Typography style={logoName} variant='h2'>Add Product</Typography>
			</Grid>
      <form onSubmit={(event) => handleFormSubmit(event)}>
      <FormGroup >
				<Paper elevation={10} style={paperStyle}>
					<TextField onChange={(event) => handleInputChange(event)} value={productData.category} placeholder='Category' name='Category'  fullWidth required />
					<TextField onChange={(event) => handleInputChange(event)} value={productData.productDescription} name='Product Description'  placeholder='Enter Description' fullWidth required />
					<TextField onChange={(event) => handleInputChange(event)} value={productData.sizeWeight} name='Size'  placeholder='Enter Size' fullWidth required />
					<TextField onChange={(event) => handleInputChange(event)} value={productData.caseSize} name='Case Size'  placeholder='Enter Case Size' fullWidth required />
					<TextField onChange={(event) => handleInputChange(event)} value={productData.unitCost} name='Unit Cost'  placeholder='Enter Unit Cost' fullWidth required />
					<TextField onChange={(event) => handleInputChange(event)} value={productData.discountedUnitCost} name='Discounted Unit Cost'  placeholder='Enter Discounted Unit Cost' fullWidth required />
					<TextField onChange={(event) => handleInputChange(event)} value={productData.productCode} name='Product Code'  placeholder='Enter Product Code' fullWidth required />
					<TextField onChange={(event) => handleInputChange(event)} value={productData.upc} name='UPC'  placeholder='Enter UPC' fullWidth required />
				</Paper>
        <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth>Add</Button>
			</FormGroup>
      </form>		
		</Grid>
	</ThemeProvider>
	</div>
	)
}

export default AddProduct;