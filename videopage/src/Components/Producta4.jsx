import React from 'react'
import { popularProducts4 } from '../data'
import styled from 'styled-components';
import Productsaa4 from './Productsaa4';
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Producta4 = () => {
  return (
    <Container>
     {popularProducts4.map((item) => (
        <Productsaa4 item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Producta4