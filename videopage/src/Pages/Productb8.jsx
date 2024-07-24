import React from 'react'

import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Newsletter from '../Components/Newsletter'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom'

const Container = styled.div``; 
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

`;

const ImgContainer = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;
const Productb8 = () => {
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
    <ImgContainer>
    <Image src="https://cdn.shopify.com/s/files/1/2185/2813/files/W5766R_05134_b1_s1_a3_1_m54_d73d1643-2f4f-471c-925a-65d01d1dbb68_750x.jpg?v=1698856010" />

       </ImgContainer>
       <InfoContainer>
         <Title><b>Supersculpt Seamless Leggings</b></Title>
         <Desc>
         Designed with our most signature waist-sculpting Supersculpt™ waistband, these leggings were designed for you to stretch and stride seamlessly no matter where your active lifestyle takes you. Consider it a comfort level-up.         </Desc>
         <Desc>
         Anti-cameltoe<br></br>
         Squat-proof<br></br>
         Moisture-absorbing cotton gusset for panty-free movement<br></br>
         Wide, ribbed, pinch-free waistband<br></br>
         Heart-shaped booty lifting back seam<br></br>
         </Desc>
         <Price>Rs 999</Price>
         <Desc>
         <h3>Ratings<br></br></h3>
         ★★★★★<br></br>
         These Everyday Comfort Lounge Leggings are perfect for, well, everyday comfort! The buttery-soft fabric feels amazing against the skin, and the elastic waistband doesn't dig in. They're versatile enough for both lounging and light activities.
         </Desc>
         <AddContainer>
           <Link to="https://www.boddactive.com/products/allure-blue-high-waist-leggings?variant=42881057226983&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=CjwKCAiAuYuvBhApEiwAzq_Yidg5B9MeZ858u3VlnzLqGv8SULl26ecuTk4lpciKdWA9-P7FK4gwqxoCJmkQAvD_BwE">
           <Button>PURCHASE</Button>
           </Link>
         </AddContainer>
       </InfoContainer>
    </Wrapper>
    <Newsletter/>
    <Footer/>
   </Container>
  )
}

export default Productb8