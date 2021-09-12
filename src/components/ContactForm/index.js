import React, { useState } from 'react'

export default function ContactForm() {
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', message: '' });
    const { firstName, lastName, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleChange = e => {
        if (e.target.name === 'email-input') {
            const isValid = validateEmail(e.target.value);
            !isValid ? setErrorMessage('Your email is invalid.') : setErrorMessage('');
            console.log(isValid);
        } else {
            !e.target.value.length ? setErrorMessage(`${e.target.name}`) : setErrorMessage('');
        }
        // e.target.name === 'email' && console.log(validateEmail(e.target.value))
        !errorMessage && setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('errorMessage', errorMessage);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formState)
    }
    return (
        <div className="container transparent">
            <h1 className="no-select text-uppercase text-primary">Contact Me</h1>
            <form class="row g-3" onSubmit={handleSubmit}>
                <div class="col-md-6">
                    <label htmlFor="first-name-input" class="form-label">First Name</label>
                    <input type="text" class={`form-control ${errorMessage === 'first-name-input'? 'is-invalid' : 'is-valid'}`} id="first-name-input" defaultValue={firstName} onBlur={handleChange} />
                    {errorMessage && 
                        <div className="transparent invalid-feedback">Please provide your first name</div>
                    }
                </div>
                <div class="col-md-6">
                    <label htmlFor="last-name-input" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="last-name-input"  defaultValue={lastName} onBlur={handleChange} />
                </div>
                <div class="col-12">
                    <label htmlFor="email-input" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="email-input" placeholder="Enter email address here"  defaultValue={email} onBlur={handleChange} />
                </div>
                <div class="mb-3">
                    <label htmlFor="message-input" class="form-label">Message</label>
                    <textarea class="form-control" id="message-input" rows="3"  defaultValue={message} onBlur={handleChange} />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </div>
            </form>
        </div>
    )
}