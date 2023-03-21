import React from 'react';
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

interface Props {
	iconUrl: ImageSourcePropType;
	dimension: string;
	handlePress?: () => void;
}

const ScreenHeaderBtn = ( { iconUrl, dimension, handlePress }: Props ) => {
	return (
		<TouchableOpacity
			style={ styles.btnContainer }
			onPress={ handlePress }
		>
			<Image
				source={ iconUrl }
				resizeMode="cover"
				style={ {
					width: dimension,
					height: dimension,
					borderRadius: SIZES.small / 1.25,
				} }
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create( {
	btnContainer: {
		width: 40,
		height: 40,
		backgroundColor: COLORS.white,
		borderRadius: SIZES.small / 1.25,
		justifyContent: "center",
		alignItems: "center",
	},
} );

export default ScreenHeaderBtn;