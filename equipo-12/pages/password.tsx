import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import * as yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

const schema = yup
  .object({
    password: yup
      .string()
      .required("La contraseña es requerida")
      .min(
        8,
        "La contraseña es demasiado corta - debe tener al menos 8 caracteres."
      ),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Password = () => {
    const [error, setError] = useState(false)
  const router = useRouter();
  const { query } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
    await axios
      .post("http://localhost:3000/api/login", {
        email: query.email,
        password: data.password,
      })
      .then(function (response) {
        console.log(response);
        setError(false)
        router.push("/");
      })
    }catch (error){
        console.log(error);
        setError(true)
    }
  };

  return (
    <div>
      <h2>Ingresá tu contraseña</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("password")} />
        <p> {errors.password?.message}</p>
        {error && <p>Contraseña incorrecta. Vuelve a intentarlo</p>}
        <input type="submit" value="Continuar" />
      </form>
    </div>
  );
};

export default Password;
