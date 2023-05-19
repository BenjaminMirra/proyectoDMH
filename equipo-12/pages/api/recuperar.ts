import { mailOptions, transporter } from "../../config/nodemailer";
import * as crypto from "crypto-js";

const handler = async (req: any, res: any) => {

  console.log(req.method);
  if (req.method === "POST") {
    const data = req.body;
    //${crypto.DES.encrypt(data.email, "12345").toString()}
    try {
      await transporter.sendMail({
        ...mailOptions,
        to: data.email,
        subject: "Recuperar contraseña",
        html: `<h1>Hola,</h1>
        <p>Para modificar tu contraseña ingresa al siguiente link:o</p>
        <a target="_blank" href="http://localhost:3000/recuperar-clave/">Recuperar Contraseña</a>
        `,
      });
      return res.status(200).json({ message: "Email sent" });
    } catch (e) {
      console.error(e);
      return res.status(400).json({ message: "Error" });
    }
  } else return res.status(400).json({ message: "Bad request" });
};

export default handler;
