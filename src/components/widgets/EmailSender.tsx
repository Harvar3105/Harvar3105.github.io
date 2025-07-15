'use client';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailSender() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        {publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!}
      );
      alert('Mail sent!');
      form.current.reset();
    } catch (err) {
      console.error('Error:', err);
      alert('Oops, error occured');
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-md">
      <input
        type="text"
        name="from_name"
        placeholder="Jour name"
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="email"
        name="reply_to"
        placeholder="Your email"
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Your subject"
        className="border p-2 w-full rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        className="border p-2 w-full rounded h-32"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        SEND
      </button>
    </form>
  );
}
