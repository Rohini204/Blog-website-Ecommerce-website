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



const Productb4 = () => {
  return (
    <Container>
     <Navbar/>
     <Announcement/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://kyliecosmetics.com/cdn/shop/products/ksxfzsqoa6mhelspqaij_800x.jpg?v=1677028181" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>Makeup Melting Cleanser</b></Title>
          <Desc>
          My makeup melting cleanser is a cream-to-oil cleanser that efficiently melts away makeup and impurities leaving skin cleansed, nourished, and radiant. this lightweight formula is non-drying, gentle enough for the eyes, and doesn’t leave behind any residue.
          </Desc>
          <Price>Rs 2500</Price>
          <Desc>
            <b>Ingredients</b><br></br>
            cetyl ethylhexanoate, aqua/water/eau, glycerin, olive oil glycereth-8 esters, butylene glycol, citrus aurantium bergamia (bergamot) fruit oil, citrus nobilis (mandarin orange) peel oil, coptis japonica extract, ethylhexylglycerin, lavandula angustifolia (lavender) oil, limonene, linalool, olea europaea (olive) fruit oil, pelargonium graveolens flower oil, polyacrylate-13, polyisobutene, polysorbate 20, rosmarinus officinalis (rosemary) leaf oil, sorbitan isostearate, phenoxyethanol.
          </Desc>
          <Desc>
          <h3>Ratings<br></br></h3>
         ★★★★<br></br>
          The creamy texture feels luxurious, and it effectively removes impurities without causing any irritation. The chamomile infusion provides a soothing effect, making it perfect for both morning and evening use.
          </Desc>
          <AddContainer>
            <Link to="https://kyliecosmetics.com/en-in/collections/kylie-skin-face-cleansers/products/melting-makeup-cleanser?variant=43927624122610">
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

export default Productb4