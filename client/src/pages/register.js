import { useState } from "react";
import Layout from "../components/layout";

const Register = () => {
    const [values, setValues] =useState ({
        email: '',
        password: ''

    })

    const [error, setError] = useState(false)
    const [success, setSucess] = useState(false)

    const onChange = () => {

    }

    const onSubmit = () => {
        
    }

    return (
        <Layout>
             <h1>Register</h1>
        </Layout>
    )
  }
  
  export default Register;