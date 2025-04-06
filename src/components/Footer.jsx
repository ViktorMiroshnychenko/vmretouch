import React from "react";

const Footer = () => {
    return (
      <footer className="bg-[#121212] text-lightText text-center py-6 text-sm">
        <p>© {new Date().getFullYear()} Віктор Мірошниченко — Ретуш фотографій</p>
        <p className="mt-2">
          <a href="mailto:vm.retouch@example.com" className="underline">vm.retouch@example.com</a> |
          <a href="https://t.me/твій_нік" className="underline ml-2" target="_blank">Telegram</a> |
          <a href="https://instagram.com/твій_нік" className="underline ml-2" target="_blank">Instagram</a>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  