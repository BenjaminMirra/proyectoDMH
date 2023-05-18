import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
import { ReactElement, ReactNode, useState } from "react";
import Head from "next/head";
import { Box, Button, Typography } from "@mui/material";
import ControlledInput from "../../../components/FormController/controlled-input";
import LayoutLogin from "../../../layout/layout-login";
import { NextPageWithLayout } from "../../_app";

const schema = yup
  .object({
    password: yup.string().required("La contraseña es requerida"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;
interface PropsType {
  children?: ReactNode;
}
const Password: NextPageWithLayout<PropsType> = () => {
  const [errorLogin, setErrorLogin] = useState(false);
  const router = useRouter();
  const { query } = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios
        .post("https://digitalmoney.ctd.academy/api/login", {
          email: query.email,
          password: data.password,
        })
        .then(function (response) {
          localStorage.setItem("token", response.data.token);
          console.log("primero: ");
          console.log(response);
          axios
            .request({
              method: "GET",
              url: "https://digitalmoney.ctd.academy/api/account",
              headers: {
                "Content-Type": "application/json",
                Authorization: response.data.token,
              },
              data: "",
            })
            .then((response) => {
              console.log("segundo: ");
              console.log(response);
              localStorage.setItem("userId", response.data.user_id);
            });

          setErrorLogin(false);
          router.push("/");
        });
    } catch (error) {
      console.log(error);
      setErrorLogin(true);
    }
  };

  return (
    <>
      <Head>
        <title>Digital Money House</title>
        <meta name="iniciar-sesion" content="Digital Money House" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        style={{
          margin: "0 auto",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "var(--main-bg-color)",
          padding: "45px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "var(--main-text-color)",
            "@media only screen and (max-width: 768px)": {
              marginBottom: "35px",
            },
            "@media only screen and (min-width: 768px)": {
              marginBottom: "40px",
            },
          }}
        >
          Ingresá tu contraseña
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              gridRowGap: "20px",
              "@media only screen and (max-width: 768px)": {
                gridRowGap: "20px",
                gridTemplateColumns: "minmax(50px, 300px)",
                "& .css-1yuncik-MuiFormLabel-root-MuiInputLabel-root": {
                  transform: "translate(12px, 15px) scale(1)",
                },
              },
              "@media only screen and (min-width: 768px)": {
                gridTemplateColumns: "minmax(50px, 360px)",
                "& .css-1yuncik-MuiFormLabel-root-MuiInputLabel-root": {
                  transform: "translate(12px, 20px) scale(1)",
                },
              },
            }}
          >
            <ControlledInput
              name="password"
              control={control}
              type="password"
              label="Contraseña*"
              errorMessage={
                errorLogin
                  ? "Contraseña incorrecta. Vuelve a intentarlo"
                  : errors["password"]?.message
              }
              variant="filled"
            />
            <Button
              variant="primary"
              color="secondary"
              size="large"
              type="submit"
              sx={{
                marginTop: "10px",
              }}
            >
              Continuar
            </Button>
          </Box>
        </form>
      </main>
    </>
  );
};

Password.getLayout = function getLayout(page: ReactElement) {
  return <LayoutLogin>{page}</LayoutLogin>;
};

export default Password;
