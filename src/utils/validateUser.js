export function checkValidate(type, email, password, fullName = "") {
  if (type === "signup" && !fullName) {
    
    if (!fullName) return "Enter a full name";

    const isValidFullName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(
      fullName
    );

    if (!isValidFullName) {
      return "Enter valid full name";
    }
  }

  let validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  let validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const isValid = !validEmail
    ? "Enter valid email"
    : !validPassword
    ? "Enter valid password"
    : null;

  return isValid;
}
