import React from 'react'
import styled from 'styled-components';
import { popularProducts1 } from '../data';
import Productsaaa1 from './Productsaaa1';
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Producta1 = () => {
  return (
    <Container>
     {popularProducts1.map((item) => (
        <Productsaaa1 item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Producta1