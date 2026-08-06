import { useState } from :"react";
function Contact(){
    const [formData, setFormData] = useState ({
        name :"",
        email:"",
        mobile:"",
        subject:"",
        message:""
    });
    const[errors, setErrors] = useState({});
    return(
        
    );
}

export default Contact;