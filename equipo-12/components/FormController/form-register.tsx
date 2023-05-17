import { Box, Button, Typography } from "@mui/material";
import ControlledInput from "./controlled-input";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";

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

const FormRegister = () => {
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
          router.push("/");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "1fr 1fr 1fr 1fr",
          gridColumnGap: "62px",
          gridRowGap: "40px",
          "& button ": {
            borderRadius: "10px",
          },
          "& input": {
            backgroundColor: "#FFFF",
            borderRadius: "10px",
            height: "31px",
          },
          "& .css-1av9oub-MuiInputBase-root-MuiFilledInput-root::after, & .css-1av9oub-MuiInputBase-root-MuiFilledInput-root::before":
            {
              display: "none",
            },
          "& .css-1yuncik-MuiFormLabel-root-MuiInputLabel-root": {
            transform: "translate(12px, 20px) scale(1)",
          },
        }}
      >
        <ControlledInput
          name="firstName"
          control={control}
          type="text"
          label="Nombre*"
          errorMessage={errors["firstName"]?.message}
          variant="filled"
        />
        <ControlledInput
          name="lastName"
          control={control}
          type="text"
          label="Apellido*"
          errorMessage={errors["lastName"]?.message}
          variant="filled"
        />
        <ControlledInput
          name="dni"
          control={control}
          type="text"
          label="DNI*"
          errorMessage={errors["dni"]?.message}
          variant="filled"
        />
        <ControlledInput
          name="email"
          control={control}
          type="text"
          label="Correo electronico*"
          errorMessage={errors["email"]?.message}
          variant="filled"
        />
        <ControlledInput
          name="password"
          control={control}
          type="password"
          label="Contraseña*"
          errorMessage={errors["password"]?.message}
          variant="filled"
        />
        <ControlledInput
          name="confirmPassword"
          control={control}
          type="password"
          label="Confirmar contraseña*"
          errorMessage={errors["confirmPassword"]?.message}
          variant="filled"
        />
        <ControlledInput
          name="phone"
          control={control}
          type="number"
          label="Telefono*"
          errorMessage={errors["phone"]?.message}
          variant="filled"
        />
        <Button
          variant="primary"
          color="secondary"
          size="large"
          type="submit"
          disabled={isSubmitting}
        >
          Crear Cuenta
        </Button>
      </Box>
    </form>
  );
};

export default FormRegister;
