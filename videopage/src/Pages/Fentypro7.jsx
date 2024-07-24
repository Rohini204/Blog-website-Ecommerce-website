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
const Fentypro7 = () => {
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
    <ImgContainer>
         <Image src="https://i.pinimg.com/564x/fc/a7/93/fca7932b80d04c2d38693a066dda1348.jpg" />
       </ImgContainer>
       <InfoContainer>
         <Title><b>BUFF RYDER EXFOLIATING BODY SCRUB WITH SUPERFINE SAND + FRUIT ENZYMES</b>

         </Title>
         <Desc>
         Gentle + effective exfoliating body scrub with fruit enzymes and nourishing oils.


         </Desc>
         <Price>Rs 3900</Price>
         <Desc>
         Give your skin the Barbados beach treatment all year round. Sugar, salt, superfine sand, fruit enzymes and nourishing oils gently buff away the rough while bringing the smooth, leaving you feeling fine and refined.
         </Desc>
         <Desc>
         <h3>Ratings<br></br></h3>
         ★★★★☆<br></br>
         Buff Ryder has officially become a game-changer in my shower routine! The combination of superfine sand and fruit enzymes in this exfoliating body scrub is nothing short of amazing. The texture is perfect – not too harsh, not too gentle – just right. The scent is incredibly refreshing, and it feels like I'm treating my skin to a spa-like experience every time I use it.
         </Desc>
         <AddContainer>
           <Link to="https://fentybeauty.com/en-in/collections/skincare-body/products/buff-ryder-exfoliating-body-scrub-with-superfine-sand-fruit-enzymes?variant=39430546587693">
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

export default Fentypro7