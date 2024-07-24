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

const Slideproduct4 = () => {
  return (
    <Container>
     <Navbar/>
     <Announcement/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://i.pinimg.com/564x/64/30/af/6430af1bb5c416cd182c2fab8a4b618c.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>Pantene Miracle Rescue Moisture Mix-In, Damaged Hair Repair Conditioner</b>

          </Title>
          <Desc>
            
          Introducing our luxurious Radiant Silk Conditioner – a transformative elixir designed to pamper your locks with unparalleled care. Immerse yourself in the opulence of this exquisite formula, meticulously crafted to nurture and revitalize your hair.          </Desc>
          <Price>Rs 599</Price>
          <Desc>
          Transform your daily hair care routine into a ritual of indulgence with our Conditioner
          </Desc>
          <Desc>
            <b>Ingredients</b><br></br>
            Water,Stearyl Alcohol,Bis-Aminopropyl Dimethicone,Behentrimonium Chloride,Cetyl Alcohol,Fragrance,Benzyl Alcohol,Disodium EDTA,Histidine,Citric Acid,Panthenol,Panthenyl Ethyl Ether,Persea Gratissima (Avocado) Oil,Argania Spinosa Kernel Oil,Methylchloroisothiazolinone,Methylisothiazolinone
          </Desc>
          <Desc>
          <h3>Ratings<br></br></h3>
           ★★★★<br></br>
          The argan oil provides a nourishing boost to my hair, leaving it smooth and tangle-free. The scent is pleasant, though it could be a bit overpowering for some.
          </Desc>
          <AddContainer>
            <Link to="https://www.ubuy.co.in/product/DM2Q9VY-pantene-miracle-rescue-moisture-mix-in-damaged-hair-repair-conditioner-add-in-3-2-fl-oz-2-376-fl-oz">
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

export default Slideproduct4