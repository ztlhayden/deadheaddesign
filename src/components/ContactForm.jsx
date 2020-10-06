import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center font-semibold text-lg">Request an Email</h2>
      <div>
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full rounded text-contrast_dark"
          placeHolder="Your Name"
          ref={register({ required: true })}
        />
        {errors.name && <p className="text-red font-thin italic">Please include your name.</p>}
      </div>
      <div>
        <label htmlFor="email" className="block mt-4 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full rounded text-contrast_dark"
          placeHolder="Your Email"
          ref={register({ required: true })}
        />
        {errors.email && <p className="text-red font-thin italic">Please check your email.</p>}
      </div>
      <div>
        <label htmlFor="body" className="block mt-4 mb-1">
          What's your project?
        </label>
        <textarea
          name="body"
          id="body"
          cols="24"
          rows="5"
          className="w-full rounded text-contrast_dark"
          placeHolder="Your Amazing Idea"
          ref={register}
        />
      </div>
      <button
        type="submit"
        className="mt-2 bg-white text-contrast_dark font-semibold p-1 w-2/6 rounded"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
