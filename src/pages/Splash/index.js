import React, { useEffect } from 'react';
import {
    Container,
    Image
} from './styles';
import logo from '~/../assets/logo.png';
import { Animated } from 'react-native';
import storage from '~/services/storage';

export default function Splash({ navigation }) {
    const value = new Animated.Value(1);

    useEffect(() => {
        const init = async () => {
            let user = await storage.get("user");
            Animated.timing(value, {
                toValue: 500,
                duration: 1000,
                useNativeDriver: true,
            }).start(() => {
                if (!user) return navigation.navigate("Auth");
                return navigation.navigate("App");
            });
        };
        setTimeout(() => {
            init();
        }, 2000)
    }, []);

    return (
        <Container>
            <Image source={logo} resizeMode="stretch"
                style={{
                    transform: [{
                        scale: value.interpolate({
                            inputRange: [0, 380],
                            outputRange: [1, 20]
                        }),
                    }],
                    opacity: value.interpolate({
                        inputRange: [0, 50],
                        outputRange: [1, 0],
                        extrapolate: 'clamp'
                    })
                }}
            />
        </Container>
    );
}