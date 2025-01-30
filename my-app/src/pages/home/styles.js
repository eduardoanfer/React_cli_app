import styled  from "styled-components";
export const Container= styled.main`
    width: 100%; 
    display: flex; 
    max-width: 80%; 
    margin:0 auto;  
    margin-top: 120px; 

    flex-direction: row; 
    justify-content: space-between; 
    align-items: center; 

`

// tag declarativa .main 
// margin 0 auto -> para ficar alinhado ao centro 
// margin-top 120px para nao fdicar colado com cabecario 

export const Title= styled.h2`

    font-family: 'Open Sans'; 
    font-size: 32px; 
    font-style:normal; 
    font-weight: 700; 
    width: 320px; 
    margin-bottom: 20px; 
    line-height: 44px; 
    color: #ffffff; 
`
// margin-botton : para nao ficar muito colado com outro texto

export const TitleHighlight = styled.span`
    color:  #fd4e11; 

`

export const TextContent = styled.p`
    font-family: 'Open Sans'; 
    font-size: 16px; 
    font-style:normal; 
    font-weight: 400; 
    width: 420px; 
    margin-bottom: 20px; 
    line-height: 22px; 
    color: #ffffff; 


`