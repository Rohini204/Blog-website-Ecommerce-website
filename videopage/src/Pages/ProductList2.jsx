import React from 'react'
import styled from 'styled-components'
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement"
import Producta2 from '../Components/Producta2';
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer";

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



const ProductList2 = () => {
  return (
    <Container>
        <Navbar/>
    <Announcement/>
     
     <Title>BEST SELLER</Title>
     
     <Producta2/>
     <Newsletter/>
     <Footer/>
    </Container>
  )
}

export default ProductList2