import { Control, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

interface InputType {
  control: any;
  name: string;
  type: string;
  label: string;
  defaultValue?: string;
}

const ControlledInput = ({
  control,
  name,
  type,
  label,
  defaultValue,
}: InputType) => {
  return (
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
          onChange={onChange}
          fullWidth
        />
      )}
    />
  );
};

export default ControlledInput;
