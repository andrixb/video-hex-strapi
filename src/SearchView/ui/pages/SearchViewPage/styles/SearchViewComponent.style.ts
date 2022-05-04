import { makeStyles } from '@mui/styles';

interface SearchViewComponentStylesTheme {
	mixins: any;
	zIndex: any;
	transitions: any;
	breakpoints: any;
	spacing: any;
};

export const useSearchViewComponentStyles = makeStyles((theme: SearchViewComponentStylesTheme) => ({
	root: {
		display: 'flex',
	},
	content: {
		flexGrow: 1,
		marginTop: 100,
		padding: 18,
		height: '100vh',
		overflow: 'auto',
	},
}));
