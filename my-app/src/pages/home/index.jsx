
import {Container, TextContent,Title,TitleHighlight } from "./styles";
import BarnnerImage from '../../assets/barnner.png'

import { Button } from "../../components/Button"; // fazendo a importacao do button criado no menu principal
import { Header } from "../../components/header";
const Home = () => {
    
    return (<>
        <Header/>
        <Container>
            <div>
                <Title><TitleHighlight>Calcule</TitleHighlight><br/>
                o seu futuro max agora!
                
                </Title>
                <TextContent>
                Domine os principais cálculos matemáticos e mande bem em qualquer prova ou simulado que for fazer. 
                Com nossos professores capacitados, você irá evoluir com os principais experts.
                </TextContent>

                <Button title="Começar Agora" variant="secondary" onClick={()=> null}/> 

            </div>
            
            <div>
                <img src={BarnnerImage} alt="imagem Principal" className="src" />
            </div>
        </Container>

        </>
        )
    
}

export {Home} //assim eu crio minha pagina