function Validation(email) {
  const errors = {};

  if (!email) {
    errors.email = "enter your email";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "email incorrect";
  } else {
    delete errors.email;
  }

  return errors;
}

export default Validation;
