import * as React from "react";
import styled from "styled-components";
import { useCMS } from "tinacms";

const Button = styled.button`
position: fixed;
top: 2rem;
left: 2rem;

border: none;
border-radius: 5rem;
padding: .2rem 1rem;

color: white;
outline: inherit;
font-size: 1.2rem;
`;


export const EditButton = () => {
     const cms = useCMS();
     return(
         <Button style={{background: cms.enabled ? "dodgerblue" : "orchid"}}  onClick={() => cms.toggle()}>
             {cms.enabled ? '✖ Exit edit mode' : '✎ Edit this site'}
         </Button>
     )
    
}

export default EditButton;