import { useEffect, useRef, useState } from 'react'
import mailIcon from '../../assets/Icons/mail.svg'
import emailjs from '@emailjs/browser';

export default function HeroContact() {
  const [email, setEmail] = useState('')
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState<{ message: string; isError: boolean } | null>(null);

  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formStatus) {
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }
  } , [email])

  const SERVICE_ID = import.meta.env.PUBLIC_SERVICE_ID;
  const TEMPLATE_IDHero = import.meta.env.PUBLIC_TEMPLATE_ID_HERO;
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
    if (!email) {
        setFormStatus({ message: 'Please entre your mail', isError: true });
        setIsSending(false);
        return;
    }
    try {
        const result = await emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_IDHero,
            form.current,
            PUBLIC_KEY
        );
        setFormStatus({ message: 'Message sent successfully!', isError: true });
        form.current.reset();
    } catch (err) {
        setFormStatus({ message: 'Error sending the message. Please try again.', isError: true });
    } finally {
        setIsSending(false);
    }
};

  return (
    <div className='flex flex-col items-center justify-center gap-3'>
        <form onSubmit={sendEmail} ref={form} className="flex max-md:w-[80%] items-center justify-center bg-bg border-details shadow shadow-shadow border-2 rounded-full px-5 py-2 pr-2 mt-5">
            <img src={mailIcon.src} alt="mail icon" className="w-5" />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                name='mail'
                id='mail'
                aria-label='mail'
                aria-describedby='mail'
                disabled={isSending}
                required
                className="w-full focus:outline-none pl-3 pr-10"
            />
            <button className="text-sm py-2.5 px-5 hover:bg-primary-hover cursor-pointer bg-primary rounded-full shadow">
                Contact
            </button>
        </form>
        <p>{formStatus?.isError && formStatus.message}</p>
    </div>
  )
}
