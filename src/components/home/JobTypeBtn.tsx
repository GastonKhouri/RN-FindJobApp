import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { COLORS, FONT, SIZES } from "../../constants";

interface Props {
	item: string;
	activeJobType: string;
	onPress: ( jobType: string ) => void;
}

const JobTypeBtn = ( { activeJobType, item, onPress }: Props ) => {
	return (
		<TouchableOpacity
			style={ {
				...styles.tab,
				borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2
			} }
			onPress={ () => onPress( item ) }
		>
			<Text
				style={ {
					...styles.tabText,
					color: activeJobType === item ? COLORS.secondary : COLORS.gray2
				} }
			>
				{ item }
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create( {
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

export default JobTypeBtn;