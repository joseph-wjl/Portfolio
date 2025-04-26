import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TiLocationArrow } from 'react-icons/ti';
import Button from './Button';
import FloatingSocials from './FloatingSocials';

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
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
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid';
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
          setForm({ name: '', email: '', subject: '', message: '' });
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
      
      <FloatingSocials />

      <div className="container mx-auto px-5 sm:px-10">
        <h2 className="special-font text-4xl sm:text-5xl font-bold text-blue-100 mb-8 text-center">
          Get In Touch
        </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto p-8"
        >
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-blue-100 font-robert-regular mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Enter Your Name'
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border-b-2 bg-blue-200 text-blue-100 placeholder-blue-100 focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-blue-100 font-robert-regular mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter Your Email Address'
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border-b-2 bg-blue-200 text-blue-100 placeholder-blue-100 focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
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
              placeholder="Got a question or a project idea? Let's talk!"
              className="w-full p-3 border-b-2 bg-blue-200 text-blue-100 placeholder-blue-100 focus:outline-none resize-none"
              rows="4"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              title="Send Message"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-blue-100 flex-center gap-1 text-black hover:bg-blue-300 transition"
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