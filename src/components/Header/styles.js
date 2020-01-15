import styled from 'styled-components/native';
import { Colors } from '~/config';

export const Container = styled.View`
    align-items : center;
    padding : 40px 0 30px;
`;

export const Top = styled.View`
    flex-direction : column;
    align-items : center;
    margin-bottom : 10px;
`;

export const Title = styled.Text.attrs({
    color: Colors.contrast
})``;

export const Logo = styled.Image``;

export const Strong = styled.Text.attrs({
    color: Colors.contrast
})`
    font-weight:bold;
`;
