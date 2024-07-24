import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.div`
    display : flex;
`
const Left = styled.div`
    flex : 1;
    display : flex;
    flex-direction :column;
    padding : 20px;
`
const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
    flex : 1;
    padding : 20px;
`

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 40%;
  margin-bottom: 10px;
`;
const Right = styled.div`
    flex : 1;
    padding : 20px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    height:30px;
`;
const Footer = () => {
  return (
    <Container>
     <Left>
        <Logo>The Art of Healthy Living</Logo>
        <Desc>
        Our health blog website is your go-to destination for expert insights, tips, and advice on all things related to health and wellness. Whether you're looking for fitness routines, nutritious recipes, mental health support, or the latest medical research, our blog covers it all.
        </Desc>
        <SocialContainer>
            <SocialIcon>
            <FacebookIcon color="E4405F"/>
            </SocialIcon>
            <SocialIcon>
            <InstagramIcon color="E4405F"/>
            </SocialIcon>
            <SocialIcon>
            <TwitterIcon color="55ACEE"/>
            </SocialIcon>
            <SocialIcon>
            <PinterestIcon  color="E60023"/>
            </SocialIcon>
        </SocialContainer>
     </Left>
     <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Beauty</ListItem>
          <ListItem>Food</ListItem>
          <ListItem>Fitness</ListItem>
          <ListItem>Wellness</ListItem>
          <ListItem>Shop</ListItem>
          
        </List>
     </Center>
     <Right>
        <Title>Contact</Title>
        <ContactItem>
        <RoomIcon style={{marginRight:"10px"}} />
        <a href={'https://www.google.co.in/maps/search/Sri+Krishna+College+Of+Technology/@10.9276015,76.9067131,15z?entry=ttu'} target='_blank' style={{textDecoration:"none", color:"black"}}>

        WWHG+28R, Golf Rd, Arivoli Nagar,Kovaipudur
        </a>

        </ContactItem>
        <ContactItem>
        <PhoneIcon style={{marginRight:"10px"}}/> +91 9566970711
        </ContactItem>
        <ContactItem>
        <MailOutlineIcon style={{marginRight:"10px"}}/>contact@theartofhealthyliving
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
     </Right>
    </Container>
  )
}

export default Footer