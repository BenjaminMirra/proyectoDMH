import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import {
  TextField,
  Typography,
  Button,
  Box,
  TextFieldVariants,
} from "@mui/material";
import Link from "next/link";
import ControlledInput from "../FormController/controlled-input";

const schema = yup
  .object({
    name: yup.string().required("El nombre es requerido."),
    numberCard: yup.number().required("El número de tarjeta es requerido."),
    validateDate: yup.number().required("El número de tarjeta es requerido."),
    cvc: yup.number().required("El número de tarjeta es requerido."),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const CreditCard = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focused, setFocused] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputFocus = ({ target }: any) => {
    setFocused(target.id);
  };

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <Card
        locale={{
          valid: "MM/YY",
        }}
        placeholders={{
          name: "NOMBRE DEL TITULAR",
        }}
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focused}
        callback={console.log}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            marginTop: "20px",
            display: "grid",
            "@media only screen and (max-width: 768px)": {
              gridRowGap: "20px",
              gridTemplateColumns: "minmax(50px, 300px)",
              gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
              "& .css-1yuncik-MuiFormLabel-root-MuiInputLabel-root": {
                transform: "translate(12px, 15px) scale(1)",
              },
            },
            "@media only screen and (min-width: 768px)": {
              gridColumnGap: "57px",
              gridRowGap: "40px",
              gridTemplateColumns: "minmax(50px, 330px) minmax(50px, 330px)",
              gridTemplateRows: "1fr 1fr 1fr 1fr",
              "& .css-1yuncik-MuiFormLabel-root-MuiInputLabel-root": {
                transform: "translate(12px, 20px) scale(1)",
              },
            },
            "@media only screen and (min-width: 1024px)": {
              gridColumnGap: "62px",
              gridTemplateColumns: "minmax(50px, 360px) minmax(50px, 360px)",
            },
          }}
        >
          <InputMask
            mask="9999 9999 9999 9999"
            value={number}
            onChange={(e: any) => setNumber(e.target.value)}
            disabled={false}
            maskChar=" "
          >
            {() => (
              /*             <ControlledInput
              control={control}
              name="numberCard"
              type="number"
              id="number"
              label="Número de la tarjeta*"
              onFocusCapture={()=>handleInputFocus}
            /> */
              <TextField
                id="number"
                label="Número de la tarjeta*"
                onFocusCapture={handleInputFocus}
              />
            )}
          </InputMask>
          <InputMask
            mask="99/99"
            value={expiry}
            onChange={(e: any) => setExpiry(e.target.value)}
            disabled={false}
            maskChar=" "
          >
            {() => (
              <TextField
                label="Fecha de vencimiento*"
                onFocusCapture={handleInputFocus}
              />
            )}
          </InputMask>

          <TextField
            label="Nombre y apellido*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocusCapture={handleInputFocus}
          />

          <InputMask
            mask="999"
            value={cvc}
            onChange={(e: any) => setCvc(e.target.value)}
            disabled={false}
            maskChar=" "
          >
            {() => (
              <TextField
                id="cvc"
                label="Código de seguridad*"
                onFocusCapture={handleInputFocus}
              />
            )}
          </InputMask>

          <Link
            href="#"
            style={{
              width: "100%",
              textDecoration: "none",
            }}
          >
            <Button
              variant="secondary"
              color="secondary"
              size="large"
              fullWidth
            >
              Continuar
            </Button>
          </Link>
        </Box>
      </form>
    </>
  );
};

export default CreditCard;
