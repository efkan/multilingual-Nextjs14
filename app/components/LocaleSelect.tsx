"use client"

import { useState, MouseEvent } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'

// ** third party
import { ClickAwayListener, Grow, Box, Paper, Popper, MenuItem, MenuList } from '@monster-notebook/mui/material';

// ** icons
import { LanguageOutlined as LanguageOutlinedIcon } from '@monster-notebook/mui/icons';

// ** components
import WhiteButton from '@/app/components/WhiteButton';
import { countryCodeLocaleMapping, countryNameCountryCodeMapping, domainCountryCodeMapping } from '../utils/constants';

type Props = Readonly<{
	currentCountryCode: keyof typeof countryCodeLocaleMapping
}>

export default function LanguageSelect({currentCountryCode}: Props) {
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const filteredCountryNameCodePairs = Object.entries(countryNameCountryCodeMapping).filter(pair => pair[0] !== currentCountryCode)

	const pathName = usePathname()
  const redirectedPathName = (countryCode: string) => {
		const domain = window.location.hostname as keyof typeof domainCountryCodeMapping
		const defaultCountryCode = domainCountryCodeMapping[domain]

		// if (countryCode === defaultCountryCode) return '/'

    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = countryCode

    return segments.join('/')
  }

	const handleToggle = (e: MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = () => setOpen(false);

	return (
		<Box sx={{ ml: '4px !important', p: 0 }}>
			<WhiteButton onClick={handleToggle} startIcon={<LanguageOutlinedIcon />}>
				<Box component="span" sx={{ ml: 1, fontSize: '14px' }}>
					{currentCountryCode.toString().toUpperCase()}
				</Box>
			</WhiteButton>
			<Popper sx={{ zIndex: 9 }} disablePortal open={open} anchorEl={anchorEl} transition>
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
						<Paper sx={{ backgroundColor: 'black !important', border: '1px solid', borderColor: '#49494A !important', width: '78px' }}>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList sx={{ width: '100%' }} id="split-button-menu">
									{filteredCountryNameCodePairs.map(nameCodePair => {
										const [_countryName, countryCode] = nameCodePair
										return (
											<MenuItem
												sx={{ justifyContent: 'center', textTransform: 'uppercase', color: 'white' }}
												key={countryCode}
												selected={countryCode === currentCountryCode}
												onClick={handleClose}
											>
												<Link href={redirectedPathName(countryCode)}>{countryCode}</Link>
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
