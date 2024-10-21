import React from 'react';
import './styles.scss';
import Swal from 'sweetalert2';

function index() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', '94acd9a7-2e55-4e36-be3f-e800439c140f');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: 'Success!',
        text: 'Message Sent Successfully!',
        icon: 'success',
      });
    }
  };
  return (
    <>
      <div id="contact" className="contact_container">
        <div className="wrapper">
          <div className="contact_title">Get in Touch</div>
          <div
            className="contact_desc"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            Whether it's a job opportunity, or feedback on my portfolio, my
            inbox is open 😁!
          </div>
          <form
            onSubmit={onSubmit}
            className="contact_form"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <div className="contact_title1">Email Me</div>
            <input
              className="contact_input"
              placeholder="Your Email"
              name="from_email"
              required
            />
            <input
              className="contact_input"
              placeholder="Your Name"
              name="from_name"
              required
            />
            <input
              className="contact_input"
              placeholder="Subject"
              name="subject"
              required
            />
            <textarea
              className="contact_message"
              placeholder="Message"
              rows="4"
              name="message"
              required
            />
            <button
              className="form_button"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default index;
