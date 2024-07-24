import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Productsaa4 from '../Components/Productsaa4';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import Producta4 from '../Components/Producta4';
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
const ProductList4 = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
  
    const handleFilters = (e) => {
      const value = e.target.value;
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
    };
  return (
    <Container>
        <Navbar/>
    <Announcement/>
     
     <Title>BEST SELLER</Title>
     
     <Producta4/>
     <Newsletter/>
     <Footer/>
    </Container>
  )
}

export default ProductList4