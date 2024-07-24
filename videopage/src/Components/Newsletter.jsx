import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;


`
const Title = styled.h1`
    font-size : 70px;
    margin-bottom : 20px;
`
const Desc= styled.div`
    font-size : 24px;
    font-weight : 300;
    margin-bottom : 20px;
`
const InputContainer = styled.div`
    width : 50%;
    height : 40px;
    background-color : white;
    display : flex;
    justify-content : space-between;
    border : 1px solid lightgray;
`
const Input= styled.input`
    border : none;
    flex : 8;
    padding-left : 20px;
`
const Button = styled.button`
    flex : 1;
    border : none;
    background-color : black;
    color: white;
`
const Subscribe= styled.div`
display:flex;
flex-wrap:wrap;
text-align : center ;
margin-left: 400px;
margin-right: 400px;
margin-top: 30px;
font-size: 20px;
`
const Subsbut=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 50px;
color:#fff;
background: #111111;
border-radius: 10px;
font-size: 19px;
font-weight: 700px;
cursor: pointer;
margin: 0 auto;
font-size: 20px;
`
const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = () => {
        console.log("Clicked on Icon!"); 
        console.log("Email:", email);

        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            console.log("Invalid email entered.");
            setMessage('Please enter a valid email address.');
            return;
        }

        console.log("Email is valid. Clearing input field."); // Debugging point
        setEmail('');

        console.log("Email is valid!"); 
        setMessage('Updates will be sent to your email!');
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
        <Input placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <Button onClick={handleSubscribe}>
           <SendIcon/>
        </Button>
        </InputContainer>
        <Subscribe>{message}</Subscribe>
        <Subscribe>Stay updated on the latest health tips, articles, and exclusive offers by subscribing to our newsletter. Don't miss out on valuable insights to improve your well-being!</Subscribe>
        <br></br>
        <Subsbut>
            <Link to='/subscription' style={{textDecoration:'none', color:"#fff"}}>
                Subscribe
            </Link>
            </Subsbut>
    </Container>
  )
}

export default Newsletter
