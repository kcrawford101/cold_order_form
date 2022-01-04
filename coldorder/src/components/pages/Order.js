import React from 'react';

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
            <h2>Order</h2>
            {/* 
            {products.map(products) => (
                Some UI here
                image src={products.productImageURL} alt="{products.name}"
                Product details (name etc.)

                UI for the 'Add' button
            )}
            */}
        </div>
    );
}

export default Order;

/*
Notes:
- Iterate (map?) through the be items and display them
*/