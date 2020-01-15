import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import {
    Container,
    Text,
    Logo,
    Email,
    Password,
    SignInButton,
    SignInButtonText,
    SingUpButton,
    Strong
} from "./styles";
import logo from '~/../assets/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import message from '~/services/message';
import api from '~/services/api';
import Loading from '~/pages/Loading';
import storage from '~/services/storage';
import { Colors } from '~/config';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    function submit() {
        if ((!email) || (!password)) return message.simple("Erro", "Preencha os campos")
        Keyboard.dismiss();
        setLoading(true);
        fakeLogin();
    }

    function fakeLogin() {
        const _fake = async () => {
            setTimeout(async () => {
                let user = { name: "Usuário Lorem Ipsum", email, password, api_token: "44554455" };
                await storage.set("user", JSON.stringify(user));
                return navigation.navigate('App');
            }, 2000);
        }
        _fake();
    }

    return (
        <Container>
            <Loading visible={loading} />
            <Logo source={logo} />
            <Text>Preencha o formulário e efetue o login.</Text>
            <Email
                placeholder="Digite o e-mail aqui..."
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <Password
                placeholder="Digite a senha aqui..."
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
            />
            <SignInButton onPress={submit}>
                <Icon name="lock" size={20} color={Colors.contrast} />
                <SignInButtonText>Entrar</SignInButtonText>
            </SignInButton>
            <SingUpButton onPress={() => message.simple("Desculpe :(", "Ainda não implementamos isso")}>
                <Text>Ainda não possui uma conta ?   <Strong>Crie uma</Strong></Text>
            </SingUpButton>
        </Container>
    );
}