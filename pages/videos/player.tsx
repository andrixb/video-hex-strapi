import React from 'react';
import type { NextPage } from 'next';

import { useRouter } from 'next/router';



const VideosPlayerPage: NextPage = () => {
	const router = useRouter();
	const { params = [] } = router.query;

	if (params[0] === 'player') {
		return (
			<VideosHomeComponent>
				<Lyrics /> 
			</VideosHomeComponent>
		);
	}
		
	return <DashboardComponent />;
}

export default ContentPage;