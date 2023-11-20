"use client"

import { useState, MouseEvent, useEffect } from 'react';
import { ClickAwayListener, Grow, Box, Paper, Popper, MenuItem, MenuList } from '@monster-notebook/mui/material';
import { Public as PublicIcon } from '@monster-notebook/mui/icons';

import WhiteButton from '@/app/components/WhiteButton';
import { countryNameDomainMapping } from '../utils/constants';
import { useRouter } from 'next/navigation';

type Props = {
	currentDomain: string
	currentCountry: string
	countryTranslation: string
}

export default function CountrySelect({currentDomain, currentCountry, countryTranslation}: Readonly<Props>) {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const filteredCountryDomainPairs = Object.entries(countryNameDomainMapping).filter(pair => pair[0] !== currentCountry)

	const handleToggle = (e: MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = () => setOpen(false);

	const handleCountryChange = (domain: string) => {
		const {protocol, pathname, port} = window.location
		const portNumber = (port !== '80' && port !== '443') ? `:${port}` : ''
		const url = `${protocol}//${domain}${portNumber}${pathname}`

		router.push(url)
	}

	return (
		<Box sx={{ ml: '4px !important', p: 0 }}>
			<WhiteButton onClick={handleToggle} startIcon={<PublicIcon />}>
				<Box component="span" sx={{ ml: 1, fontSize: '14px' }}>
					{countryTranslation + ': ' + currentCountry}
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
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList sx={{ width: '100%' }} id="split-button-menu">
									{filteredCountryDomainPairs.map((countryDomainPair, index) => {
										const [country, domain] = countryDomainPair
										return (
										<MenuItem
											sx={{ justifyContent: 'center', textTransform: 'inherit', color: 'white' }}
											key={index}
											selected={country === currentCountry}
											onClick={() => handleCountryChange(domain)}
										>
											{country}
										</MenuItem>
									)})}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</Box>
	);
}
