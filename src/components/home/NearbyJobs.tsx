import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';

import { COLORS, FONT, SIZES } from "../../constants";
import { useSearchJobs } from '../../hooks';
import { NearbyJobCard, PopularJobCard } from '../common';

const NearbyJobs = () => {

	const router = useRouter();

	const { jobsQuery } = useSearchJobs( {
		page: 1,
		query: 'Developer'
	} );

	const { data, error, isLoading } = jobsQuery;

	// console.log( data );

	// const isLoading = false;

	return (
		<View style={ styles.container }>
			<View style={ styles.header }>
				<Text style={ styles.headerTitle }>Nearby Jobs</Text>
				<TouchableOpacity>
					<Text style={ styles.headerBtn }>Show all</Text>
				</TouchableOpacity>
			</View>

			<View style={ styles.cardsContainer }>
				{
					isLoading ? (
						<ActivityIndicator size="large" color={ COLORS.primary } />
					) : error ? (
						<Text>Something went wrong</Text>
					) : (
						data?.map( job => (
							<NearbyJobCard
								job={ job }
								key={ `nearby-job-${ job.job_id }` }
								handleNavigate={ () => router.push( `/job-details/${ job.job_id }` ) }
							/>
						) )
					)
				}
			</View>
		</View>
	);
};

const styles = StyleSheet.create( {
	container: {
		marginTop: SIZES.xLarge,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: SIZES.small,
	},
	headerTitle: {
		fontSize: SIZES.large,
		fontFamily: FONT.medium,
		color: COLORS.primary,
	},
	headerBtn: {
		fontSize: SIZES.medium,
		fontFamily: FONT.medium,
		color: COLORS.gray,
	},
	cardsContainer: {
		marginTop: SIZES.medium,
		gap: SIZES.small,
	},
} );

export default NearbyJobs;