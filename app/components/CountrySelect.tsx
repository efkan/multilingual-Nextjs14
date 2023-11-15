"use client"

import { useState, MouseEvent, useEffect } from 'react';
import { useParams } from 'next/navigation'
import { ClickAwayListener, Grow, Box, Paper, Popper, MenuItem, MenuList } from '@monster-notebook/mui/material';
import { Public as PublicIcon } from '@monster-notebook/mui/icons';

import WhiteButton from '@/app/components/WhiteButton';


export default function CountrySelect() {
	const params = useParams()
	console.log('params: ', params)

	const [open, setOpen] = useState(false);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleToggle = (e: MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = () => setOpen(false);
	const handleMenuItemClick = async (code: string) => {
		handleClose()
	}

	return (
		<Box sx={{ ml: '4px !important', p: 0 }}>
			<WhiteButton onClick={handleToggle} startIcon={<PublicIcon />}>
				<Box component="span" sx={{ ml: 1, fontSize: '14px' }}>
					{/* {countryCode?.toLowerCase()} */}
				</Box>
			</WhiteButton>
			<Popper sx={{ zIndex: 9 }} transition disablePortal open={open} anchorEl={anchorEl} placement="bottom-end">
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
							marginTop: '8px',
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<Paper sx={{ backgroundColor: 'black !important', border: '1px solid', borderColor: '#49494A !important' }}>
							{/* <ClickAwayListener onClickAway={handleClose}>
								<MenuList sx={{ width: '100%' }} id="split-button-menu">
									{countries.map((item, index) => (
										<MenuItem
											sx={{ justifyContent: 'center', textTransform: 'inherit' }}
											key={index}
											selected={item?.toUpperCase() === countryCode?.toUpperCase()}
											onClick={() => handleMenuItemClick(item)}
										>
											{item}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener> */}
						</Paper>
					</Grow>
				)}
			</Popper>
		</Box>
	);
}
