
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from "axios";
import * as yup from "yup"
import error from 'next/error';
import { useState } from 'react';


const schema = yup.object({
  password: yup
  .string()
  .required("La contraseña es requerida")
  .min(6, 'La contraseña debe tener al menos 6 caracteres')
  .max(20, 'La contraseña no puede tener más de 20 caracteres')
  .matches(/^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,20}$/, 'La contraseña debe contener al menos 1 carácter especial, una mayúscula y un número'),
}).required();
type FormData = yup.InferType<typeof schema>;

const Register = () => {
  const [error, setError] = useState(false)
  const router = useRouter();
  const { register, handleSubmit, formState:{ errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = async (data: FormData) => {
    try {
    await axios
      .post("http://localhost:3000/registro", {
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
      <main >
        <div >
          <h1>Crear Cuenta</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
           <input type="text" name="name*" placeholder="Nombre*"/>
            <input type="text" name="lastname*" placeholder="Apellido*"/>
            <input type="text" name="DNI" placeholder="DNI*"/>
            <input type="text" name="email" placeholder="Correo electronico"/>
            <input {...register("password")} />
        <p> {errors.password?.message}</p>
        {error && <p>Contraseña incorrecta. Vuelve a intentarlo</p>}
        <input type="submit" value="Crear Cuenta" />
          
          

          </form>
        </div>
      </main>
    )

}
export default Register
function setError(arg0: boolean) {
  throw new Error('Function not implemented.');
}

