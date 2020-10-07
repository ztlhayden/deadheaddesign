import React from 'react';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ''
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <form onSubmit={this.submitForm} action="https://formspree.io/f/xyybkpol" method="POST">
        <div>
          <label htmlFor="name" className="block">
            Name
            <input
              type="text"
              name="name"
              id="name"
              className="w-full rounded text-contrast_dark"
              placeholder="Your Name"
              required="true"
            />
          </label>
          <p className="text-red font-thin italic">Please include your name.</p>
        </div>
        <div>
          <label htmlFor="email" className="block mt-4">
            Email
            <input
              type="email"
              name="_replyto"
              id="email"
              className="w-full rounded text-contrast_dark"
              placeholder="Your Email"
              required="true"
            />
          </label>
          <p className="text-red font-thin italic">Please check your email.</p>
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
            />
          </label>
        </div>
        <input className="hidden" type="text" name="_check" id="_check" />

        {status === 'SUCCESS' ? (
          <p>Thanks!</p>
        ) : (
          <button
            type="submit"
            value="Send"
            className="mt-2 bg-white text-contrast_dark font-semibold p-1 w-2/6 rounded"
          >
            Submit
          </button>
        )}
        {status === 'ERROR' && <p>Ooops! There was an error.</p>}
      </form>
    );
  }
}
