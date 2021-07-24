import React, { useState } from  'react';

const Forms = (props) =>{
    const [firstName, setfirstName] = useState("");
    const [firstError, setfirstError] = useState ("");

    const [lastName, setlastName] = useState("");
    const [lastError, setlastError] = useState ("");

    const [email, setEmail] = useState("");
    const [emailerror, setemailError] = useState ("");

    const [password, setPassword] = useState("");
    const [passwordError, setpasswordError] = useState ("");

    const [confirmPassword, setconfirmPassword] = useState("");
    const [confirmpasswordError, setconfirmError] = useState ("");


    const firstuserError = (e) => {
        setfirstName(e.target.value);
        if(e.target.value.length < 2) {
            setfirstError("First Name must be at least 2 Char");
        }else {setfirstError("")}
        };

        const seconduserError = (e) => {
            setlastName(e.target.value);
            if(e.target.value.length < 2) {
                setlastError("Last Name must be at least 2 Char");
            }else {setlastError("")}
            };

            const emailuserError = (e) => {
                setEmail(e.target.value);
                if(e.target.value.length < 5) {
                    setemailError("Email must be at least 5 Char");
                }else {setemailError("")}
                };

                const passworduserError = (e) => {
                    setPassword(e.target.value);
                    if(e.target.value.length < 8) {
                        setpasswordError("Password must be at least 8 Char");
                    }else {setpasswordError("")}
                    };

                    const confirmuserError = (e) => {
                        setconfirmPassword(e.target.value);
                        if(e.target.value !== password) {
                            setconfirmError("Passwords must match");
                        }else {setconfirmError("")}
                        };
    

    return(
        <form onSubmit={ (e) => e.preventDefault() }>
            <div className="form-group">

        <label htmlFor="firstName">First Name: </label> 
        <input onChange={firstuserError} type="text" name="firstName" />
        {firstError?  <p>   {firstError}  </p> : ''}
        </div>
        <div className="form-group">
        <label htmlFor="lastName">Last Name: </label> 
        <input onChange={seconduserError} type="text" name="lastName" />
        {lastError?  <p>   {lastError}  </p> : ''}
        </div>
         <div className="form-group">
        <label htmlFor="email">Email: </label> 
        <input onChange={emailuserError} type="text" name="email" />
         {emailerror?  <p>   {emailerror}  </p> : ''}
        </div>

        <div className="form-group">
        <label htmlFor="password">Password: </label> 
        <input onChange={passworduserError} type="password" name="password" />
        {passwordError?  <p>   {passwordError}  </p> : ''}
        </div>

        <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password: </label> 
        <input onChange={confirmuserError} type="password" name="confirmPassword" />
        {confirmpasswordError?  <p>   {confirmpasswordError}  </p> : ''}
        </div>
        <input type="submit" value="Create User" />
  
    </form>
    );
};
export default Forms;