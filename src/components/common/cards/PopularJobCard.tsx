import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";
import { Job } from '../../../interfaces';
import { checkImageURL } from '../../../utils';

interface Props {
	job: Job;
	selectedJob: string;
	onPress: ( job: Job ) => void;
}

const PopularJobCard = ( { job, onPress, selectedJob }: Props ) => {
	return (
		<TouchableOpacity
			style={ {
				...styles.container,
				backgroundColor: selectedJob === job.job_id ? COLORS.primary : "#FFF",
			} }
			onPress={ () => onPress( job ) }
		>
			<TouchableOpacity
				style={ {
					...styles.logoContainer,
					backgroundColor: selectedJob === job.job_id ? "#FFF" : COLORS.white,
				} }
			>
				<Image
					source={ {
						uri: checkImageURL( job?.employer_logo )
							? job.employer_logo as string
							: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
					} }
					resizeMode="contain"
					style={ styles.logoImage }
				/>
			</TouchableOpacity>
			<Text
				style={ styles.companyName }
				numberOfLines={ 1 }
			>
				{ job.employer_name }
			</Text>

			<View style={ styles.infoContainer }>
				<Text
					style={ {
						...styles.jobName,
						color: selectedJob === job.job_id ? COLORS.white : COLORS.primary,
					} }
					numberOfLines={ 1 }
				>
					{ job.job_title }
				</Text>
				<Text style={ styles.location }>
					{ job.job_country }
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create( {
	container: {
		width: 250,
		padding: SIZES.xLarge,
		// backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
		borderRadius: SIZES.medium,
		justifyContent: "space-between",
		...SHADOWS.medium,
		shadowColor: COLORS.white,
	},
	logoContainer: {
		width: 50,
		height: 50,
		// backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
		borderRadius: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
	},
	logoImage: {
		width: "70%",
		height: "70%",
	},
	companyName: {
		fontSize: SIZES.medium,
		fontFamily: FONT.regular,
		color: "#B3AEC6",
		marginTop: SIZES.small / 1.5,
	},
	infoContainer: {
		marginTop: SIZES.large,
	},
	jobName: {
		fontSize: SIZES.large,
		fontFamily: FONT.medium,
		// color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
	},
	infoWrapper: {
		flexDirection: "row",
		marginTop: 5,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	// publisher: ( selectedJob ) => ( {
	// 	fontSize: SIZES.medium - 2,
	// 	fontFamily: FONT.bold,
	// 	color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
	// } ),
	location: {
		fontSize: SIZES.medium - 2,
		fontFamily: FONT.regular,
		color: "#B3AEC6",
	},
} );

export default PopularJobCard;