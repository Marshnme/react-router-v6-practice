import { useParams } from 'react-router-dom';

const EventDetails = () => {
	const params = useParams();
	return (
		<>
			<p>Event ID: {params.id}</p>
		</>
	);
};

export default EventDetails;
