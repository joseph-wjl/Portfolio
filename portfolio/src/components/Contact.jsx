import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TiLocationArrow } from 'react-icons/ti';
import Button from './Button';

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error for the field being edited
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.first_name.trim()) newErrors.first_name = 'First name is required';
    if (!form.last_name.trim()) newErrors.last_name = 'Last name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    emailjs
      .sendForm(
        'jlaudev', // EmailJS Service ID
        'template_2tjls7d', // EmailJS Template ID
        formRef.current,
        '9GbkCjXoGhLFVUaqO' // EmailJS Public Key
      )
      .then(
        () => {
          setStatus('success');
          setForm({ first_name: '', last_name: '', email: '', subject: '', message: '' });
          setTimeout(() => setStatus(''), 3000);
        },
        (error) => {
          setStatus('error');
          console.error('EmailJS error:', error);
          setTimeout(() => setStatus(''), 3000);
        }
      );
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-blue-200 flex items-center justify-center py-16">
      <div className="container mx-auto px-5 sm:px-10">
        <h2 className="special-font text-4xl sm:text-5xl font-bold text-blue-100 mb-8 text-center">
          Get In Touch
        </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="first_name" className="block text-blue-100 font-robert-regular mb-2">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-blue-200 text-blue-100 placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
            )}
          </div>
          {/* <div className="mb-4">
            <label htmlFor="Last_name" className="block text-blue-100 font-robert-regular mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-blue-200 text-blue-900 placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
            )}
          </div> */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-100 font-robert-regular mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-blue-200 text-blue-100 placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-blue-100 font-robert-regular mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-3 rounded bg-blue-200 text-blue-100 placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-blue-100 font-robert-regular mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-blue-200 text-blue-100 placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-vertical"
              rows="5"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              title="Send Message"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1 text-blue-900 hover:bg-yellow-400 transition"
            />
          </div>
          {status === 'success' && (
            <p className="text-green-500 text-center mt-4">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-center mt-4">
              Failed to send message. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}