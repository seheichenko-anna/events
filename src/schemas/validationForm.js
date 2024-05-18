import Joi from 'joi';

export const registrationSchema = Joi.object({
  full_name: Joi.string().min(3).max(50).required().messages({
    'string.empty': 'Full name is required',
    'string.min': 'Full name must be at least 3 characters',
    'string.max': 'Full name must be less than 50 characters',
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid email',
    }),
  date_of_birth: Joi.date()
    .required()
    .custom((value, helpers) => {
      const currentDate = new Date();
      const dob = new Date(value);
      if (dob >= currentDate) {
        return helpers.message('Date of birth cannot be in the future');
      }
      return value;
    })
    .messages({
      'date.base': 'Date of birth is required',
    }),
  event_source: Joi.string()
    .valid('social media', 'friends', 'found myself')
    .required()
    .messages({
      'any.only': 'Event source is required',
    }),
});
