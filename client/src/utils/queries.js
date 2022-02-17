import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query me{
    me {
        _id
        name
        email
        role
        region
        empId
    }
}
`;

export const GET_PRODUCT = gql`
query products{
    products{
        item
        upc
        productCode
        category
        certification
        size
        caseSize
        unitCost
        discountedUnitCost     
    }
}
`;

export const GET_SINGLE_PRODUCT = gql`
query getSingleProduct($productId: ID!) {
    product( productId: $productId) {
        _id
        item
        upc
        productCode
        category
        certification
        size
        caseSize
        unitCost
        discountedUnitCost 
    }
}
`;