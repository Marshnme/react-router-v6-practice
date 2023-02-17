import { Link } from 'react-router-dom';
const DUMMY = [
	{
		id: 'e1',
		title: 'SomeEvent',
	},
	{
		id: 'e2',
		title: 'e2',
	},
	{
		id: 'e3',
		title: 'e3',
	},
];

const Events = () => {
	return (
		<ul>
			{DUMMY.map((e) => {
				return (
					<li key={e.id}>
						<Link to={e.id}>{e.title}</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Events;
