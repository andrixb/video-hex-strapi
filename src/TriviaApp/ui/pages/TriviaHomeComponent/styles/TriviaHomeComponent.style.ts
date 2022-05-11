import { makeStyles } from '@mui/styles';

interface TriviaHomeComponentStylesTheme {
	mixins: any;
	zIndex: any;
	transitions: any;
	breakpoints: any;
	spacing: any;
};

export const useTriviaHomeComponentStyles = makeStyles((theme: TriviaHomeComponentStylesTheme) => ({
	root: {
		width: '100%',
	},
	content: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 18,
		overflow: 'auto',
	},
}));
