
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from "axios";
import * as yup from "yup"
import { useState } from 'react';


const schema = yup.object({
  name: yup.string()
    .required("El nombre es requerido"),
  lastname: yup.string().required("El apellido es requerido"),
  dni: yup.string().required("El DNI es requerido"),
  email: yup.string().required("El email es requerido"),
  phone: yup.string().required("El Telefono es requerido"),
  password: yup
    .string()
    .required("La contraseña es requerida")
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(20, 'La contraseña no puede tener más de 20 caracteres')
    .matches(/^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,20}$/, 'La contraseña debe contener al menos 1 carácter especial, una mayúscula y un número'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), undefined], 'Las contraseñas no coinciden')
    .required('La confirmación de contraseña es obligatoria'),
}).required();
type FormData = yup.InferType<typeof schema>;

const Register = () => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

 
  const onSubmit = async (data: FormData) => { 
    try {
      await axios
        .post("https://digitalmoney.ctd.academy/api/users", {
          dni:  parseInt(data.dni),
          email: data.email,
          firstname: data.name,
          lastname: data.lastname,
          password: data.password,
          phone: data.phone,
        })
        .then(function (response) {
          console.log(response);
          setError(false)
          router.push("/");
        })
    } catch (error) {
      console.log(error);
      setError(true)
    }
  };

  return (
    <main >
      <div >
        <h1>Crear Cuenta</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Nombre*"  {...register("name")} />
          <p> {errors.name?.message}</p>


          <input type="text" placeholder="Apellido*" {...register("lastname")} />
          <p> {errors.lastname?.message}</p>

          <input type="text" placeholder="DNI*" {...register("dni")} />
          <p> {errors.dni?.message}</p>
          <input type="text" placeholder="Correo electronico*" {...register("email")} />
          <p> {errors.email?.message}</p>

          <input type="text" placeholder="Telefono*" {...register("phone")} />
          <p> {errors.phone?.message}</p>

          <input type="pasword" placeholder="Contraseña" {...register("password")} />

          <p> {errors.password?.message}</p>

          <input type="pasword" placeholder="Repetir Contraseña" {...register("confirmPassword")} />
          <p> {errors.confirmPassword?.message}</p>
          <input type="submit" value="Crear Cuenta" disabled={isSubmitting} />
        </form>
      </div>
    </main>
  )

}
export default Register


