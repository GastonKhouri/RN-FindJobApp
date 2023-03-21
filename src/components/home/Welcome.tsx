import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';

import { COLORS, FONT, icons, SIZES } from "../../constants";
import JobTypeBtn from './JobTypeBtn';

const jobTypes = [ "Full-time", "Part-time", "Contractor" ];

interface Props {
	searchTerm: string;
	setSearchTerm: ( searchTerm: string ) => void;
	handlePress: () => void;
}

const Welcome = ( { handlePress, searchTerm, setSearchTerm }: Props ) => {

	const router = useRouter();

	const [ activeJobType, setActiveJobType ] = useState( jobTypes[ 0 ] );

	const onJobTypePress = ( jobType: string ) => {
		setActiveJobType( jobType );
		router.push( `/search/${ jobType }` );
	};

	return (
		<View>
			<View style={ styles.container }>
				<Text style={ styles.userName }>Hello Gaston</Text>
				<Text style={ styles.welcomeMessage }>Find your perfect job</Text>
			</View>

			<View style={ styles.searchContainer }>
				<View style={ styles.searchWrapper }>
					<TextInput
						style={ styles.searchInput }
						value={ searchTerm }
						onChangeText={ setSearchTerm }
						placeholder="What are you looking for?"
					/>
				</View>

				<TouchableOpacity
					style={ styles.searchBtn }
					onPress={ handlePress }
				>
					<Image
						source={ icons.search }
						resizeMode="contain"
						style={ styles.searchBtnImage }
					/>
				</TouchableOpacity>
			</View>

			<View style={ styles.tabsContainer }>
				<FlatList
					data={ jobTypes }
					renderItem={ ( { item } ) => (
						<JobTypeBtn
							item={ item }
							activeJobType={ activeJobType }
							onPress={ onJobTypePress }
						/>
					) }
					keyExtractor={ ( item ) => item }
					contentContainerStyle={ { columnGap: SIZES.small } }
					horizontal
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create( {
	container: {
		width: "100%",
	},
	userName: {
		fontFamily: FONT.regular,
		fontSize: SIZES.large,
		color: COLORS.secondary,
	},
	welcomeMessage: {
		fontFamily: FONT.bold,
		fontSize: SIZES.xLarge,
		color: COLORS.primary,
		marginTop: 2,
	},
	searchContainer: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		marginTop: SIZES.large,
		height: 50,
	},
	searchWrapper: {
		flex: 1,
		backgroundColor: COLORS.white,
		marginRight: SIZES.small,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: SIZES.medium,
		height: "100%",
	},
	searchInput: {
		fontFamily: FONT.regular,
		width: "100%",
		height: "100%",
		paddingHorizontal: SIZES.medium,
	},
	searchBtn: {
		width: 50,
		height: "100%",
		backgroundColor: COLORS.tertiary,
		borderRadius: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
	},
	searchBtnImage: {
		width: "50%",
		height: "50%",
		tintColor: COLORS.white,
	},
	tabsContainer: {
		width: "100%",
		marginTop: SIZES.medium,
	},
	tab: {
		paddingVertical: SIZES.small / 2,
		paddingHorizontal: SIZES.small,
		borderRadius: SIZES.medium,
		borderWidth: 1,
		// borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
	},
	tabText: {
		fontFamily: FONT.medium,
		// color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
	},
} );


export default Welcome;