import React, { useState } from 'react'

export default function ContactForm() {
    const [formState, setFormState] = useState({ first: '', last: '', email: '', message: '' });
    const { first, last, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState({
        first: {
            error: ''
        },
        last: {
            error: ''
        },
        email: {
            error: ''
        },
        message: {
            error: ''
        }
    });

    // console.log(errorMessage)
    
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleChange = e => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // !isValid 
            //     ? setErrorMessage({ ...errorMessage, email: { error: true }}) 
            //     : (
            //         setErrorMessage({ ...errorMessage, email: { error: false} }) 
            //         && setFormState({ ...formState, email: e.target.value })
            //         && console.log(formState)
            //     );

            if (!isValid) {
                setErrorMessage({ ...errorMessage, email: { error: true }}) 
            } else {
                setErrorMessage({ ...errorMessage, email: { error: false} }) 
                setFormState({ ...formState, email: e.target.value })
            }
        } else {
            // (e.target.value.length === 0) 
            // ? setErrorMessage({ ...errorMessage, [e.target.name]: { error: true } }) 
            // : (
            //     setErrorMessage({ ...errorMessage, [e.target.name]: { error: false } })
            //     && (setFormState({ ...formState, [e.target.name]: e.target.value }))
            //     && console.log("onBlur formState", formState)
            //     && console.log("onBlur value", e.target.value)
            // );

            if (e.target.value.length === 0) {
                setErrorMessage({ ...errorMessage, [e.target.name]: { error: true } })
            } else {
                setErrorMessage({ ...errorMessage, [e.target.name]: { error: false } });
                setFormState({ ...formState, [e.target.name]: e.target.value });
                // console.log("onBlur formState", formState)
                // console.log("onBlur value", e.target.value)

            }
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("formState", formState)
    }
    return (
        <div className="container transparent">
            <h1 className="no-select text-uppercase text-primary mb-4">Contact Me</h1>
            <form className="row g-3 section-backdrop section-backdrop-borders px-4 pb-4 pt-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="first-name-input" className="form-label transparent fs-4">First Name</label>
                    <input 
                        type="text" 
                        name="first" 
                        className={`
                            form-control 
                            ${
                                (errorMessage.first.error.length === 0 && '') 
                                || (errorMessage.first.error && 'is-invalid') 
                                || (errorMessage.first.error === false && 'is-valid')
                            }
                        `} 
                        id="first-name-input" 
                        placeholder="Enter first name here" 
                        defaultValue={first} 
                        onBlur={handleChange} 
                    />
                    {errorMessage.first.error && 
                        <div className="transparent invalid-feedback">Please provide your first name</div>
                    }
                </div>
                <div className="col-md-6">
                    <label htmlFor="last-name-input" className="form-label transparent fs-4">Last Name</label>
                    <input 
                        type="text" 
                        name="last" 
                        className={`
                            form-control 
                            ${
                                (errorMessage.last.error.length === 0 && '') 
                                || (errorMessage.last.error && 'is-invalid') 
                                || (errorMessage.last.error === false && 'is-valid')
                            }
                        `}
                        id="last-name-input"  
                        defaultValue={last} 
                        onBlur={handleChange} 
                    />
                    {errorMessage.last.error && 
                        <div className="transparent invalid-feedback">Please provide your last name</div>
                    }
                </div>
                <div className="col-12">
                    <label htmlFor="email-input" className="form-label transparent fs-4">Email Address</label>
                    <input 
                        type="email" 
                        name="email" 
                        className={`
                            form-control 
                            ${
                                (errorMessage.email.error.length === 0 && '') 
                                || (errorMessage.email.error && 'is-invalid') 
                                || (errorMessage.email.error === false && 'is-valid')
                            }
                        `}
                        id="email-input" 
                        placeholder="Enter email address here"
                        defaultValue={email} 
                        onBlur={handleChange} 
                    />
                    {errorMessage.email.error && 
                        <div className="transparent invalid-feedback">Please provide a valid email address</div>
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="message-input" className="form-label transparent fs-4">Message</label>
                    <textarea  
                        name="message" 
                        className={`
                            form-control 
                            ${
                                (errorMessage.message.error.length === 0 && '') 
                                || (errorMessage.message.error && 'is-invalid') 
                                || (errorMessage.message.error === false && 'is-valid')
                            }
                        `}
                        id="message-input" 
                        rows="3" 
                        placeholder="Share your thoughts with me!"
                        defaultValue={message} 
                        onBlur={handleChange} 
                    />
                    {errorMessage.email.error && 
                        <div className="transparent invalid-feedback">Please write a message above</div>
                    }
                </div>
                <div className="col-12">
                    <button type="submit" className={`btn btn-primary ${Object.values(errorMessage).every(key => key.error === false ) ? '' : 'disabled'}`}>Send Message</button>
                </div>
            </form>
        </div>
    )
}