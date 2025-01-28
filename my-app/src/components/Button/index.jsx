import React from 'react'
import {ButtonContainer} from './styles';  // eu peguei meu ButtonContainer

const Button = ({title, variant = 'primary', onClick}) => {
    return(
        <ButtonContainer variant={variant} onClick={onclick}>
            {title}

        </ButtonContainer>

    )
}
// retorna um valor dai = () =>
// onclick quando o usuario clicar quero que dispare uma acao 
// variant se eu n passar nenhuma propriedade sera a padrao que e a primary


export {Button}