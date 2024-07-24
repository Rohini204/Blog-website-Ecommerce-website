import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { popularProducts } from '../data';
import Productsaaaa from './Productsaaaa';
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Producta = () => {

  return (
    <Container>
     {popularProducts.map((item) => (
        <Productsaaaa item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Producta