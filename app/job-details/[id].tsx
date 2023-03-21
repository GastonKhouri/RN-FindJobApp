import React, { useState } from 'react';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, RefreshControl, ActivityIndicator } from 'react-native';

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../src/components';
import { Tab } from '../../src/interfaces';
import { useJobDetails } from '../../src/hooks';
import { COLORS, icons, SIZES } from '../../src/constants';

const tabs: Tab[] = [ "About", "Qualifications", "Responsibilities" ];

const JobDetails = () => {

	const { id } = useSearchParams() as { id: string; };
	const router = useRouter();

	const { jobQuery } = useJobDetails( id );

	const { data, error, isLoading, refetch } = jobQuery;

	const [ isRefreshing, setIsRefreshing ] = useState( false );
	const [ activeTab, setActiveTab ] = useState( tabs[ 0 ] );

	const onRefresh = () => {

	};

	const displayTabContent = () => {

		if ( !data || data?.length === 0 ) return null;

		switch ( activeTab ) {

			case "Qualifications":
				return (
					<Specifics
						title="Qualifications"
						points={ data[ 0 ].job_highlights?.Qualifications ?? [ 'N/A' ] }
					/>
				);

			case "Responsibilities":
				return (
					<Specifics
						title="Responsibilities"
						points={ data[ 0 ].job_highlights?.Responsibilities ?? [ 'N/A' ] }
					/>
				);

			case "About":
				return (
					<JobAbout
						info={ data[ 0 ].job_description ?? 'No data provided' }
					/>
				);

			default:
				break;

		}

	};

	return (
		<SafeAreaView style={ { flex: 1, backgroundColor: COLORS.lightWhite } }>
			<Stack.Screen
				options={ {
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerBackVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn
							iconUrl={ icons.left }
							dimension="60%"
							handlePress={ () => router.back() }
						/>
					),
					headerRight: () => (
						<ScreenHeaderBtn
							iconUrl={ icons.share }
							dimension="60%"
							handlePress={ () => { } }
						/>
					),
					headerTitle: ""
				} }
			/>

			<ScrollView
				showsVerticalScrollIndicator={ false }
				refreshControl={
					<RefreshControl
						refreshing={ isRefreshing }
						onRefresh={ onRefresh }
					/>
				}
			>
				{
					isLoading ? (
						<ActivityIndicator size="large" color={ COLORS.primary } />
					) : error ? (
						<Text>Something went wrong</Text>
					) : !data || data?.length === 0 ? (
						<Text>No data found</Text>
					) : (
						<View style={ { padding: SIZES.medium, paddingBottom: 100 } }>

							<Company
								companyLogo={ data[ 0 ].employer_logo }
								companyName={ data[ 0 ].employer_name }
								location={ data[ 0 ].job_country }
								jobTitle={ data[ 0 ].job_title }
							/>

							<JobTabs
								tabs={ tabs }
								activeTab={ activeTab }
								setActiveTab={ setActiveTab }
							/>

							{ displayTabContent() }

						</View>
					)
				}
			</ScrollView>

			<JobFooter
				url={ ( data && data[ 0 ].job_google_link ) ?? 'https://www.careers.google.com/jobs/results/' }
			/>

		</SafeAreaView>
	);
};

export default JobDetails;