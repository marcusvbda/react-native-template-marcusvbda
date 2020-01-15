import React from 'react';
import {
    Container,
    TabsContainer,
    TabItem,
    TabText
} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '~/config';

export default function Tabs({ translateY }) {



    return (
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 320],
                    outputRange: [0, 30],
                    extrapolate: 'clamp'
                })
            }],
            opacity: translateY.interpolate({
                inputRange: [0, 320],
                outputRange: [1, 0.3],
                extrapolate: 'clamp'
            })
        }}>
            <TabsContainer>
                <TabItem>
                    <Icon name="stars" size={24} color={Colors.contrast} style={{ alignSelf: "center" }} />
                    <TabText>Lorem Ipsum</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="stars" size={24} color={Colors.contrast} style={{ alignSelf: "center" }} />
                    <TabText>Lorem Ipsum</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="stars" size={24} color={Colors.contrast} style={{ alignSelf: "center" }} />
                    <TabText>Lorem Ipsum</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="stars" size={24} color={Colors.contrast} style={{ alignSelf: "center" }} />
                    <TabText>Lorem Ipsum</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="stars" size={24} color={Colors.contrast} style={{ alignSelf: "center" }} />
                    <TabText>Lorem Ipsum</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}