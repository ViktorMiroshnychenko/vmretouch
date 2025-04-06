import React from "react";

const ContactSection = () => {
    return (
      <section className="py-16 px-6 bg-[#1c1c1c] text-lightText">
        <h2 className="text-3xl font-semibold text-accent text-center mb-8">Контакти</h2>
        <form className="flex flex-col gap-4 text-left max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Ваше ім’я"
            className="p-3 bg-[#2a2a2a] border border-accent rounded text-lightText placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 bg-[#2a2a2a] border border-accent rounded text-lightText placeholder-gray-400"
          />
          <textarea
            rows={4}
            placeholder="Ваше повідомлення"
            className="p-3 bg-[#2a2a2a] border border-accent rounded text-lightText placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="bg-accent text-white py-3 px-6 rounded-full hover:bg-highlight transition"
          >
            Надіслати
          </button>
        </form>
        <p className="mt-6 text-center text-lightText">
        Або напишіть мені: <br />
        📧 <a href="mailto:vm.retouch@example.com" className="underline">vm.retouch@example.com</a> <br />
        💬 <a href="https://t.me/твоє_ім’я" target="_blank" className="underline">Telegram</a> | <a href="https://instagram.com/твій_нік" target="_blank" className="underline">Instagram</a>
        </p>

      </section>
    );
  };
  
  export default ContactSection;
  