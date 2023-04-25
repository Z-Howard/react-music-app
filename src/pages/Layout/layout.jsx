import layoutCss from './layout.module.scss';
// import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { Outlet, Link, Navigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import { IconButton } from '@mui/material';
import SetTheme from '@/components/Theme/theme';
import { useState } from 'react';

export default function MyLayout() {
	const [background, setbackground] = useState('red');
	const MenuClick = () => {
		console.log(5789);
	};
	const setTheme = color => {
		setbackground(color);
	};
	return (
		<div>
			<div style={{ backgroundImage: background }} className={layoutCss['content']}>
				<div className={layoutCss['texture']}>
					<div className={layoutCss['page-main']}>
						<Outlet />
					</div>

					<div className={layoutCss['buttom-column']}>
						<Link to="/" element={<Navigate to="/FavorMusicPage" />}>
							<IconButton onClick={MenuClick} color="secondary" aria-label="add an alarm">
								<FavoriteIcon sx={{ fontSize: 50 }} />
							</IconButton>
						</Link>
						<Link to="/MusicStorePage">
							<IconButton onClick={MenuClick} color="secondary" aria-label="add an alarm">
								<EarbudsIcon sx={{ fontSize: 50 }} />
							</IconButton>
						</Link>
						<SetTheme setTheme={setTheme}></SetTheme>
					</div>
				</div>
			</div>
		</div>
	);
}
