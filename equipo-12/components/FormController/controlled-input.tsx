import {
  Controller,
  Control,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import { TextField, Typography, Box, TextFieldVariants } from "@mui/material";
import { SxProps } from "@mui/system";

interface InputType<T extends FieldValues = FieldValues> {
  control: Control<T>;
  name: Path<T>;
  type: string;
  label: string;
  defaultValue?: PathValue<T, Path<T>>;
  sx?: SxProps;
  errorMessage?: string;
  variant?: TextFieldVariants;
  size?: "small" | "medium";
  id?:string | number;
  onFocusCapture?:({ target }: any) => void
}

const ControlledInput = <T extends FieldValues = FieldValues>({
  control,
  name,
  type,
  label,
  defaultValue,
  sx,
  errorMessage,
  variant,
  size,  
}: InputType<T>) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
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
