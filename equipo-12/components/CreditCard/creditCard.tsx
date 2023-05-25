import { yupResolver } from "@hookform/resolvers/yup";
import { FormEvent, MouseEvent, useEffect, useState } from "react";
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
import axios from "axios";

/* const schema = yup
  .object({
    name: yup.string().required("El nombre es requerido."),
    numberCard: yup.number().required("El número de tarjeta es requerido."),
    validateDate: yup.number().required("El número de tarjeta es requerido."),
    cvc: yup.number().required("El número de tarjeta es requerido."),
  })
  .required();
type FormData = yup.InferType<typeof schema>; */

const CreditCard = () => {  
  const [isDisabled, setIsDisabled] = useState(false);  
  const [limit10, setLimit10] = useState(false);
  const [idAccount, setIdAccount] = useState();
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focused, setFocused] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios("https://digitalmoney.ctd.academy/api/account", {
      headers: {
        Authorization: token,
      },
    }).then((response) => {
      setIdAccount(response.data?.id);
      console.log(idAccount);
      console.log(typeof idAccount);
    });
  }, [idAccount]);
  

  useEffect(() => {
    setState({
      number: number,
      name: name,
      expiry: expiry,
      cvc: cvc,
    });
  }, [number, name, expiry, cvc]);

  const handleInputFocus = ({ target }: any) => {
    setFocused(target.id);
  };

  const onSubmit = async (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(JSON.stringify(state));
    /* alert(JSON.stringify(state)); */
    try {
      await axios
        .post(
          `https://digitalmoney.ctd.academy/api/accounts/${idAccount}/cards`,
          {
            cod: parseInt(cvc),
            "expiration_date": expiry,
            "first_last_name": name,
            "number_id": parseInt(number),
          },
          {
            headers: {              
              Authorization: token,
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card
        locale={{
          valid: "MM/YYYY",
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
        onSubmit={(e) => onSubmit(e)}
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
            onChange={(e: any) => setNumber(e.target.value)}
            disabled={false}
            maskChar=" "
          >
            {() => (
              /*       <ControlledInput
                control={control}
                name="numberCard"
                type="number"
                id="number"
                value={number}
                label="Número de la tarjeta*"
                onFocusCapture={handleInputFocus}
              /> */
              <TextField
                name="numberCard"
                id="number"
                label="Número de la tarjeta*"
                onFocusCapture={handleInputFocus}
              />
            )}
          </InputMask>
          <InputMask
            mask="99/9999"
            value={expiry}
            onChange={(e: any) => setExpiry(e.target.value)}
            disabled={false}
            maskChar=" "
          >
            {() => (
              <TextField
                name="validateDate"
                label="Fecha de vencimiento*"
                onFocusCapture={handleInputFocus}
              />
            )}
          </InputMask>

          <TextField
            name="name"
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
                name="cvc"
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
              disabled={isDisabled}
              onClick={(e) => onSubmit(e)}
              onFocusCapture={handleInputFocus}
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
