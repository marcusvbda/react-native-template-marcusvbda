import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
    height : 100px;
    margin-top : 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
    showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.TouchableOpacity`
    width : 100px;
    height : 100px;
    border-radius : 3px;
    margin-left : 10px;
    padding : 10px;
    justify-content : space-between;
    background : #FEFEFE;
    border-radius: 4px;
`;

export const TabText = styled.Text`
    font-size : 13px;
    color : #3f3f3f;
`;