import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import PopularJobCard from '../common/cards/PopularJobCard';
import { SIZES, FONT, COLORS } from '../../constants';
import { useSearchJobs } from '../../hooks';
import { Job } from '../../interfaces';

const PopularJobs = () => {

	const router = useRouter();

	const { jobsQuery } = useSearchJobs( {
		page: 1,
		query: 'Developer'
	} );

	const { data, error, isLoading } = jobsQuery;

	const [ selectedJob, setSelectedJob ] = useState( '' );

	const handleJobSelect = ( job: Job ) => {
		router.push( `job-details/${ job.job_id }` );
		setSelectedJob( job.job_id );
	};

	return (
		<View style={ styles.container }>
			<View style={ styles.header }>
				<Text style={ styles.headerTitle }>Popular Jobs</Text>
				<TouchableOpacity>
					<Text style={ styles.headerBtn }>Show all</Text>
				</TouchableOpacity>
			</View>

			<View style={ styles.cardsContainer }>
				{
					isLoading
						? (
							<ActivityIndicator size="large" color={ COLORS.primary } />
						) : error ? (
							<Text>Something went wrong</Text>
						) : (
							<FlatList
								data={ data }
								renderItem={ ( { item } ) => (
									<PopularJobCard
										job={ item }
										onPress={ handleJobSelect }
										selectedJob={ selectedJob }
									/>
								) }
								keyExtractor={ item => item.job_id }
								contentContainerStyle={ { columnGap: SIZES.medium } }
								horizontal
							/>
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
	},
} );

export default PopularJobs;