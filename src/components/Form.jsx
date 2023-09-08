import { useState } from "react";
import validation from "./Validation/validation";


const Form = ({login}) => {
    const [errors,setErrors]=useState({})

    const [userData,setUserData]=useState({
        email:'',
        password:''
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]:event.target.value
        }))

    } 
    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData);
    }


    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" name='email'placeholder="ingrese su mail" value={userData.email}
            onChange={handleChange}></input>
            {errors.email && <p>{errors.email}</p>}

            <hb></hb>

            <label htmlFor="password">Password</label>
            <input type="password"name='password' placeholder="Ingrese su contraseña"value={userData.password}
            onChange={handleChange}></input>
            {errors.password && <p>{errors.password}</p>}


            <button>Submit</button>

        </form>
    )
}



export default Form;