import { Controller } from "react-hook-form";
import { TextField, Typography, Box, TextFieldVariants } from "@mui/material";

interface InputType {
  control: any;
  name: string;
  type: string;
  label: string;
  defaultValue?: string;
  sx?: any;
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
}: InputType) => {
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
