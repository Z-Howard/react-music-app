import themeCss from './theme.module.scss';
import { useState } from 'react';
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';

import { IconButton } from '@mui/material';

const backgroundColors = [
	{
		Color:
			'linear-gradient(0deg, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%)',
	},
	{
		Color: 'linear-gradient(90deg,#ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
	},
	{
		Color: 'linear-gradient(0deg,#b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
	},
	{
		Color: 'linear-gradient(0deg,#eea2a2 0%, #bbc1bf 19%, #57c6e1 42%)',
	},
	{
		Color:
			'linear-gradient(0deg,#fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)',
	},
	{
		Color:
			'linear-gradient(0deg,#4fb576 0%, #44c489 30%, #28a9ae 46%, #28a2b7 59%, #4c7788 71%, #6c4f63 80%, #432c39 100%)',
	},
	{
		Color: 'linear-gradient(0deg,#f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)',
	},
];

export default function SetTheme({ setTheme }) {
	const [expanded, setExpanded] = useState(false);

	const openSetTheme = () => {
		setExpanded(!expanded);
	};

	const setThemeColor = color => () => {
		setTheme(color);
	};

	return (
		<div className={themeCss['container']}>
			<IconButton onClick={openSetTheme} color="secondary" aria-label="add an alarm">
				<PhotoFilterIcon sx={{ fontSize: 50 }} />
			</IconButton>
			{expanded && (
				<div className={themeCss['setThemeColor']}>
					{backgroundColors.map((item, i) => (
						<IconButton
							key={i}
							sx={{
								width: 50,
								height: 50,
								backgroundImage: item.Color,
							}}
							onClick={setThemeColor(item.Color)}></IconButton>
					))}
				</div>
			)}
		</div>
	);
}
