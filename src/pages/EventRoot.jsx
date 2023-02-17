import EventNavigation from '../components/EventsNavigation';
import { Outlet } from 'react-router-dom';

const Root = () => {
	return (
		<>
			<EventNavigation />

			<Outlet />
		</>
	);
};

export default Root;
