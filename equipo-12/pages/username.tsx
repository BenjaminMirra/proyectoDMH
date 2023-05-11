import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Link from "next/link";
import * as yup from "yup";
import { useRouter } from "next/router";

const schema = yup.object({
    email: yup.string().required("Se requiere de un correo electronico").email("Se solicita un correo electronico valido"),
}).required();
type FormData = yup.InferType<typeof schema>;

const Username =  () => {
    const router = useRouter();
    const { register, handleSubmit, formState:{ errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const onSubmit = ( data : FormData ) => router.push({
        pathname: "/password",
        query: {email : data.email}
    });
    return(
        <div>
            <h2>¡Hola! Ingresá tu e-mail</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} />
                <p> {errors.email?.message}</p>

                <input type="submit"  value="Continuar"/>
            </form>
            <Link href="#">Crear cuenta</Link>
        </div>
    )
}

export default Username;