"use client"

import { useState, MouseEvent } from 'react';

// ** next
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../../i18n-config'

// ** third party
import { ClickAwayListener, Grow, Box, Paper, Popper, MenuItem, MenuList } from '@monster-notebook/mui/material';

// ** icons
import { LanguageOutlined as LanguageOutlinedIcon } from '@monster-notebook/mui/icons';

// ** components
import WhiteButton from '@/app/components/WhiteButton';


export default function LanguageSelect() {
	const params = useParams();
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
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
					{params.locale.toString().toUpperCase()}
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
									{i18n.locales.filter(loc => loc !== params.locale).map(locale =>
										<MenuItem
											sx={{ justifyContent: 'center', textTransform: 'uppercase', color: 'white' }}
											key={locale}
											selected={params.locale === locale}
											onClick={handleClose}
										>
											<Link href={redirectedPathName(locale)}>{locale}</Link>
										</MenuItem>
									)}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</Box>
	);
}
