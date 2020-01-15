import React from 'react';
import {
    Container,
    Nav,
    NavItem,
    NavText,
    Code,
    SignOutButton,
    SignOutButtonText
} from "./styles";
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';
import storage from '~/services/storage';
import message from '~/services/message';
import { Colors } from '~/config';

export default function Menu({ translateY, navigation, user }) {

    function logout() {
        message.confirm("Confirmação", "Deseja sair do App ? ", () => {
            storage.remove("user")
            navigation.navigate("Auth")
        });
    }

    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1]
            })
        }}>
            <Code>
                <QRCode
                    value="www.google.com"
                    size={80}
                    backgroundColor={Colors.primary}
                    color={Colors.contrast}
                ></QRCode>
            </Code>
            <Nav>
                <NavItem onPress={() => message.simple("Desculpe :(", "Ainda não implementamos isso")}>
                    <Icon name="person-outline" size={20} color={Colors.contrast} />
                    <NavText>Menu 1</NavText>
                </NavItem>
                <NavItem onPress={() => message.simple("Desculpe :(", "Ainda não implementamos isso")}>
                    <Icon name="person-outline" size={20} color={Colors.contrast} />
                    <NavText>Menu 2</NavText>
                </NavItem>
                <NavItem onPress={() => message.simple("Desculpe :(", "Ainda não implementamos isso")}>
                    <Icon name="person-outline" size={20} color={Colors.contrast} />
                    <NavText>Perfil</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={logout}>
                <SignOutButtonText>Sair do App</SignOutButtonText>
            </SignOutButton>
        </Container >
    );
}