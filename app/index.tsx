import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";

import { COLORS, icons, SIZES, images } from '../src/constants';
import { NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome } from '../src/components';

const HomeScreen = () => {

	const router = useRouter();
	const [ searchTerm, setSearchTerm ] = useState( '' );

	const handlePress = () => {
		router.push( `/search/${ searchTerm }` );
	};

	return (
		<SafeAreaView style={ styles.container }>
			<Stack.Screen
				options={ {
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn iconUrl={ icons.menu } dimension="60%" />
					),
					headerRight: () => (
						<ScreenHeaderBtn iconUrl={ images.profile } dimension="100%" />
					),
					headerTitle: ""
				} }
			/>
			<ScrollView showsVerticalScrollIndicator={ false }>
				<View
					style={ styles.scrollView }
				>
					<Welcome
						searchTerm={ searchTerm }
						setSearchTerm={ setSearchTerm }
						handlePress={ handlePress }
					/>
					<PopularJobs />
					<NearbyJobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		backgroundColor: COLORS.lightWhite,
	},
	scrollView: {
		flex: 1,
		padding: SIZES.medium,
	}
} );

export default HomeScreen;
