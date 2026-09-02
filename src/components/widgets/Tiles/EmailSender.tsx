'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import LoadingWidget from '../LoadingWidget';
import { useTranslations } from 'next-intl';
import LoadingWidget from '../LoadingWidget';
import Send from '@/assets/svg/Send';

export default function EmailSender() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const t = useTranslations('Email');

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
    <form ref={form} className="space-y-stack-md relative z-10" onSubmit={sendEmail}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
        <div className="flex flex-col space-y-stack-sm">
          <label
            htmlFor="name"
            className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider"
          >
            {t("l_name")}
          </label>
          <input
            id="name"
            className="bg-surface-container-lowest border border-surface-stroke rounded-DEFAULT px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
            placeholder={t("ph_name")}
            type="text"
            required
          />
        </div>
        <div className="flex flex-col space-y-stack-sm">
          <label
            htmlFor="email"
            className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider"
          >
            {t("l_email")}
          </label>
          <input
            id="email"
            className="bg-surface-container-lowest border border-surface-stroke rounded-DEFAULT px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
            placeholder={t("ph_email")}
            type="email"
            required
          />
        </div>
      </div>
      <div className="flex flex-col space-y-stack-sm">
        <label
          htmlFor="subject"
          className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider"
        >
          {t("l_subject")}
        </label>
        <input
          id="subject"
          className="bg-surface-container-lowest border border-surface-stroke rounded-DEFAULT px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
          placeholder={t("ph_subject")}
          type="text"
          required
        />
        <div className="flex flex-col space-y-stack-sm">
          <label
            htmlFor="message"
            className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider"
          >
            {t("l_message")}
          </label>
          <textarea
            id="message"
            className="bg-surface-container-lowest border border-surface-stroke rounded-DEFAULT px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all resize-none"
            placeholder={t("ph_message")}
            rows={5}
            required
          />
        </div>
        <button
          className="w-full bg-primary-container text-on-primary-container font-label-mono text-label-mono px-6 py-4 rounded-DEFAULT mt-stack-md flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(160,120,255,0.4)] transition-all"
          type="submit"
        >
          { isLoading
            ? <LoadingWidget />
            : <span className='flex items-center'>
              <b>{t("send")}</b>
              <Send className='ml-2' height="30px" width="30px" />
            </span>
          }
        </button>
      </div>
    </form>
  );
}
