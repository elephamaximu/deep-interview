export class FormValidationError extends Error {
	constructor(message) {
		super(message);

		Object.setPrototypeOf(this, FormValidationError.prototype);
	}
}
