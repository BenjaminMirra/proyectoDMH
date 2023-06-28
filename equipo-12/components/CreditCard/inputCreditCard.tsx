import React from "react";
import InputMask from "react-input-mask";
import { TextField } from "@mui/material";
const inputs = [
  {
    path: "/login",
    component: "",
  },
];
const Input = (props: any) => (
  <InputMask mask="99/99/9999" value={props.value} onChange={props.onChange}>
    {(props) => (
      <main>
        <h1>{props.title}</h1>
      </main>
    )}
  </InputMask>
);
