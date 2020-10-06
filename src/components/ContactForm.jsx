import React from 'react';

const ContactForm = () => {
  return (
    <form action="post" className="w-full">
      <h2 className="text-center font-semibold text-lg">Request an Email</h2>
      <div>
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full rounded"
          placeHolder="Your Name"
        />
        <p className="text-red font-thin italic">Please include your name.</p>
      </div>
      <div>
        <label htmlFor="email" className="block mt-4 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full rounded"
          placeHolder="Your Email"
        />
        <p className="text-red font-thin italic">Please check your email.</p>
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
          className="w-full rounded"
          placeHolder="Your Amazing Idea"
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
