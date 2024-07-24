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
const Fentypro8 = () => {
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
    <ImgContainer>
         <Image src="https://cdn.shopify.com/s/files/1/0341/3458/9485/files/FS_FALL2023_T2PRODUCT_EDITORIAL_BLEMISHDEFEATR_HERO_W-BULK_1200X1500_72DPI.jpg?v=1690410340" />
       </ImgContainer>
       <InfoContainer>
         <Title><b>BLEMISH DEFEAT'R BHA SPOT-TARGETING GEL</b>

         </Title>
         <Desc>
         The blemish fix so stealth, you'll never see it under makeup.


         </Desc>
         <Price>Rs 3900</Price>
         <Desc>
         Shield and combat blemishes without sacrificing your makeup look. This Salicylic Acid-backed, spot-targeting gel fights blemishes, clarifies, reduces surface oil and guards against environmental assailants. Its unique jelly texture dries down quickly, so you can wear it anytime you want—especially under makeup.
         </Desc>
         <Desc>
         <h3>Ratings<br></br></h3>
         ★★★★★<br></br>
         The formula is lightweight and fast-absorbing, making it easy to incorporate into my daily skincare routine. The star ingredient, BHA, works wonders in unclogging pores and reducing inflammation.
         </Desc>
         <AddContainer>
           <Link to="https://fentybeauty.com/en-in/collections/skincare-shop-all/products/blemish-defeatr-bha-spot-targeting-gel?variant=41572595531821">
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

export default Fentypro8