import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement"
import Producta1 from '../Components/Producta1';
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";

const Container = styled.div`
    
`
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
      margin: 20px;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList11 = () => {

  return (
    <Container>
        <Navbar/>
    <Announcement/>
     
     <Title>BEST SELLER</Title>
     
     <Producta1/>
     <Newsletter/>
     <Footer/>
    </Container>
  )
}

export default ProductList11;