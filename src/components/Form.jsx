


const Form = () => {
    return(
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="ingrese su mail"></input>

            <hr></hr>

            <label htmlFor="passwrod">Password</label>
            <input type="password" placeholder="Ingrese su contraseña"></input>

            <button>Submit</button>

        </form>
    )
}



export default Form;