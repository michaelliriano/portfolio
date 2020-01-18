import React from 'react';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class Contact extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('First Name is required'),
          lastName: Yup.string().required('Last Name is required'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          message: Yup.string()
            .min(10, 'Message must contain at least 10 characters')
            .required('A message is required')
        })}
        onSubmit={fields => {
          axios({
            method: 'POST',
            url: '/api/form',
            data: fields
          });

          console.log('Submitted');
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <div className='container'>
              <div className='work-together'>
                <h3>
                  <strong>Let's</strong> Work Together!
                </h3>
                <h3 id='hideaway' style={{ display: 'none' }}>
                  Thank you! I'll be in touch with you as soon as possible.
                </h3>
              </div>
              <div className='form-group'>
                <label htmlFor='firstName'>First Name</label>
                <Field
                  name='firstName'
                  type='text'
                  className={
                    'form-control' +
                    (errors.firstName && touched.firstName ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name='firstName'
                  component='div'
                  className='invalid-feedback'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='lastName'>Last Name</label>
                <Field
                  name='lastName'
                  type='text'
                  className={
                    'form-control' +
                    (errors.lastName && touched.lastName ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name='lastName'
                  component='div'
                  className='invalid-feedback'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <Field
                  name='email'
                  type='text'
                  className={
                    'form-control' +
                    (errors.email && touched.email ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='invalid-feedback'
                />
              </div>
              <div className='form-group'>
                <label rows='10' htmlFor='message'>
                  Message
                </label>
                <Field
                  name='message'
                  type='message'
                  className={
                    'form-control' +
                    (errors.message && touched.message ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name='message'
                  component='div'
                  className='invalid-feedback'
                />
              </div>

              <div className='form-group'>
                <button
                  type='submit'
                  action='/'
                  className='btn  mr-2'
                  style={{ color: 'white', background: '#ff3f81 ' }}
                  onClick={Document.getEl}
                >
                  Submit
                </button>
                <button type='reset' className='btn btn-secondary'>
                  Reset
                </button>
              </div>
            </div>
          </Form>
        )}
      />
    );
  }
}

export default Contact;
