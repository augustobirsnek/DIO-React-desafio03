import { UserPicture } from "../UserPicture"

import { 
    Container, 
    NameText, 
    Progress, 
} from "./styles";


const UserInfo = ({nome, image, percentual}) => {
    return (
        <Container>
            <UserPicture src={image} variant="UserInfo"/>
            <div>
                <NameText>{nome}</NameText>
                <Progress percentual={percentual}/>
            </div>
        </Container>
    )
}

export { UserInfo };