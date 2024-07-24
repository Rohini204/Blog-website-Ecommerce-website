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
const Slideproduct8 = () => {
  return (
    <Container>
    <Announcement/>
    <Navbar/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://cdn.shopify.com/s/files/1/0255/0189/2660/products/AltImageUpdates_4.jpg?v=1661269078" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>LANEIGE Cream Skin Toner</b></Title>
          <Desc>
          The LANEIGE Cream Skin Toner is a game-changer in my skincare routine. Its innovative "cream skin" technology combines the benefits of a toner and moisturizer into one, simplifying my routine without compromising on hydration. The milky, nourishing consistency effortlessly absorbs into my skin, leaving it plump and dewy. I appreciate how it preps my skin, enhancing the absorption of subsequent skincare products. The subtle fragrance is pleasant and not overwhelming
          </Desc>          
          <Price>Rs 999</Price>
          
          <Desc>
            <b>Ingredients</b>
            Water / Aqua / Eau, Glycerin, Myristic Acid, Stearic Acid, Peg-32, Potassium Hydroxide, Palmitic Acid, Lauric Acid, Cocamidopropyl Betaine, Glyceryl Stearate, Peg-100 Stearate, Microcrystalline Cellulose, Fragrance / Parfum, Sodium Chloride, Disodium Edta, Butylene Glycol, Sodium Benzoate, Mentha Arvensis Leaf Extract, Hydrolyzed Hyaluronic Acid, Polycaprolactone, Titanium Dioxide (Ci 77891), Propanediol, 1,2-Hexanediol, Lactic Acid, Peg-75, Polyquaternium-10, Lactic Acid/Glycolic Acid Copolymer, Ethylhexylglycerin, Aluminum Hydroxide, Triethoxycaprylylsilane, Lycium Chinense Fruit Extract, Panthenol, Papain, Rubus Idaeus (Raspberry) Fruit Extract
          </Desc>
            <Desc>
            <h3>Ratings<br></br></h3>
           ★★★★★<br></br>
            The convenient pump dispenser is a nice touch, providing just the right amount with each use. While it's on the pricier side, the quality and results make it well worth the investment. A must-have for those seeking a multi-functional toner that delivers on its promises.
            </Desc>
          <AddContainer>
            <Link to="https://www.amazon.in/LANEIGE-Mini-Cream-Toner-Moisturizer/dp/B09V8SQRNM/ref=asc_df_B09V8SQRNM/?tag=googleshopdes-21&linkCode=df0&hvadid=649140888656&hvpos=&hvnetw=g&hvrand=7310245303901568887&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9148884&hvtargid=pla-1656856106048&mcid=aadc371b27de309fa5accd5075ef8964&th=1">
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

export default Slideproduct8