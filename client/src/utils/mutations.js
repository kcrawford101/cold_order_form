import { gql } from '@apollo/client';


export const ADD_PRODUCT = gql`
mutation  addProduct($category: String!, $item: String!, $certification: String!, $size: String!, $productCode: String!, $caseSize: !Int, $unitCost: $Int, $discountedUnitCost: !Int, ){
    addProduct(productData:$productData) {
        product{
            item
            certification
            size
            productCode
            caseSize
            unitCost
            discountedUnitCost
        }
    }
}
`;

export const EDIT_PRODUCT = gql` 
mutation editProduct($category: String!, $item: String!, $certification: String!, $size: String!, $productCode: String!, $caseSize: !Int, $unitCost: $Int, $discountedUnitCost: !Int, ){
    editProduct(productData:$productData) {
        product{
            item
            certification
            size
            productCode
            caseSize
            unitCost
            discountedUnitCost
        }
    }
}
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!, $role: String!, $region: String!, $phoneNumber: Int!, $empId: Int!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        name
        email
        password
        role
        region
        phoneNumber
        empId
      }
    }
  }
`;

