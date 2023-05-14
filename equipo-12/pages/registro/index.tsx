import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { useState } from "react";
import ControlledInput from "../../components/FormController/ControlledInput";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";

const schema = yup
  .object({
    firstName: yup.string().required("El nombre es requerido"),
    lastName: yup.string().required("El apellido es requerido"),
    dni: yup.string().required("El DNI es requerido"),
    email: yup
      .string()
      .email("Ingrese un correo electrónico válido")
      .required("El correo electrónico es obligatorio"),
    password: yup
      .string()
      .required("La contraseña es requerida")
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .max(20, "La contraseña no puede tener más de 20 caracteres")
      .matches(
        /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,20}$/,
        "La contraseña debe contener al menos 1 carácter especial, una mayúscula y un número"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Las contraseñas no coinciden")
      .required("La confirmación de contraseña es obligatoria"),
    phone: yup.string().required("El Telefono es requerido"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Register = () => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios
        .post("https://digitalmoney.ctd.academy/api/users", {
          dni: parseInt(data.dni),
          email: data.email,
          firstname: data.firstName,
          lastname: data.lastName,
          password: data.password,
          phone: data.phone,
        })
        .then(function (response) {
          console.log(response);
          setError(false);
          router.push("/");
        });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <main
      style={{
        margin: "0 auto",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginBottom: "40px",
        }}
      >
        Crear Cuenta
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          maxWidth: "782px",
          maxHeight: "376px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
            gridColumnGap: "62px",
            gridRowGap: "40px",
            "& > *": {
              position: "relative",
              borderRadius: "10px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "10px",
            },
          }}
        >
          <Box>
            <ControlledInput
              name="firstName"
              control={control}
              type="text"
              label="Nombre"
            />
            {errors["firstName"]?.message && (
              <Typography
                sx={{
                  position: "absolute",
                  color: "red",
                  top: "100%",
                  fontSize: "15px",
                }}
              >
                {errors["firstName"]?.message + ""}
              </Typography>
            )}
          </Box>
          <Box>
            <ControlledInput
              name="lastName"
              control={control}
              type="text"
              label="Apellido"
            />
            {errors["lastName"]?.message && (
              <Typography
                sx={{
                  position: "absolute",
                  color: "red",
                  top: "100%",
                  fontSize: "15px",
                }}
              >
                {errors["lastName"]?.message + ""}
              </Typography>
            )}
          </Box>
          <Box>
            <ControlledInput
              name="dni"
              control={control}
              type="text"
              label="DNI"
            />
            {errors["dni"]?.message && (
              <Typography
                sx={{
                  position: "absolute",
                  color: "red",
                  top: "100%",
                  fontSize: "15px",
                }}
              >
                {errors["dni"]?.message + ""}
              </Typography>
            )}
          </Box>
          <Box>
            <ControlledInput
              name="email"
              control={control}
              type="text"
              label="Correo electronico"
            />
            {errors["email"]?.message && (
              <Typography
                sx={{
                  position: "absolute",
                  color: "red",
                  top: "100%",
                  fontSize: "15px",
                }}
              >
                {errors["email"]?.message + ""}
              </Typography>
            )}
          </Box>
          <Box>
            <ControlledInput
              name="password"
              control={control}
              type="password"
              label="Contraseña"
            />
            {errors["password"]?.message && (
              <Typography
                sx={{
                  position: "absolute",
                  color: "red",
                  top: "100%",
                  fontSize: "15px",
                }}
              >
                {errors["password"]?.message + ""}
              </Typography>
            )}
          </Box>
          <Box>
            <ControlledInput
              name="confirmPassword"
              control={control}
              type="password"
              label="Confirmar contraseña"
            />
            {errors["confirmPassword"]?.message && (
              <Typography
                sx={{
                  position: "absolute",
                  color: "red",
                  top: "100%",
                  fontSize: "15px",
                }}
              >
                {errors["confirmPassword"]?.message + ""}
              </Typography>
            )}
          </Box>
          <Box>
            <ControlledInput
              name="phone"
              control={control}
              type="number"
              label="Telefono"
            />
            {errors["phone"]?.message && (
              <Typography
                sx={{
                  position: "absolute",
                  color: "red",
                  top: "100%",
                  fontSize: "15px",
                }}
              >
                {errors["phone"]?.message + ""}
              </Typography>
            )}
          </Box>
          <Button variant="contained" type="submit" disabled={isSubmitting}>
            Crear Cuenta
          </Button>
        </Box>
      </form>
    </main>
  );
};
export default Register;
