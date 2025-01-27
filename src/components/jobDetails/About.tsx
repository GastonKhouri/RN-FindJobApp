import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { SIZES, COLORS, FONT } from '../../constants';

interface Props {
	info: string;
}

const About = ( { info }: Props ) => {
	return (
		<View style={ styles.container }>
			<Text style={ styles.headText }>About the job:</Text>

			<View style={ styles.contentBox }>
				<Text style={ styles.contextText }>{ info }</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create( {
	container: {
		marginTop: SIZES.large,
		backgroundColor: "#FFF",
		borderRadius: SIZES.medium,
		padding: SIZES.medium,
	},
	headText: {
		fontSize: SIZES.large,
		color: COLORS.primary,
		fontFamily: FONT.bold,
	},
	contentBox: {
		marginVertical: SIZES.small,
	},
	contextText: {
		fontSize: SIZES.medium - 2,
		color: COLORS.gray,
		fontFamily: FONT.regular,
		marginVertical: SIZES.small / 1.25,
	},
} );

export default About;