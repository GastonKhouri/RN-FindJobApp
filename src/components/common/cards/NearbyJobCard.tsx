import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { COLORS, SHADOWS, SIZES } from "../../../constants";
import { Job } from '../../../interfaces';
import { checkImageURL } from '../../../utils';

interface Props {
	job: Job;
	handleNavigate: () => void;
}

const NearbyJobCard = ( { handleNavigate, job }: Props ) => {
	return (
		<TouchableOpacity
			style={ styles.container }
			onPress={ handleNavigate }
		>
			<TouchableOpacity
				style={ styles.logoContainer }
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

			<View style={ styles.textContainer }>
				<Text
					style={ styles.jobName }
					numberOfLines={ 1 }
				>
					{ job.job_title }
				</Text>
				<Text style={ styles.jobType }>
					{ job.job_employment_type }
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		padding: SIZES.medium,
		borderRadius: SIZES.small,
		backgroundColor: "#FFF",
		...SHADOWS.medium,
		shadowColor: COLORS.white,
	},
	logoContainer: {
		width: 50,
		height: 50,
		backgroundColor: COLORS.white,
		borderRadius: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
	},
	logoImage: {
		width: "70%",
		height: "70%",
	},
	textContainer: {
		flex: 1,
		marginHorizontal: SIZES.medium,
	},
	jobName: {
		fontSize: SIZES.medium,
		fontFamily: "DMBold",
		color: COLORS.primary,
	},
	jobType: {
		fontSize: SIZES.small + 2,
		fontFamily: "DMRegular",
		color: COLORS.gray,
		marginTop: 3,
		textTransform: "capitalize",
	},
} );


export default NearbyJobCard;