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
		display: 'flex',
		width: 500,
		alignItems: 'center'
	},
	content: {
		flexGrow: 1,
		marginTop: 100,
		padding: 18,
		height: '100vh',
		overflow: 'auto',
	},
}));
