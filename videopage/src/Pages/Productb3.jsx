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
const Productb3 = () => {
  return (
    <Container>
     <Navbar/>
     <Announcement/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://i.pinimg.com/564x/70/e6/67/70e6678b6a0c87ea3a78ed16f53e3286.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>LANEIGE Lip Sleeping Mask - Berry: Nourish & Hydrate with Vitamin C, Antioxidants, 0.7 oz.</b></Title>
          <Desc>
          What it is: A leave-on lip mask that delivers intense moisture and antioxidants while you sleep with Berry Fruit Complex, Murumuru seed and Shea butter.
          </Desc>
          <Price>Rs 1500</Price>
          <Desc>
          Berry Mix Complex: Rich in antioxidants to help reveal smooth and supple looking lips.
        
          </Desc>
          <Desc>
            <b>Ingredients</b><br></br>
            water/aqua/eau, potassium cocoyl glycinate, cocamidopropyl betaine, potassium cocoate, glycerin, hydroxyacetophenone, 1,2-hexanediol, caprylyl glycol, trisodium ethylenediamine disuccinate, citric acid, polyquaternium-39, fragrance (parfum), sodium benzoate, actinidia chinensis (kiwi) seed oil, sodium hyaluronate, phenoxyethanol
          </Desc>
          <Desc>
          <h3>Ratings<br></br></h3>
         ★★★★★<br></br>
          This lip mask is a true lifesaver for my perpetually dry lips! The formula feels like silk, gliding on effortlessly and leaving my lips feeling incredibly hydrated.
          </Desc>
          <AddContainer>
            <Link to="https://www.amazon.in/Laneige-Sleeping-Moisturizing-Vitamin-Antioxidant/dp/B0BPC8KG73/ref=asc_df_B0BPC8KG73/?tag=googleshopdes-21&linkCode=df0&hvadid=619660122431&hvpos=&hvnetw=g&hvrand=14234932539615346517&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9148884&hvtargid=pla-1945997707338&psc=1&mcid=6f334e2e0b2b3f3790f50852c555230a&gclid=CjwKCAiAuYuvBhApEiwAzq_YiTcIH75sSNaA94qygVv4bPAbPLv9MrIhzdkF9MhS-Dcw-1LERHD6UBoC9zwQAvD_BwE">
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

export default Productb3