import * as React from "react";
import styled from "styled-components";

type ButtonProps = {
    content: string
}

const Wrapper = styled.div`
width: 335px;
height: 64px;
border-radius: 5px;
display: grid;
place-items: center;
font-family: "Futura", sans-serif;
text-transform: uppercase;
color: #003D67;
font-weight: 500;
letter-spacing: 1px;
background-size: 202% auto;
background-position: left center;
background-image: linear-gradient(to right, #99DCBC 0%, #99dcbc 50.1% ,#003d67 50.2%, #003d67 100%);

-webkit-touch-callout: none; 
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none;

transition: 100ms ease-out;

&:hover {
    color: #99DCBC;
    cursor: pointer; 
    background-position: right center;
}
`;

export const Button = ({content} : ButtonProps)  => {

    return (
        <Wrapper>
            {content}
        </Wrapper>
    )
}

export default Button;

