import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import EventDetailsPage from './pages/EventDetails';
import Root from './pages/Root';
import EventRoot from './pages/EventRoot';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'events',
				element: <EventRoot />,
				children: [
					{ index: true, element: <EventsPage /> },
					{ path: ':id', element: <EventDetailsPage /> },
					{ path: 'new', element: <NewEventPage /> },
					{ path: ':id/edit', element: <EditEventPage /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
