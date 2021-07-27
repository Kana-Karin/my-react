import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MDBInput,MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

function ContactForm() {
    const [state, handleSubmit] = useForm("xayapwzg");
    if (state.succeeded) {
        return <p>お問い合わせありがとうございました。</p>;
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <h1>Contact</h1>
        <MDBInput
          id="email"
          type="email" 
          name="email"
          label='Email'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <MDBInput label='Message'
          id="message"
          name="message"
          textarea rows={4}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <MDBBtn color='light' type="submit" disabled={state.submitting}>
            <MDBIcon className='me-2' far icon="paper-plane" /> 送信
        </MDBBtn>
      </form>
      </div>
    );
  }
  

export default ContactForm;