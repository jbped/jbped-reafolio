import React from 'react'

export default function ContactForm() {
    return (
        <div className="container transparent mt-2">
            <h1 className="no-select text-uppercase text-primary">Contact Me</h1>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="first-name-input" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="first-name-input" />
                </div>
                <div class="col-md-6">
                    <label for="last-name-input" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="last-name-input" />
                </div>
                <div class="col-12">
                    <label for="email-input" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="email-input" placeholder="Enter email address here" />
                </div>
                <div class="mb-3">
                    <label for="message-input" class="form-label">Message</label>
                    <textarea class="form-control" id="message-input" rows="3"></textarea>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}