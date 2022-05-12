import { makeStyles } from '@mui/styles';

interface VideosHomeComponentStylesTheme {
	mixins: any;
	zIndex: any;
	transitions: any;
	breakpoints: any;
	spacing: any;
};

export const useVideosHomeComponentStyles = makeStyles((theme: VideosHomeComponentStylesTheme) => ({
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
