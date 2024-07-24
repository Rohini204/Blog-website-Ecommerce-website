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

const Slideproduct7 = () => {
  return (
    <Container>
    <Announcement/>
    <Navbar/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://i.pinimg.com/564x/8a/25/63/8a25632e2c07540a8e0a3db974292b20.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>Water Bank Cleansing Foam</b></Title>
          <Desc>
          A bouncy foam cleanser that gently and effectively cleanses skin, creating the perfect blank canvas before the rest of your skincare.
          </Desc>          
          <Price>Rs 1999</Price>
          <Desc>
          This sleeping pack is formulated with pear and melon fruit extract, which help to soothe and revitalize your skin throughout the night. It also contains CICA extracts from Madagascar, three kinds of Hyaluronic Acids, and nano-sized Ceramide, which work together to deeply hydrate your skin and keep its pH balanced.
          </Desc>
          <Desc>
            <b>Ingredients</b>
            Water / Aqua / Eau, Glycerin, Myristic Acid, Stearic Acid, Peg-32, Potassium Hydroxide, Palmitic Acid, Lauric Acid, Cocamidopropyl Betaine, Glyceryl Stearate, Peg-100 Stearate, Microcrystalline Cellulose, Fragrance / Parfum, Sodium Chloride, Disodium Edta, Butylene Glycol, Sodium Benzoate, Mentha Arvensis Leaf Extract, Hydrolyzed Hyaluronic Acid, Polycaprolactone, Titanium Dioxide (Ci 77891), Propanediol, 1,2-Hexanediol, Lactic Acid, Peg-75, Polyquaternium-10, Lactic Acid/Glycolic Acid Copolymer, Ethylhexylglycerin, Aluminum Hydroxide, Triethoxycaprylylsilane, Lycium Chinense Fruit Extract, Panthenol, Papain, Rubus Idaeus (Raspberry) Fruit Extract
          </Desc>
          <Desc>
          <h3>Ratings<br></br></h3>
           ★★★★<br></br>
          The Laneige Water Bank Blue Hyaluronic Cleansing Foam is a delightful addition to my daily skincare routine. The luxurious blue gel transforms into a rich, creamy lather that effectively cleanses my skin without over-drying. The hyaluronic acid ensures that my skin retains moisture, leaving it feeling refreshed and supple after each use. 
          </Desc>
          <AddContainer>
            <Link to="https://www.tirabeauty.com/product/laneige-water-bank-blue-hyaluronic-cleansing-foam-150g-d2cisr2pln?gad_source=1&gclid=CjwKCAiA3JCvBhA8EiwA4kujZiKCvWiytxr6AE_uDqRMmo8mc9gZrpXMTriB4xl4WTLya98ORNfFZhoCot8QAvD_BwE">
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

export default Slideproduct7