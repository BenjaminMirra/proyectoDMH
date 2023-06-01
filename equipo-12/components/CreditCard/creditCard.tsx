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
  Grid,
  Paper,
  Alert,
} from "@mui/material";
import Link from "next/link";
import ControlledInput from "../FormController/controlled-input";
import axios from "axios";
import { styled } from "@mui/material/styles";
import catchError from "../../services/creditCard/handle-credit-cards-errors";
import { useUserData } from "../../context/createContext";
import { useRouter } from "next/router";

const CreditCard = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const { account } = useUserData();
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focused, setFocused] = useState(undefined);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

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

  const onSubmit = async () => {
    if (state.cvc === "" || state.name === "" || state.number === "") {
      setError("Por favor, complete todos los campos");
    } else {
      const token = localStorage.getItem("token");
      try {
        await axios
          .post(
            `https://digitalmoney.ctd.academy/api/accounts/${account.id}/cards`,
            {
              cod: parseInt(cvc),
              expiration_date: expiry,
              first_last_name: name,
              number_id: parseInt(number),
            },
            {
              headers: {
                Authorization: token,
              },
            }
          )
          .then((response) => {
            setSuccess("Operación realizada con éxito");
            setTimeout(() => {
              router.push("/listar-tarjetas");
            }, 3000);
          });
      } catch (error) {
        console.error(error);
        const errorMessage = catchError(error);
        setError(errorMessage);
        return;
      }
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
      {error !== "" && (
        <Alert
          severity="error"
          sx={{
            marginTop: "30px",
          }}
        >
          {error}
        </Alert>
      )}
      {success !== "" && (
        <Alert
          severity="success"
          sx={{
            marginTop: "30px",
          }}
        >
          {success}
        </Alert>
      )}
      <form
        onSubmit={onSubmit}
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
              gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
              "& .css-1yuncik-MuiFormLabel-root-MuiInputLabel-root": {
                transform: "translate(12px, 15px) scale(1)",
              },
              height: "100%"
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
                id="validateDate"
                name="validateDate"
                label="Fecha de vencimiento*"
                onFocusCapture={handleInputFocus}
              />
            )}
          </InputMask>

          <TextField
            id="name"
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
          <Box
            sx={{
              "@media only screen and (min-width: 768px)": {
                gridColumn: "span 2",
                maxWidth: "100%",
              },
              "@media only screen and (min-width: 1024px)": {
                gridColumn: "2",
              },
            }}
          >
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
                onClick={onSubmit}
                onFocusCapture={handleInputFocus}
              >
                Continuar
              </Button>
            </Link>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default CreditCard;
