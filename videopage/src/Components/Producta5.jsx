import React from 'react'
import { popularProducts5 } from '../data'
import Productsaa5 from './Productsaa5'
import styled from 'styled-components';
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Producta5 = () => {
  return (
    <Container>
    {popularProducts5.map((item) => (
       <Productsaa5 item={item} key={item.id} />
     ))}
   </Container>
  )
}

export default Producta5