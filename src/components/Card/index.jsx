import { FiThumbsUp } from "react-icons/fi";

import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture 
} from "./styles";

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://hermes.digitalinnovation.one/articles/cover/a5645a87-fb39-4d43-a10d-6f161b129e27.png" />
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/96273303?v=4'/>
                    <div>
                        <h4>Augusto Birsnek</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para o curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp />10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card };