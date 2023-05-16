import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
import { ReactElement, useState } from "react";
import Head from "next/head";
import Header from "../../../components/Header/header";
import Footer from "../../../components/Footer/footer";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import styles from "../../../styles/login.module.css";
import ControlledInput from "../../../components/FormController/controlled-input";

const schema = yup
  .object({
    password: yup.string().required("La contraseña es requerida"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Password = () => {
  const [errorLogin, setErrorLogin] = useState(false);
  const router = useRouter();
  const { query } = useRouter();
  const {
    register,
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
          console.log(response);
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
      <main>
        <Header />
        <Grid className={styles.gridGeneralContainer}>
          <h2>Ingresá tu contraseña</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(1, 1fr)",
                gridTemplateRows: "1fr 1fr 0.25fr 1fr 1fr",
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
                name="password"
                control={control}
                type="password"
                label="Contraseña*"
                errorMessage={errors["password"]?.message}
                variant="filled"
              />
              {errorLogin && (
                <Typography
                  sx={{
                    position: "absolute",
                    color: "#CC0000",
                    fontSize: "14px",
                    fontStyle: "italic",
                    marginTop:"65px"
                  }}
                >
                  Contraseña incorrecta. Vuelve a intentarlo
                </Typography>
              )}
              <Button variant="secondary" type="submit">
                Continuar
              </Button>
            </Box>
          </form>
        </Grid>
        <Footer />
      </main>
    </>
  );
};

Password.getLayout = function getLayout(page: ReactElement) {
  return <LayoutLogin>{page}</LayoutLogin>;
};

export default Password;