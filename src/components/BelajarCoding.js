import React from 'react';
import Breadcrumb from './Breadcrumb';

function BelajarCoding() {
  return (
    <main className="flex-fill">
      {/* Hero Section */}
      <section
        className="hero d-flex align-items-center text-center text-white p-5"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://source.unsplash.com/1200x500/?programming,coding') center/cover no-repeat`,
          position: 'relative'
        }}
      >
        <div className="container" style={{ zIndex: 1 }}>
          <h1 className="display-4 fw-bold">Belajar Coding untuk Mahasiswa Informatika</h1>
          <p className="lead">Mulai perjalanan codingmu dari dasar hingga mahir!</p>
        </div>
      </section>

      {/* Breadcrumb otomatis */}
      <Breadcrumb currentPage="Belajar Coding" />

      {/* Main Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-5 text-center">Materi Belajar Coding</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card h-100 shadow-sm text-center hover-card">
                <div className="card-body">
                  <i className="bi bi-filetype-html display-4 text-danger"></i>
                  <h5 className="card-title mt-3">HTML Dasar</h5>
                  <p className="card-text">Belajar struktur dasar web dengan HTML.</p>
                  <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">Pelajari</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 shadow-sm text-center hover-card">
                <div className="card-body">
                  <i className="bi bi-filetype-css display-4 text-primary"></i>
                  <h5 className="card-title mt-3">CSS Dasar</h5>
                  <p className="card-text">Hias tampilan website dengan CSS.</p>
                  <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">Pelajari</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 shadow-sm text-center hover-card">
                <div className="card-body">
                  <i className="bi bi-bootstrap-fill display-4" style={{ color: 'purple' }}></i>
                  <h5 className="card-title mt-3">Bootstrap 5</h5>
                  <p className="card-text">Buat desain responsif dengan Bootstrap.</p>
                  <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">Pelajari</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 shadow-sm text-center hover-card">
                <div className="card-body">
                  <i className="bi bi-filetype-js display-4 text-warning"></i>
                  <h5 className="card-title mt-3">JavaScript Pemula</h5>
                  <p className="card-text">Mulai belajar logika dan interaksi web.</p>
                  <a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">Pelajari</a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg shadow-sm">
              Mulai Belajar Gratis di FreeCodeCamp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BelajarCoding;
