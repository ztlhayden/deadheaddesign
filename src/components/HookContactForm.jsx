import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const HookContactForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [isSent, setIsSent] = useState(false);
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = 'https://formspree.io/f/xyybkpol';
  const submitForm = data => {
    console.log(JSON.stringify({ data }));
    fetch(proxyUrl + targetUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => setIsSent(true))

      .catch(() => alert('There was an error, please try again'));
  };

  const form = (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <label htmlFor="name" className="block">
          Name
          <input
            type="text"
            name="name"
            id="name"
            className="w-full rounded text-contrast_dark"
            placeholder="Your Name"
            ref={register({ required: true, minLength: 2, pattern: /[A-Za-z]/ })}
          />
        </label>
        {errors.name && (
          <span className="text-red font-thin italic block">Please include your name</span>
        )}
        {errors.name && (
          <span className="block text-red font-thin italic">
            Your name should be at least 2 letters
          </span>
        )}
        {errors.name && (
          <span className="block text-red font-thin italic">
            Your name should only include letters
          </span>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block mt-4">
          Email
          <input
            type="email"
            name="replyto"
            id="email"
            className="w-full rounded text-contrast_dark"
            placeholder="Your Email"
            ref={register({ required: true, minLength: 5 })}
          />
        </label>
        {errors.replyto && (
          <span className="text-red font-thin italic">Please include your email</span>
        )}
        {errors.replyto && (
          <span className="block text-red font-thin italic">Your email does not look correct</span>
        )}
      </div>
      <div>
        <label htmlFor="msg" className="block mt-4">
          What&apos;s your project?
          <textarea
            name="msg"
            id="msg"
            cols="24"
            rows="5"
            className="w-full rounded text-contrast_dark"
            placeholder="Your Amazing Idea"
            ref={register}
          />
        </label>
      </div>
      <button
        type="submit"
        value="Send"
        className="mt-2 bg-white text-contrast_dark font-semibold p-1 w-2/6 rounded"
      >
        Submit
      </button>
    </form>
  );

  const thankYou = [
    <div className="mt-5 ml-auto mr-auto border rounded w-2/3 bg-white text-contrast_dark font-semibold text-center">
      <h3>Thank You!</h3>
      <p>Plan on hearing back soon.</p>
    </div>
  ];

  return <div> {isSent ? thankYou : form} </div>;
};

export default HookContactForm;
