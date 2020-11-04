import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const HubSpotForm = () => {
  const { register, handleSubmit, errors } = useForm()
  const [isSent, setIsSent] = useState(false)
  const targetUrl = `https://api.hsforms.com/submissions/v3/integration/submit/:${process.env.portalId}/:${process.env.contactFormGuid}`
  const submitForm = data => {
    fetch(targetUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => setIsSent(true))

      .catch(() => alert('There was an error, please try again')) // eslint-disable-line no-alert
  }

  const form = (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <label htmlFor='firstname' className='block'>
          First Name
          <input
            type='text'
            name='firstname'
            id='firstname'
            className='w-full rounded text-contrast_dark'
            placeholder='First Name'
            ref={register({ required: true, minLength: 2, pattern: /[A-Za-z]/ })}
          />
        </label>
        {errors.firstname && (
          <span className='text-red font-thin italic block'>Please include your first name</span>
        )}
        {errors.firstname && (
          <span className='block text-red font-thin italic'>
            Your name should be at least 2 letters
          </span>
        )}
        {errors.firstname && (
          <span className='block text-red font-thin italic'>
            Your name should only include letters
          </span>
        )}
      </div>
      <div>
        <label htmlFor='lastname' className='block'>
          Last Name
          <input
            type='text'
            name='lastname'
            id='lastname'
            className='w-full rounded text-contrast_dark'
            placeholder='Last Name'
            ref={register({ required: true, minLength: 2, pattern: /[A-Za-z]/ })}
          />
        </label>
        {errors.lastname && (
          <span className='text-red font-thin italic block'>Please include your first name</span>
        )}
        {errors.lastname && (
          <span className='block text-red font-thin italic'>
            Your name should be at least 2 letters
          </span>
        )}
        {errors.lastname && (
          <span className='block text-red font-thin italic'>
            Your name should only include letters
          </span>
        )}
      </div>
      <div>
        <label htmlFor='email' className='block mt-4'>
          Email
          <input
            type='email'
            name='replyto'
            id='email'
            className='w-full rounded text-contrast_dark'
            placeholder='Your Email'
            ref={register({ required: true, minLength: 5 })}
          />
        </label>
        {errors.replyto && (
          <span className='text-red font-thin italic'>Please include your email</span>
        )}
        {errors.replyto && (
          <span className='block text-red font-thin italic'>Your email does not look correct</span>
        )}
      </div>
      <div>
        <label htmlFor='message' className='block mt-4'>
          What&apos;s your project?
          <textarea
            name='message'
            id='message'
            cols='24'
            rows='5'
            className='w-full rounded text-contrast_dark'
            placeholder='Your Amazing Idea'
            ref={register}
          />
        </label>
      </div>
      <button
        type='submit'
        value='Send'
        className='mt-2 bg-white text-contrast_dark font-semibold p-1 w-2/6 rounded'
      >
        Submit
      </button>
    </form>
  )

  const thankYou = [
    <div className='mt-5 ml-auto mr-auto border rounded w-2/3 bg-white text-contrast_dark font-semibold text-center'>
      <h3>Thank You!</h3>
      <p>Plan on hearing back soon.</p>
    </div>
  ]

  return <div> {isSent ? thankYou : form} </div>
}

export default HubSpotForm
