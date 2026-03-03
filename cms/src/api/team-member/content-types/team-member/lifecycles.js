const { errors } = require("@strapi/utils");
const { ApplicationError } = errors;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data) {
  if (data.Email && !EMAIL_REGEX.test(data.Email)) {
    throw new ApplicationError("Email must be a valid email address");
  }
}

module.exports = {
  async beforeCreate(event) {
    validate(event.params.data);
  },

  async beforeUpdate(event) {
    validate(event.params.data);
  },
};