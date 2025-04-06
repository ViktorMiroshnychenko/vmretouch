import React from "react";

const GallerySection = () => {
    return (
      <section className="py-16 px-6 bg-background text-lightText">
        <h2 className="text-3xl font-semibold text-accent text-center mb-8">Галерея</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <img
            src="/images/work1.jpg"
            alt="Before/After 1"
            className="rounded-lg hover:scale-105 transition shadow-md"
          />
          <img
            src="/images/work2.jpg"
            alt="Before/After 2"
            className="rounded-lg hover:scale-105 transition shadow-md"
          />
          <img
            src="/images/work3.jpg"
            alt="Before/After 3"
            className="rounded-lg hover:scale-105 transition shadow-md"
          />
        </div>
        <div className="text-center mt-10">
          <a
            href="/portfolio.pdf"
            download
            className="inline-block bg-highlight hover:bg-accent text-white font-semibold px-6 py-3 rounded-full transition"
          >
            📄 Завантажити повне портфоліо (PDF)
          </a>
        </div>
      </section>
    );
  };
  
  export default GallerySection;
  