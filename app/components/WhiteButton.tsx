// ** third party
import { useTheme, useMediaQuery, Button, ButtonProps } from '@monster-notebook/mui/material';

type WhiteButtonProps = {
	children: JSX.Element;
} & ButtonProps;

function WhiteButton({ children, ...props }: WhiteButtonProps) {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<Button
			{...props}
			variant="outlined"
			sx={{
				border: '1px solid rgba(73, 73, 74, 1.0)',
				color: '#fff',
				fontWeight: '500',
				fontSize: '14px',
				letterSpacing: '1px',
				minWidth: 'auto',
				minHeight: '42px',
				'&:hover, &:hover .MuiBox-root, &:hover .MuiButton-startIcon svg': { color: theme.palette.primary.main },
				...(matches && {
					'&: hover': {
						border: 0
					},
					border: 0,
					'& .MuiButton-startIcon': {
						marginLeft: '0',
						marginRight: '0'
					},
					'& .MuiButton-endIcon': {
						display: 'none'
					}
				})
			}}
		>
			{children}
		</Button>
	);
}

export default WhiteButton;
