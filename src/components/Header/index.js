import React from 'react';
import {
    Container,
    Top,
    Logo,
    Title,
    Strong
} from './styles'
import logo from '~/../assets/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '~/config';

export default function Header({ user }) {
    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Olá, <Strong>{user.name}</Strong></Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color={Colors.contrast} />
        </Container>
    );
}