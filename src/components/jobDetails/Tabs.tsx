import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import { SIZES } from '../../constants';
import { Tab } from '../../interfaces';
import { TabBtn } from '../common';

interface Props {
	tabs: Tab[];
	activeTab: string;
	setActiveTab: ( tab: Tab ) => void;
}

const Tabs = ( { activeTab, setActiveTab, tabs }: Props ) => {
	return (
		<View style={ styles.container }>
			<FlatList
				data={ tabs }
				renderItem={ ( { item } ) => (
					<TabBtn
						name={ item }
						activeTab={ activeTab }
						onHandleSearchType={ () => setActiveTab( item ) }
					/>
				) }
				horizontal
				showsHorizontalScrollIndicator={ false }
				keyExtractor={ ( item ) => item }
				contentContainerStyle={ {
					columnGap: SIZES.small / 2,
				} }
			/>
		</View>
	);
};

const styles = StyleSheet.create( {
	container: {
		marginTop: SIZES.small,
		marginBottom: SIZES.small / 2,
	},
} );

export default Tabs;