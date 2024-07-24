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
const Finalpro8 = () => {
  return (
    <Container>
     <Navbar/>
     <Announcement/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://i.pinimg.com/564x/96/1b/7b/961b7b655d26245d8a51e1e47e16082e.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>Neoprene Dumbbells (2.5kg)</b></Title>
          <Desc>
          Add resistance training to your workouts with the Solimo neoprene dumbbell, set of 2. Resistance training not only tones muscles and builds strength, but it can also burn calories, increase energy levels, protect bone health, and more.
          </Desc>
          <Desc>
          Set of 2 dumbbells for strength training<br></br>
          Easy-grip neoprene coating<br></br>
          Ideal for fitness classes or at-home workout routines<br></br>
          </Desc>
          <Price>Rs 899</Price>
          <Desc>
          <h3>Ratings<br></br></h3>
         ★★★★<br></br>
         Ideal for beginners and advanced fitness enthusiasts alike, the Solimo neoprene dumbbell, set of 2 comes in a wide range of weights, from 1 pound up to 20 pounds (each pair sold separately). Choose the right amount of weight for your routine, preference, and number of repetitions.
          </Desc>
          <AddContainer>
            <Link to="https://www.amazon.in/Amazon-Brand-Solimo-Neoprene-Dumbbell/dp/B07GKB3K79/ref=asc_df_B07GKB3K79/?tag=googleshopdes-21&linkCode=df0&hvadid=397083777032&hvpos=&hvnetw=g&hvrand=4506853044904968587&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9148884&hvtargid=pla-812242428422&psc=1&mcid=b0253d39386839e1b06e1489df5eab45&ext_vrnc=hi&gclid=CjwKCAiA_5WvBhBAEiwAZtCU70EhAxXJ9a_8Hxq2B-eDgnOAKBj4X1Y7pdgKeOEa5V3hX7MazBnX4hoC_poQAvD_BwE">
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

export default Finalpro8