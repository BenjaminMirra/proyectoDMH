import { Box, Typography, Button, TextField, Input, FormControl } from "@mui/material";
import { useState } from "react";
import * as Yup from "yup";

const AddMoneyOption = () => {
  const [inputValue, setInputValue] = useState("");
  const [validationError, setValidationError] = useState("");
  const validationSchema = Yup.object().shape({
    number: Yup.string()
      .test("notEmpty", "Este campo es requerido", (value: any) => {
        return value && value.trim() !== "";
      })
      .test("validNumber", "Ingrese solo números", (value) => {
        if (value && value !== "") {
          return !isNaN(parseFloat(value));
        }
        return true;
      })
      .test("decimalWithDigits", "Ingrese números después del decimal", (value) => {
        if (value && value !== "") {
          const decimalPart = value.split(".")[1];
          return decimalPart === undefined || decimalPart.length > 0;
        }
        return true;
      })
      .test("decimalDigits", "*Ingrese como máximo dos dígitos después de la coma", (value) => {
        if (value && value !== "") {
          const decimalPart = value.split(".")[1];
          if (decimalPart === undefined) {
            // Permitir un número sin coma decimal
            return true;
          }
          return decimalPart.length >= 1 && decimalPart.length <= 2;
        }
        return true;
      })
      .test("noLetters", "No ingrese letras", (value) => {
        if (value && value !== "") {
          const transformedValue = value.replace(",", "."); // Reemplazar coma por punto
          return /^\d*\.?\d*$/.test(transformedValue);
        }
        return true;
      })
      .required("Ingrese la cantidad de dinero a transferir")
  });

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
    validationSchema
      .validate({ number: e.target.value })
      .then(() => {
        setValidationError("");
      })
      .catch((error) => {
        setValidationError(error.message);
      });
  };

  const handleBlur = () => {
    validationSchema
      .validate({ number: inputValue })
      .then(() => {
        setValidationError("");
      })
      .catch((error) => {
        setValidationError(error.message);
      });
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    validationSchema
      .validate({ number: inputValue })
      .then(() => {
        //router.push( "/cargar-dinero/CONFIRMACION");
      })
      .catch((error) => {
        setValidationError(error.message);
      });
  };

  return (
    <Box
      sx={{
        backgroundColor: "var(--main-bg-color)",
        color: "var(--main-text-color)",
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

        "@media (max-width: 768px)": {
          padding: "18px 45px 18px 25px",
          gap: "18px",
        },
        "@media (min-width: 768px)": {
          padding: "40px 45px 40px 35px",
          gap: "18px",
        },
        "@media (min-width: 1024px)": {
          padding: "40px 45px 18px 35px",
          gap: "18px",
        },
      }}
    >
      <FormControl onSubmit={handleClick}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          flexDirection: "colum",
          alignContent: "flex-start",
          width: "100%",
        }}
      >
        <Box

        >
          <Typography
            sx={{
              color: "#C1FD35",
              paddingBottom: "25px"
            }}
            variant="h6"
          >
                        ¿Cuánto querés ingresar a la cuenta?
          </Typography>
          <Box sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            alignContent: "flex-start",


          }}>

            <TextField
              type="text"
              value={inputValue}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="filled"
              size="medium"
              placeholder="$0"
              InputProps={{
                disableUnderline: true, // Desactivar subrayado al hacer clic
              }}
              sx={{
                borderRadius: "10px",
                backgroundColor: "#ffffff"
              }}
            />
            <Typography sx={{ paddingLeft: "20px", color: "#C1FD35" }} variant="h6">
              {validationError}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            paddingBottom: "25px"
          }}
        >
          <Button
            variant="primary"
            color="secondary"
            size="large"
            type="submit"
            sx={{
              textTransform: "none",
              borderColor: "transparent", // Desactivar el color del borde
              backgroundColor: validationError ? "#CECECE" : "#C1FD35", // Cambiar el color del botón según la visibilidad del error
              "&:hover": {
                backgroundColor: validationError ? "#CECECE" : "#C1FD35", // Cambiar el color del botón según la visibilidad del error,

              },
            }}
          >
                        Continuar
          </Button>
        </Box>
      </FormControl>
    </Box>

  );
};

export default AddMoneyOption;
