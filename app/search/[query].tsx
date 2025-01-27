import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { Text, SafeAreaView } from 'react-native';

import { COLORS, FONT, icons, SIZES } from '../../src/constants';
import { ScreenHeaderBtn, NearbyJobCard } from '../../src/components';
import { useSearchJobs } from '../../src/hooks';

const JobSearch = () => {

	const { query } = useSearchParams() as { query: string; };
	const router = useRouter();

	const [ page, setPage ] = useState( 1 );

	const { jobsQuery } = useSearchJobs( {
		page: page,
		query
	} );

	const { data, error, isLoading } = jobsQuery;
	// const [ searchResult, setSearchResult ] = useState( [] );
	// const [ searchLoader, setSearchLoader ] = useState( false );
	// const [ searchError, setSearchError ] = useState( null );

	// const handleSearch = async () => {
	// 	setSearchLoader( true );
	// 	setSearchResult( [] );

	// 	try {
	// 		const options = {
	// 			method: "GET",
	// 			url: `https://jsearch.p.rapidapi.com/search`,
	// 			headers: {
	// 				"X-RapidAPI-Key": '',
	// 				"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
	// 			},
	// 			params: {
	// 				query: params.id,
	// 				page: page.toString(),
	// 			},
	// 		};

	// 		const response = await axios.request( options );
	// 		setSearchResult( response.data.data );
	// 	} catch ( error ) {
	// 		setSearchError( error );
	// 		console.log( error );
	// 	} finally {
	// 		setSearchLoader( false );
	// 	}
	// };

	const handlePagination = ( direction: 'left' | 'right' ) => {
		if ( direction === 'left' && page > 1 ) {
			setPage( page - 1 );
			// handleSearch();
		} else if ( direction === 'right' ) {
			setPage( page + 1 );
			// handleSearch();
		}
	};

	// useEffect( () => {
	// 	handleSearch();
	// }, [] );

	return (
		<SafeAreaView style={ { flex: 1, backgroundColor: COLORS.lightWhite } }>
			<Stack.Screen
				options={ {
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn
							iconUrl={ icons.left }
							dimension='60%'
							handlePress={ () => router.back() }
						/>
					),
					headerTitle: "",
				} }
			/>

			<FlatList
				data={ data }
				renderItem={ ( { item } ) => (
					<NearbyJobCard
						job={ item }
						handleNavigate={ () => router.push( `/job-details/${ item.job_id }` ) }
					/>
				) }
				keyExtractor={ ( item ) => item.job_id }
				contentContainerStyle={ { padding: SIZES.medium, rowGap: SIZES.medium } }
				ListHeaderComponent={ () => (
					<>
						<View style={ styles.container }>
							<Text style={ styles.searchTitle }>{ query }</Text>
							<Text style={ styles.noOfSearchedJobs }>Job Opportunities</Text>
						</View>
						<View style={ styles.loaderContainer }>
							{
								isLoading ? (
									<ActivityIndicator size='large' color={ COLORS.primary } />
								) : error ? (
									<Text>Oops something went wrong</Text>
								) : null
							}
						</View>
					</>
				) }
				ListFooterComponent={ () => (
					<View style={ styles.footerContainer }>
						<TouchableOpacity
							style={ styles.paginationButton }
							onPress={ () => handlePagination( 'left' ) }
						>
							<Image
								source={ icons.chevronLeft }
								style={ styles.paginationImage }
								resizeMode="contain"
							/>
						</TouchableOpacity>
						<View style={ styles.paginationTextBox }>
							<Text style={ styles.paginationText }>{ page }</Text>
						</View>
						<TouchableOpacity
							style={ styles.paginationButton }
							onPress={ () => handlePagination( 'right' ) }
						>
							<Image
								source={ icons.chevronRight }
								style={ styles.paginationImage }
								resizeMode="contain"
							/>
						</TouchableOpacity>
					</View>
				) }
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create( {
	container: {
		width: "100%",
	},
	searchTitle: {
		fontFamily: FONT.bold,
		fontSize: SIZES.xLarge,
		color: COLORS.primary,
	},
	noOfSearchedJobs: {
		marginTop: 2,
		fontFamily: FONT.medium,
		fontSize: SIZES.small,
		color: COLORS.primary,
	},
	loaderContainer: {
		marginTop: SIZES.medium
	},
	footerContainer: {
		marginTop: SIZES.small,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		gap: 10
	},
	paginationButton: {
		width: 30,
		height: 30,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.tertiary
	},
	paginationImage: {
		width: '60%',
		height: '60%',
		tintColor: COLORS.white
	},
	paginationTextBox: {
		width: 30,
		height: 30,
		borderRadius: 2,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.white
	},
	paginationText: {
		fontFamily: FONT.bold,
		fontSize: SIZES.medium,
		color: COLORS.primary
	}
} );

export default JobSearch;