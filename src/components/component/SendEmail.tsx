"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';
import "@/app/css/SendEmail.css"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendEmail: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, company, message }),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
        toast("Email sent successfully!!")
      } else {
        console.error('Failed to send email.');
        toast("Failed to send email.")
      }
    } catch (error) {
      toast('An error occurred while sending email.')
      console.error('An error occurred while sending email:', error);
    }
    finally{
      setLoading(false);
      setUsername(''); setCompany(""); setEmail(''); setMessage('');
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleCompanyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    // <form onSubmit={handleSubmit} className='form-container' >
    //   <div className='input-container'>
    //     <RxAvatar  size={20} color='#555'/>
    //     <input
    //       type="text"
    //       id="name"
    //       value={name}
    //       onChange={handleNameChange}
    //       required
    //       placeholder='Name'
    //     />
    //   </div>
    //   <div className='input-container'>
    //     <IoMailOutline size={20} color='#555'/>
    //     <input
    //       type="email"
    //       id="email"
    //       value={email}
    //       onChange={handleEmailChange}
    //       required
    //       placeholder='Email Address'
    //     />
    //   </div>
    //   <div className='input-container'>
    //     <FiInfo  size={20} color='#555'/>
    //     <input
    //       type="text"
    //       id="company"
    //       value={company}
    //       onChange={handleCompanyChange}
    //       required
    //       placeholder='Company Name'
    //     />
    //   </div>
    //   <div className='input-container'> 
    //     <GoPencil size={20} color='#555' />
    //     <input
    //       type="text"
    //       id="username"
    //       value={username}
    //       onChange={handleUsernameChange}
    //       required
    //       placeholder='How can we help you? Feel free to get in touch!'
    //     />
    //   </div>
    //   <button type="submit" className='submit-button'>Get in Touch</button>
    // </form>
    <div className="container grid items-center place-items-center pt-10 gap-4 px-4 md:px-6">
      <ToastContainer />
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us!</h1>
      <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-4 pt-10 lg:order-last lg:mx-0">
        <div className="grid grid-cols-2 gap-4">
          <Input className="w-full" placeholder="Name" type="text" value={username} onChange={handleUsernameChange}/>
          <Input className="w-full" placeholder="Email" type="email" value={email} onChange={handleEmailChange}/>
        </div>
        <Input className="w-full" placeholder="Company" type="text" value={company} onChange={handleCompanyChange}/>
        <textarea className="min-h-[150px] w-full p-3 rounded-md message" placeholder="Message" value={message} onChange={handleMessageChange}/>
        <Button disabled={loading} className="w-full lg:w-auto" type="submit">
          {loading ? 'Sending...' : 'Contact Us'}
        </Button>
      </form>
    </div>
  );
};

export default SendEmail;
