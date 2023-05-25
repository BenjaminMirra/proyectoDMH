import axios from "axios";

interface DataType {
  email: string;
  firstName: string;
  lastName: string;
}

const sendConfirmationEmail = async (data: DataType) =>
  fetch("/api/confirmation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => console.log(response));
export default sendConfirmationEmail;
