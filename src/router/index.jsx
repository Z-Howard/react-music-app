import { useRoutes, Navigate } from 'react-router-dom';

import Layout from '@/pages/Layout/layout.jsx';
import FavorMusicPage from '@/pages/FavorMusicPage/favorMusicPage.jsx';
import MusicStorePage from '@/pages/MusicStorePage/musicStorePage.jsx';
import NotFound from '@/pages/NoFound/noFound.jsx';

// 1. 准备一个路由数组 数组中定义所有的路由对应关系
const routesList = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				element: <Navigate to="/FavorMusicPage" />,
				index: true, // index设置为true 变成默认的二级路由
			},
			{
				path: 'FavorMusicPage',
				element: <FavorMusicPage />,
			},
			{
				path: 'MusicStorePage',
				element: <MusicStorePage />,
			},
		],
	},
	// 增加n个路由对应关系
	{
		path: '*',
		element: <NotFound />,
	},
];

// 2. 使用useRoutes方法传入routesList生成Routes组件
export function WrapperRoutes() {
	let element = useRoutes(routesList);
	return element;
}
