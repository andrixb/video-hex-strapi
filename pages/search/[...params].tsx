import React from 'react';
import type { NextPage } from 'next';
import DashboardComponent from '../../src/Dashboard/ui/pages/DashboardPage';
import { useRouter } from 'next/router';
import Lyrics from '../../src/Dashboard/ui/pages/DashboardPage/components/Lyrics';


const ContentPage: NextPage = () => {
	const router = useRouter();
	const { params = [] } = router.query;

	console.log('params', params);

	if (params[0] === 'lyrics') {
		return (
			<DashboardComponent>
				<Lyrics /> 
			</DashboardComponent>
		);
	}
		
	return <DashboardComponent />;
}

export default ContentPage;
