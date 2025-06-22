import React from 'react';
import Breadcrumb from './Breadcrumb';

function Faq() {
  return (
    <main className="flex-fill">
      {/* Hero Section */}
      <section
        className="hero text-center text-white"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://source.unsplash.com/1200x500/?technology,code') center/cover no-repeat`
        }}
      >
        <div className="container py-5">
          <h1 className="display-5 fw-bold">Frequently Asked Questions (FAQ)</h1>
          <p className="lead">Dapatkan jawaban untuk pertanyaan yang sering ditanyakan</p>
        </div>
      </section>

      {/* Breadcrumb otomatis */}
      <Breadcrumb currentPage="FAQ"/>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Pertanyaan Umum</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item mb-2">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  Bagaimana cara mulai belajar coding?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Mulailah dengan belajar HTML dan CSS, lalu lanjut ke Bootstrap dan JavaScript. Kamu bisa mulai dari halaman <a href="/belajarcoding">Belajar Coding</a>.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-2">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  Apakah ada biaya untuk belajar di DOOVY?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Tidak! Semua sumber di halaman ini mengarahkan kamu ke sumber belajar coding gratis.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                  Apakah saya perlu laptop spesifikasi tinggi untuk belajar coding?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Tidak perlu. Laptop dengan spesifikasi standar sudah cukup untuk memulai belajar web programming.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5 bg-light">
        <div className="container">
          <h2 className="mb-3">Masih ada pertanyaan?</h2>
          <p>
            Kirim pertanyaan kamu ke email kami di <a href="mailto:faberpach2@gmail.com">faberpach2@gmail.com</a> atau gabung komunitas kami!
          </p>
          <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer" className="btn btn-success">
            Gabung Komunitas
          </a>
        </div>
      </section>
    </main>
  );
}

export default Faq;
