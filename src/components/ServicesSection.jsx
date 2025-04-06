import React from "react";

const ServicesSection = () => {
    return (
      <section className="py-16 px-6 bg-[#1c1c1c]">
      <h2 className="text-3xl font-semibold text-accent text-center mb-8">Послуги</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-lightText">
        <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-md hover:scale-105 transition">
          <span className="text-2xl">✨</span>
          <h3 className="text-xl font-bold mt-2">Портретна ретуш</h3>
          <p>Корекція шкіри, очей, волосся без втрати природності.</p>
        </div>
        <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-md hover:scale-105 transition">
          <span className="text-2xl">🕰️</span>
          <h3 className="text-xl font-bold mt-2">Реставрація фото</h3>
          <p>Відновлюю старі, пошкоджені та пожовклі знімки.</p>
        </div>
        <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-md hover:scale-105 transition">
          <span className="text-2xl">🎨</span>
          <h3 className="text-xl font-bold mt-2">Колоризація</h3>
          <p>Додаю життя до чорно-білих знімків з емоцією та кольором.</p>
        </div>
        <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-md hover:scale-105 transition">
          <span className="text-2xl">📦</span>
          <h3 className="text-xl font-bold mt-2">E-commerce ретуш</h3>
          <p>Предметна ретуш для онлайн-магазинів та маркетплейсів.</p>
        </div>
      </div>
      </section>
    );
  };
  
  export default ServicesSection;
  