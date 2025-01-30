

import {MdEmail,MdLock, } from 'react-icons/md'
import  {Input} from "../../components/input";
import { Button } from "../../components/Button"; // fazendo a importacao do button criado no menu principal
import { Header } from "../../components/header";
import { Column,CriarText,Container,EsqueciText,SubTitleLogin,Title,TitleLogin,Wrapper,Row } from "./styles";
const Login = () => {
    
    return (<>
        <Header/>
        <Container>
            <Column>
                <Title>
                Domine os principais cálculos matemáticos e mande bem em qualquer prova ou simulado que for fazer. 
                Com nossos professores capacitados, você irá evoluir com os principais experts.
                </Title>
                
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu Cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e comece os estudos. </SubTitleLogin>
                    <form>
                        <Input placeholder="Email" leftIcon={<MdEmail/>}/>
                        <Input placeholder="Senha"type="password" leftIcon={<MdLock/>} />
                        <Button title="Entrar" variant="secondary"></Button>
                    </form>
                </Wrapper>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
        
                </Row>
                <Row>
                <CriarText>Criar Conta</CriarText>
                </Row>

            </Column>
        </Container>

        </>
        )
    
}

export {Login} //assim eu crio minha pagina