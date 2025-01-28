import React from 'react';
import logo from "../../assets/logo-glz.png" // chamei a logo de "logo" e a chamei na pasta assets. 
import { Button } from '../Button';
import {
    BuscarInputContainer,
    Menu, 
    MenuRight, 
    Input, 
    Row, 
    Wrapper, 
    Container
 } from './styles';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da Globalize"/>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar....'/>
                    </BuscarInputContainer>
                    <Menu>Live Mat</Menu>
                    <Menu>Super</Menu>
                </Row>
                <Row>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Wrapper>

    )
}
//o wratper fica por volta de tudo 
// o menu tem que ter um link abrir e fechar 
export {Header}