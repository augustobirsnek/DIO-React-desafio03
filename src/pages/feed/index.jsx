import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import {
    Container,
    Column
} from "./styles";

const Feed = () => {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <UserInfo percentual={80} nome="Augusto Birsnek" image="https://avatars.githubusercontent.com/u/96273303?v=4" />
                    <UserInfo percentual={20} nome="Augusto Birsnek" image="https://avatars.githubusercontent.com/u/96273303?v=4" />
                    <UserInfo percentual={50} nome="Augusto Birsnek" image="https://avatars.githubusercontent.com/u/96273303?v=4" />
                    <UserInfo percentual={55} nome="Augusto Birsnek" image="https://avatars.githubusercontent.com/u/96273303?v=4" />
                    <UserInfo percentual={45} nome="Augusto Birsnek" image="https://avatars.githubusercontent.com/u/96273303?v=4" />
                    <UserInfo percentual={25} nome="Augusto Birsnek" image="https://avatars.githubusercontent.com/u/96273303?v=4" />
                </Column>
            </Container>
        </>
    )
}

export { Feed };