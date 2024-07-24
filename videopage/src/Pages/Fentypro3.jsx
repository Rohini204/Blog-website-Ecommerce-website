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
const Fentypro3 = () => {
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
    <ImgContainer>
         <Image src="https://i.pinimg.com/564x/4f/9d/94/4f9d94dcb2368803752e9a01ca009df1.jpg" />
       </ImgContainer>
       <InfoContainer>
         <Title><b>MELT AWF JELLY OIL MAKEUP-MELTING CLEANSER</b>

         </Title>
         <Desc>
         The jelly-oil cleanser so good, you'll put on makeup just to take it off

         </Desc>
         <Price>Rs 4000</Price>
         <Desc>
         Finally, look forward to taking off your makeup at the end of the day—for real. This innovative jelly-oil cleanser comes in a mess-free pump and contains a custom blend of 9 luxe oils ready to erase every type of even waterproof and longwear makeup, without the drama.
         </Desc>
         <Desc>
           
         <h3>Ratings<br></br></h3>
         ★★★★★<br></br>
           This Cleanser is a solid addition to my skincare routine. The lightweight gel formula effectively removes makeup, dirt, and impurities without stripping the skin. The light cherry blossom scent is refreshing and adds a luxurious touch to the cleansing experience. I love the practical packaging, making it easy to dispense the right amount without waste.
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

export default Fentypro3