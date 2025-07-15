'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import LoadingWidget from './LoadingWidget';
import { useTranslations } from 'next-intl';

export default function EmailSender() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const t = useTranslations('Contact');

  const handleReset = () => {
    form.current?.reset();
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    try {
        setIsLoading(true);
        await emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            form.current,
            {publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!}
        );
        setIsLoading(false);
        form.current.reset();
    } catch (err) {
        console.error('Error:', err);
        alert('Oops, error occured');
        setIsLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-md">
        <input
            type="text"
            name="from_name"
            placeholder={t("Form.name")}
            className="border p-2 w-full rounded"
            required
        />
        <input
            type="email"
            name="reply_to"
            placeholder={t("Form.email")}
            className="border p-2 w-full rounded"
            required
        />
        <input
            type="text"
            name="subject"
            placeholder={t("Form.subject")}
            className="border p-2 w-full rounded"
            required
        />
        <textarea
            name="message"
            placeholder={t("Form.message")}
            className="border p-2 w-full rounded h-32"
            required
        />
        <div className='flex flex-col space-y-4'>
            <button
            type="submit"
            className={ "text-white px-4 py-2 rounded " + (!isLoading ? "bg-blue-500 dark:hover:bg-blue-800 hover:bg-blue-300" : "")}
            disabled={isLoading}
            >
                {isLoading ? <LoadingWidget /> : t("Form.send")}
            </button>
            { !isLoading && 
                <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded dark:hover:bg-red-800 hover:bg-red-300"
                onClick={handleReset}
                disabled={isLoading}
                >
                    {t("Form.reset")}
                </button>
            }
        </div>
    </form>
  );
}
