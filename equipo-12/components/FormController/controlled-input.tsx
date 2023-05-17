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
  size?: "small" | "medium";
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
  size,
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
            size={size}
            fullWidth
          />
        )}
      />
      {errorMessage && <Typography variant="error">{errorMessage}</Typography>}
    </Box>
  );
};

export default ControlledInput;
