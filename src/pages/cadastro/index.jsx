import { MdPerson, MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";

import {
    Column, 
    Container, 
    LoginText,
    Row, 
    SubTitleLogin, 
    Title, 
    TitleLogin, 
    Wrapper
} from "./styles";

const schema = yup.object({
    name: yup.string().min(10, 'No minimo 10 caracteres').required('Campo obrigatótio'),
    email: yup.string().email('E-mail não é valido').required('Campo obrigatótio'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatótio'),
}).required();

const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });
    
    const onSubmit = (formData) => {
        navigate(`/feed?name=${formData.name}&email=${formData.email}&senha=${formData.password}`)
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>
                            Começe agora grátis
                        </TitleLogin>
                        <SubTitleLogin>
                            Crie sua conta e make the change._
                        </SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Criar minha conta" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <SubTitleLogin>
                                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                            </SubTitleLogin>
                        </Row>
                        <Row>
                            <LoginText>Já tenho conta. <span>Fazer login</span></LoginText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Cadastro };