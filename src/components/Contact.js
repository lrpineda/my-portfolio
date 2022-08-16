import { useState } from "react";
import { validateEmail } from "../utils/helpers";

export const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => { 
        setFormState({ ...formState, [e.target.name]: e.target.value });

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Please enter a valid email address.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage('Please enter an email address.');
                }
                setErrorMessage('');
            }
            if(!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
            }
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="min-h-screen bg-base-50 flex flex-col items-center justify-center">
            <h1 className="logo text-white text-center text-4xl">Contact Me</h1>
            <div className="w-full py-6 md:w-4/6 my-6">
                <form 
                    onSubmit={handleSubmit}
                    action="mailto:luicks212@gmail.com"
                    method="POST"
                    encType="multipart/form-data"
                    name="EmailForm">

                <input type="text" name="name" placeholder="Name" defaultValue={name} onBlur={handleChange} class="input w-full my-2 bg-white" />
            
                <input type="text" name="email" defaultValue={email} onBlur={handleChange}  placeholder="Email" class="input w-full my-2 bg-white" />
            
                <textarea name="message" defaultValue={ message } onBlur={handleChange} class="textarea w-full bg-white my-2" placeholder="Message"></textarea>
                {errorMessage && (
                    <label class="label">
                        <span class="label-text text-red-300">{errorMessage}</span>
                    </label>
                )}
                
                <input type="submit" class="btn btn-secondary w-full" value={"Submit"}/>
                </form>
            </div>
        </div>
    );
}
