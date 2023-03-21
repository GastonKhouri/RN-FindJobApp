import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const Layout = () => {

	const [ fontsLoaded ] = useFonts( {
		DMBold: require( '../src/assets/fonts/DMSans-Bold.ttf' ),
		DMMedium: require( '../src/assets/fonts/DMSans-Medium.ttf' ),
		DMRegular: require( '../src/assets/fonts/DMSans-Regular.ttf' ),
	} );

	useCallback( async () => {
		if ( fontsLoaded ) {
			await SplashScreen.hideAsync();
		}
	}, [ fontsLoaded ] );

	if ( !fontsLoaded ) return null;

	return (
		<QueryClientProvider client={ queryClient }>
			<Stack />
		</QueryClientProvider>
	);

};

export default Layout;