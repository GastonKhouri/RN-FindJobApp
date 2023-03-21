import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { SIZES, SHADOWS, COLORS } from '../../constants';

interface Props {
	name: string;
	activeTab: string;
	onHandleSearchType: () => void;
}

const TabBtn = ( { activeTab, name, onHandleSearchType }: Props ) => {
	return (
		<TouchableOpacity
			style={ {
				...styles.btn,
				backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
			} }
			onPress={ onHandleSearchType }
		>
			<Text
				style={ {
					...styles.btnText,
					color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
				} }
			>
				{ name }
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create( {
	btn: {
		paddingVertical: SIZES.medium,
		paddingHorizontal: SIZES.xLarge,
		//   backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
		borderRadius: SIZES.medium,
		marginLeft: 2,
		...SHADOWS.medium,
		shadowColor: COLORS.white,
	},
	btnText: {
		fontFamily: "DMMedium",
		fontSize: SIZES.small,
		//   color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
	},
} );

export default TabBtn;