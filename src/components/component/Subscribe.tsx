"use client"
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { ChangeEvent, useState } from "react";

// const Subscribe: React.FC = () => {
//     const [email, setEmail] = useState<string>("");

//     const handleSubmit = async (event:any) => {
//         event.preventDefault();
//         console.log( email );

//         try {
//             const response = await fetch('/api/subscribe', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email }),
//             });

//             if (response.ok) {
//                 console.log('Email sent successfully!');
//             } else {
//                 console.error('Failed to send email.');
//             }
//         } catch (error) {
//             console.error('An error occurred while sending email:', error);
//         }
//     };

//     const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setEmail(e.target.value);
//     }

//     return (
//         <div className="mx-auto w-full max-w-[600px]">
//             <form onSubmit={handleSubmit} className="flex w-full max-w-sm mx-auto items-center gap-2">
//                 <Input placeholder="Enter your email" required type="email" value={email} onChange={handleEmailChange} />
//                 <Button type="submit">Subscribe</Button>
//             </form>
//             <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Sign up to receive updates. No spam.</p>
//         </div>
//     )
// }

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ChangeEvent, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Subscribe: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                console.log("sent successfully");
                toast('Email sent successfully!');
            } else {
                console.log("Failed to send email");
                toast.error('Failed to send email.');
            }
        } catch (error) {
            console.error('An error occurred while sending email:', error);
            toast.error('An error occurred while sending email.');
        } finally {
            setLoading(false);
            setEmail('');
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    return (
        <div className="mx-auto w-full max-w-[600px]">
            <ToastContainer />
            <form onSubmit={handleSubmit} className="flex w-full max-w-sm mx-auto items-center gap-2">
                <Input placeholder="Enter your email" required type="email" value={email} onChange={handleEmailChange} />
                <Button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Subscribe'}</Button>
            </form>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Sign up to receive updates. No spam.</p>
        </div>
    )
}

export default Subscribe;