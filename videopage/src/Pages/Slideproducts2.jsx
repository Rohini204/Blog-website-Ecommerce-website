import React from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import { Link } from 'react-router-dom';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
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
const Slideproducts2 = () => {
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
    <ImgContainer>
         <Image src="https://www.bandier.com/cdn/shop/files/LOK00238_BABYLAVENDER_Side_2_1980x.jpg?v=1705959482" />
       </ImgContainer>
       <InfoContainer>
         <Title><b>Bella Bonded Top</b>

         </Title>
         <Desc>
         Crafted from a lightweight and breathable blend of polyester and spandex, our workout top ensures optimal ventilation during even the most intense workouts. Stay cool and dry as you push your limits.

         </Desc>
         <Price>Rs 3900</Price>
         <Desc>
         Engineered with advanced moisture-wicking technology, this top effortlessly pulls sweat away from your body, keeping you comfortable and focused on your fitness goals.
         </Desc>
         <Desc>
         <h3>Ratings<br></br></h3>
         ★★★★★<br></br>
         Experience unrestricted movement with our four-way stretch fabric. Whether you're lifting, stretching, or running, this top moves with you, providing unparalleled flexibility.
         </Desc>
         <AddContainer>
           <Link to="https://www.bandier.com/collections/bras/products/bonded-low-impact-bra-purple-1">
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

export default Slideproducts2