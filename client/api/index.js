import axios from 'axios';

const buildApi = ({ req }) => {
	if (typeof window === 'undefined') {
		return axios.create({
			baseURL:
				'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
			headers: req.headers,
		});
	} else {
		return axios.create({
			baseURL: '/',
		});
	}
};

export const signinApi = (payload) => axios.post('/api/auth/signin', payload);
export const signupApi = (payload) => axios.post('/api/auth/signup', payload);
export const signoutApi = () => axios.post('/api/auth/signout');

export default buildApi;
