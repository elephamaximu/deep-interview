import jwt from 'jsonwebtoken';

export const currentUserChecker = (req, res, next) => {
	if (!req.session?.jwt) {
		return next();
	}

	try {
		const payload = jwt.verify(req.session.jwt, process.env.JWT_SECRET);
		req.currentUser = payload;
	} catch (err) {}

	next();
};
