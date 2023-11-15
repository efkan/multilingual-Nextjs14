"use client"

import { useState, MouseEvent, useEffect } from 'react';

// ** next
// import { useRouter } from 'next/router';
import { useParams } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../../i18n-config'

// ** third party
import { ClickAwayListener, Grow, Box, Paper, Popper, MenuItem, MenuList } from '@monster-notebook/mui/material';

// ** icons
import { LanguageOutlined as LanguageOutlinedIcon } from '@monster-notebook/mui/icons';

// ** components
import WhiteButton from '@/app/components/WhiteButton';


export default function LanguageSelect() {
	const params = useParams()
	console.log("i18n.locales:", i18n.locales);
	// const router = useRouter();
	const [open, setOpen] = useState(false);
	const [languages, setLanguages] = useState(new Array<string>());
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	useEffect(() => {
		// // Detect the browser's preferred language
		// const browserLang = navigator.language;
		// const browserLangs = navigator.languages;
		// // console.log("useEffect - browserLang:", browserLang);
		// // console.log("useEffect - browserLangs:", browserLangs);
		// const supportedLocales = ['en', 'tr'];
		// let detectedLocale = 'en'; // fallback to 'en-US' if the browser's language is not supported

		// if (supportedLocales.includes(browserLang)) {
		// 	detectedLocale = browserLang;
		// } else {
		// 	browserLangs.every(lang => {
		// 		if (supportedLocales.includes(lang)) {
		// 			detectedLocale = lang;
		// 			return false
		// 		}
		// 		console.log('loop - lang: ', lang);
		// 		return true
		// 	})
		// }
		// console.log("useEffect - detectedLocale:", detectedLocale);
	}, [])



	const handleMenuItemClick = (option: string) => {
		setOpen(false);
		// const locale = `${option}-${countryCode.toUpperCase()}`;
		// router.push(`${router.asPath}`, `${router.asPath}`, { locale });
		//router.push('/', null, { locale });
		//router.push('/', '/', { locale });
	};

	const handleToggle = (e: MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = () => setOpen(false);

	return (
		<Box sx={{ ml: '4px !important', p: 0 }}>
			<WhiteButton onClick={handleToggle} startIcon={<LanguageOutlinedIcon />}>
				<Box component="span" sx={{ ml: 1, fontSize: '14px' }}>
					{params.languageCode}
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
									{i18n.locales.map(locale =>
										<MenuItem
											sx={{ justifyContent: 'center', textTransform: 'uppercase' }}
											key={locale}
											selected={params.languageCode === locale}
											onClick={() => handleMenuItemClick(locale)}
										>
											{locale}
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
