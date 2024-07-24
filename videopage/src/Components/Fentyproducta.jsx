import React from 'react'
import styled from 'styled-components';
import { fentyproducts } from '../data';
import Fentyproductsaa from './Fentyproductsaa';
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Fentyproducta = () => {
  return (
    <Container>
     {fentyproducts.map((item) => (
        <Fentyproductsaa item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Fentyproducta