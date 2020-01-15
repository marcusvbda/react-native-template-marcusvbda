import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { Animated } from 'react-native';
import { Colors } from '~/config';

export const Container = styled(Animated.ScrollView)`
    margin: 0 30px;
`;

export const Nav = styled.View`
    margin-top: 30px;
`;


export const Code = styled.View`
    padding: 10px;
    align-self: center;
    overflow: hidden;
`;

export const NavItem = styled.TouchableOpacity.attrs({
    borderTopColor: Colors.contrast
})`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-top-width: ${StyleSheet.hairlineWidth}px;
`;

export const NavText = styled.Text.attrs({
    color: Colors.contrast
})`
    font-size: 15px;
    margin-left: 20px;
`;


export const SignOutButton = styled.TouchableOpacity.attrs({
    borderColor: Colors.contrast
})`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-radius : 4px;
    justify-content : center;
    align-items : center;
    padding : 12px;
    margin-top : 15px;
`;

export const SignOutButtonText = styled.Text.attrs({
    color: Colors.contrast
})`
    font-weight : bold;
    font-size :13px;
`;