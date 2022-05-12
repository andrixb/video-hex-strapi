import { makeStyles } from '@mui/styles';

interface useVideosInsertStylesTheme {
	mixins: any;
	zIndex: any;
	transitions: any;
	breakpoints: any;
	spacing: any;
};

export const useVideosInsertStyles = makeStyles((theme: useVideosInsertStylesTheme) => ({
	root: {
		width: '100%',
	},
	formContainer: {
		margin: 18,
	},
	addBtn: {
		marginTop: 18,
	}
}));
