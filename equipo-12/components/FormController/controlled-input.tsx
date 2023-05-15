import { Controller, Control, FieldValues } from "react-hook-form";
import { TextField, Typography, Box, TextFieldVariants } from "@mui/material";
import { SxProps } from "@mui/system";
interface MyFormValues extends FieldValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dni: string;
  confirmPassword: string;
  phone: string;
}
interface InputType<T extends FieldValues> {
  control: Control<T>;
  name: string;
  type: string;
  label: string;
  defaultValue?: string;
  sx?: SxProps;
  errorMessage?: string;
  variant?: TextFieldVariants;
}

const ControlledInput = ({
  control,
  name,
  type,
  label,
  defaultValue,
  sx,
  errorMessage,
  variant,
}: InputType<MyFormValues>) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field: { name, value, onChange }, field }) => (
          <TextField
            {...field}
            type={type}
            name={name}
            value={value}
            label={label}
            sx={sx}
            variant={variant}
            onChange={onChange}
            InputProps={{
              sx: {
                height: "100%",
              },
            }}
            fullWidth
          />
        )}
      />
      {errorMessage && (
        <Typography
          sx={{
            position: "absolute",
            color: "#CC0000",
            top: "100%",
            fontSize: "14px",
            fontStyle: "italic",
          }}
        >
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default ControlledInput;
