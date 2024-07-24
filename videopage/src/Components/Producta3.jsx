import React from 'react'
import styled from 'styled-components';
import { popularProducts3 } from '../data';
import Productsaa3 from './Productsaa3';
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Producta3 = () => {
  return (
    <Container>
     {popularProducts3.map((item) => (
        <Productsaa3 item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Producta3