import React from 'react'
import styled from 'styled-components';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
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
const Fentypro4 = () => {
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
    <ImgContainer>
         <Image src="https://i.pinimg.com/564x/9b/20/9f/9b209ff731b6b47e03c7d3e5edf0d59c.jpg" />
       </ImgContainer>
       <InfoContainer>
         <Title><b>HYDRA VIZOR INVISIBLE MOISTURIZER BROAD SPECTRUM SPF 30 SUNSCREEN WITH NIACINAMIDE + KALAHARI MELON</b>

         </Title>
         <Desc>
         Invisible SPF 30 moisturizer feels like nothing but delivers on everything. Refillable.

         </Desc>
         <Price>Rs 4000</Price>
         <Desc>
         This invisible SPF 30 moisturizer feels like nothing but delivers on everything—it locks in fresh hydration, fades the look of dark spots and defends against pollution. Instantly smooths while treating pores and dark spots over time. Refillable.
         </Desc>
         <Desc>
         <h3>Ratings<br></br></h3>
         ★★★★★<br></br>
           The Fenty Skin Hydra Vizor Invisible Moisturizer is a game-changer in the world of sunscreens. Its lightweight, non-greasy formula absorbs seamlessly into the skin, leaving no white cast. The packaging is not only chic but also practical with its easy-to-use pump dispenser. The inclusion of hyaluronic acid ensures my skin stays hydrated throughout the day. 
         </Desc>
         <AddContainer>
           <Link to="https://fentybeauty.com/en-in/products/melt-awf-jelly-oil-makeup-melting-cleanser?variant=41453469696045">
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

export default Fentypro4