import { useRouter } from "next/router";

const Password =  () => {
    const { query } = useRouter();
    return(
        <div>
            <h2>Password login {query.email}</h2>
        </div>
    )
}

export default Password;