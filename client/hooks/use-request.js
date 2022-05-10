import axios from 'axios';
import { useState } from 'react';

const useRequest = ({ url, method, body, onSuccess }) => {
	const [error, setError] = useState(null);

	const makeRequest = async () => {
		try {
			setError(null);
			const response = await axios[method](url, body);

			if (onSuccess) {
				onSuccess(response.data);
			}

			return response.data;
		} catch (err) {
			setError(
				<div className='alert alert-danger'>{err.response.data.message}</div>
			);
		}
	};

	return [makeRequest, error];
};

export default useRequest;
