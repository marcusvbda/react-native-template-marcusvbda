import React, { useEffect, useState } from 'react';
import {
	Container,
	Content,
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	Title,
	Description,
	Moveble,
} from './styles';
import Tabs from '~/components/Tabs'
import Header from '~/components/Header'
import Menu from '~/components/Menu'
import { Animated } from "react-native";
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import storage from '~/services/storage';
import api from '~/services/api';
import Loading from '~/pages/Loading';

export default function Main({ navigation }) {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState({});

	useEffect(() => {
		async function init() {
			let _user = await storage.get("user");
			_user = JSON.parse(_user);
			api.defaults.headers.common['Authorization'] = `Bearer ${_user.api_token}`;
			setUser(_user);
			setLoading(false);
		}
		init();
	}, []);

	const translateY = new Animated.Value(0);
	const animatedEvent = new Animated.Event(
		[{
			nativeEvent: {
				translationY: translateY
			}
		}],
		{ useNativeDriver: true }
	);

	function onHandlerStateChange(event) {
		let offset = 0;

		if (event.nativeEvent.oldState === State.ACTIVE) {
			let opened = false;
			const { translationY } = event.nativeEvent;
			offset += translationY;
			if (translationY >= 100) {
				opened = true;
			} else {
				translateY.setValue(offset);
				translateY.setOffset(0);
				offset = 0;
			}

			Animated.timing(translateY, {
				toValue: opened ? 380 : 0,
				duration: 200,
				useNativeDriver: true,
			}).start(() => {
				offset = opened ? 380 : 0;
				translateY.setOffset(offset);
				translateY.setValue(0);
			});
		}
	}


	return (
		<Container>
			<Loading visible={loading} />
			<Header user={user} />
			<Content>
				<Menu translateY={translateY} navigation={navigation} user={user} />
				<PanGestureHandler
					onGestureEvent={animatedEvent}
					onHandlerStateChange={onHandlerStateChange}
				>
					<Moveble
						style={{
							transform: [{
								translateY: translateY.interpolate({
									inputRange: [-200, 0, 320],
									outputRange: [-50, 0, 320],
									extrapolate: 'clamp' //para o translate quando estrapolar os ranges
								}),
							}]
						}}>
						<Card >
							<CardHeader>
								<Title>Título</Title>
							</CardHeader>
							<CardContent>
								<Description>Footer</Description>
							</CardContent>
							<CardFooter>
								<Description>Footer</Description>
							</CardFooter>
						</Card>
					</Moveble>
				</PanGestureHandler>
			</Content>
			<Tabs translateY={translateY} />
		</Container>
	);
}