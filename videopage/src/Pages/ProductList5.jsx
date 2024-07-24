import React from 'react'
import Producta5 from '../Components/Producta5'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import styled from 'styled-components'
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

const ProductList5 = () => {
  return (
    <Container>
        <Navbar/>
    <Announcement/>
     
     <Title>WORKOUT ESSENTIALS</Title>
     
     <Producta5/>
     <Newsletter/>
     <Footer/>
    </Container>
  )
}

export default ProductList5