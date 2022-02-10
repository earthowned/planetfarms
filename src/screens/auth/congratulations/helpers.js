export const configurePayload = (values) => {
  const { phoneNumber, birthdate, ...props } = values;

  let phone;
  if (phoneNumber) {
    // remove all special characters ("+", "-", "(", ")")
    phone = phoneNumber.replace(/[\W_]/g, "");
  }

  let date;
  if (birthdate) {
    const [day, month, year] = birthdate.split("/");
    date = `${year}-${month}-${day}`;
  }

  return { ...props, phoneNumber: phone, birthdate: date };
};
