const validation = (userData) => {
    const errors={};

    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email ="El email ingresado no es valido";
    }
    if(!userData.email){
        errors.email = "Este campo no puede estar vacio";
    }
    if(userData.email.length > 35){
        errors.email= "El maximo de caracteres es de 35";
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password="Debe tener al menos un numero";
    }
    if(userData.password.length <6 || userData.password.length >10){
        errors.password="Debe ser mayor a 6 y menos a 10 caracteres"
    }

    return errors;
}

export default validation;