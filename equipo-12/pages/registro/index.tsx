
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as yup from "yup"

const schema = yup.object({
  email: yup.string().required("Se requiere de un correo electronico").email("Se solicita un correo electronico valido"),
}).required();
type FormData = yup.InferType<typeof schema>;

const Register = () => {
  const router = useRouter();
  const { register, handleSubmit, formState:{ errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = ( data : FormData ) => router.push({ 
    pathname: "/registroExitoso",
    query: { email : data.email }
   });
    return (
      <main >
        <div >
          <h1>Crear Cuenta</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
           <input type="text" name="name*" placeholder="Nombre*"/>
            <input type="text" name="lastname*" placeholder="Apellido*"/>
            <input type="text" name="DNI" placeholder="DNI*"/>
            <input type="text" name="email" placeholder="Correo electronico"/>
            <input type="text" name="password" />
            <Link href="#">Crear Cuenta</Link>
          </form>
        </div>
      </main>
    )

}
export default Register
