import React from 'react'
import styled from 'styled-components';
import { popularProducts2 } from '../data';
import Productsaa2 from './Productsaa2';
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Producta2 = () => {
  return (
    <Container>
     {popularProducts2.map((item) => (
        <Productsaa2 item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Producta2