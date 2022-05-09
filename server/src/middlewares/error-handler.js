import { FormValidationError } from '../errors/form-validation-error.js';
import { RouteNotFoundError } from '../errors/route-not-found-error.js';

export const errorHandler = (err, req, res, next) => {
	if (err instanceof RouteNotFoundError) {
		return res.status(404).send({ message: 'api가 존재하지 않습니다.' });
	}

	if (err instanceof FormValidationError) {
		return res.status(400).send({ message: '입력이 잘못되었습니다.' });
	}
	res.status(400).send({ message: err.message });
};