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
const Fentypro6 = () => {
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
    <ImgContainer>
         <Image src="https://i.pinimg.com/564x/77/da/6c/77da6c5a9d29c589b380937c49fe3b20.jpg" />
       </ImgContainer>
       <InfoContainer>
         <Title><b>FLASH NAP INSTANT REVIVAL PRIMING EYE GEL-CREAM WITH GREEN TEA + PERSIAN SILK TREE + EYE MASSAGE TOOL</b>

         </Title>
         <Desc>
         Eye cream + cooling mini eye massage tool to instantly brighten and wake up tired-looking eyes.


         </Desc>
         <Price>Rs 5200</Price>
         <Desc>
         Like a flash nap in a tube: fake your eight hours and give off well-rested vibes anytime, anywhere. Works on contact to reduce the look of puffiness and dark circles, while plumping the look of fine lines, wrinkles and crow’s feet instantly and over time. The cooling mini eye massage tool rolls on an extra boost of eye revival.
         </Desc>
         <Desc>
         <h3>Ratings<br></br></h3>
         ★★★★☆<br></br>
         The Flash Nap eye gel-cream is a savior for my sleep-deprived eyes. The green tea infusion feels incredibly soothing, and the Persian silk tree provides a noticeable lift. The eye massage tool is a nice touch, though I find it a bit gimmicky. Nevertheless, the overall product is effective, and I'm seeing positive results in terms of firmness and hydration.
         </Desc>
         <AddContainer>
           <Link to="https://fentybeauty.com/en-in/collections/skincare-shop-all/products/flash-nap-instant-revival-priming-eye-gel-cream-with-green-tea-persian-silk-tree-eye-massage-tool?variant=39329803206701">
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

export default Fentypro6