import styled,{ css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px; 
    position: relative; 
    
    color: #FFFF; 
    padding: 2px 12px; 
    min-width: 120px; 
    width: 100%; 



    ${({ variant }) =>
        variant !== "primary" &&
        css`
      min-width: 167px;
      height: 33px;
      background: #fd4e11;
         &:hover {
            opacity: 0.6; 
            cursor: pointer; 
        }

        &::after{
            content:"";
            position:absolute; 
            border: 1px solid #FD4E11;
            top: -5px; 
            left: -6px; 
            width: calc(100% +10px); 
            height: calc(100% +10px);
            border-radius:22px; 

        }
    
    
    `}   
`;
// posso passar propriedades para ele 
// vai receber uma função e retornar alguma coisa 
// validacao se variant for diferente de primary eu quero && -> incluir um codigo CSS ali dentro  -> ai eu posso colocar o codigo css ali dentro 
// fazendo um elemento fora do component botao &::after{}
// efeito de borda que foi feito width: calc(100% +10px);  com o +10px  -> sobre css 
//