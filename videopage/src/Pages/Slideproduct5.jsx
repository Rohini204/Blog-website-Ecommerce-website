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
const Slideproduct5 = () => {
  return (
    <Container>
    <Announcement/>
    <Navbar/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://us.laneige.com/cdn/shop/products/LN_WB_Infographics_2023_06_1000x1000_3fd7fe42-c20a-4e4e-82fe-ab5b09a2b39e.jpg?v=1703721928" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>Water Bank Blue Hyaluronic Eye Cream</b>

          </Title>
          <Desc>
            
          Perk up with this moisture-packed Blue Hyaluronic Acid eye cream, infused with niacinamide and caffeine to brighten and refresh the under eye area! Blue Hyaluronic Acid, fermented with deep sea algae and a 10-step microfiltration process, instantly absorbs for deep, lasting hydration.
          </Desc>          
          <Price>Rs 2999</Price>
          <Desc>
          A silky-soft Blue Hyaluronic Acid eye cream that visibly brightens and improves the look of puffiness under the eyes! Dermatologist and ophthalmologist tested.
          </Desc>
          <Desc>
            <b>Ingredients</b><br></br>
            Water/Aqua/Eau, Glycerin, Butylene Glycol, Squalane, Dicaprylyl Ether, Polyglyceryl-3 Methylglucose Distearate, Methyl Trimethicone, Glyceryl Stearate, Pentaerythrityl Tetraethylhexanoate, 1,2-Hexanediol, Stearyl Dimethicone, Bis-Hydroxyethoxypropyl Dimethicone, Cetyl Alcohol, Lactobacillus Ferment Lysate, Caprylic/Capric/Myristic/Stearic Triglyceride, Palmitic Acid, Stearic Acid, Panthenol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Propanediol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Xanthan Gum, Glyceryl Caprylate, Dextrin
          </Desc>
          <Desc>
          <h3>Ratings<br></br></h3>
           ★★★★<br></br>
          The Laneige Water Bank Blue Hyaluronic Eye Cream has become a staple in my skincare routine. The lightweight, gel-like texture absorbs quickly, providing instant hydration to the delicate eye area. The inclusion of hyaluronic acid contributes to a plumper and smoother appearance.
          </Desc>
          <AddContainer>
           <Link to="https://www.tirabeauty.com/product/laneige-water-bank-blue-hyaluronic-eye-cream-25ml-e_-7s7odzn?gad_source=1&gclid=CjwKCAiA3JCvBhA8EiwA4kujZh6H6J8ZV7vVeUiM8NhBRQmD0eQQxaFc85W-SXwhdy0NKVJgwq_NlxoC7K0QAvD_BwE">
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

export default Slideproduct5