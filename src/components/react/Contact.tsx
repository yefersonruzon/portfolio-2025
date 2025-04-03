import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [isSending, setIsSending] = useState(false);
    const [formStatus, setFormStatus] = useState<{ message: string; isError: boolean } | null>(null);
    const form = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (formStatus) {
            setTimeout(() => {
                setFormStatus(null);
            }, 3000);
        }
    }, [formStatus]);

    const SERVICE_ID = import.meta.env.PUBLIC_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.PUBLIC_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.PUBLIC_KEY;

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        setFormStatus(null);

        if (!form.current) {
            setFormStatus({ message: 'Error: Form not found.', isError: true });
            setIsSending(false);
            return;
        }

        try {
            const result = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form.current,
                PUBLIC_KEY
            );
            setFormStatus({ message: 'Message sent successfully!', isError: false });
            form.current.reset();
        } catch (err) {
            setFormStatus({ message: 'Error sending the message. Please try again.', isError: true });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="h-fit px-20 max-lg:px-8 relative z-10 py-20 mb-20">
            <b className="font-light mt-20 text-sm border border-details px-7 py-1.5 rounded-full">Contact</b>
            <h1 className="text-3xl mb-4 max-w-xl mt-5 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, hic.</h1>
            
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
                <div className="flex gap-7 w-full max-md:flex-col">
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name" className="flex items-center">
                            <span className="text-primary mr-1 text-4xl translate-y-[0.30rem]">*</span>First name
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name"
                            placeholder="First name" 
                            className="border border-details focus:outline-none bg-bg rounded-md px-5 py-2"
                            required
                            disabled={isSending}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="lastName" className="flex items-center">
                            <span className="text-primary mr-1 text-4xl translate-y-[0.30rem]">*</span>Last name
                        </label>
                        <input 
                            type="text" 
                            name="lastName" 
                            id="lastName"
                            placeholder="Last name" 
                            className="border border-details focus:outline-none bg-bg rounded-md px-5 py-2"
                            required
                            disabled={isSending}
                        />
                    </div>
                </div>
                <div className="flex gap-7 w-full max-md:flex-col">
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="company" className="flex items-center">
                            <span className="text-primary mr-1 text-4xl translate-y-[0.30rem]">*</span>Business name
                        </label>
                        <input 
                            type="text" 
                            name="company" 
                            id="company"
                            placeholder="Business name" 
                            className="border border-details focus:outline-none bg-bg rounded-md px-5 py-2"
                            required
                            disabled={isSending}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="email" className="flex items-center">
                            <span className="text-primary mr-1 text-4xl translate-y-[0.30rem]">*</span>Email
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="example@mail.com" 
                            className="border border-details focus:outline-none bg-bg rounded-md px-5 py-2"
                            required
                            disabled={isSending}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="reason" className="flex items-center">
                        <span className="text-primary mr-1 text-4xl translate-y-[0.30rem]">*</span>Contact reason
                    </label>
                    <textarea 
                        name="reason" 
                        id="reason"
                        placeholder="Contact reason" 
                        className="border resize-none border-details focus:outline-none bg-bg rounded-md px-5 py-2 h-32"
                        required
                        disabled={isSending}
                    ></textarea>
                </div>
                <button 
                    type="submit"
                    disabled={isSending}
                    className="mt-4 text-sm py-2.5 px-5 hover:bg-primary-hover cursor-pointer bg-primary rounded-md shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    
                    {formStatus ? (
                        <span className={`${formStatus.isError ? ' text-red-700' : 'text-green-700'}`}>
                            {formStatus.message}
                        </span>
                    ) : isSending ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </section>
    );
}