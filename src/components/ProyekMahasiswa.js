import React from 'react';
import Breadcrumb from './Breadcrumb';

function ProyekMahasiswa() {
  return (
    <main className="flex-fill">
      {/* Hero Section */}
      <section
        className="hero text-center text-white"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://source.unsplash.com/1200x500/?project,code') center/cover no-repeat`
        }}
      >
        <div className="container py-5">
          <h1 className="display-5 fw-bold">Proyek Mahasiswa Informatika</h1>
          <p className="lead">Kumpulan contoh proyek sederhana untuk inspirasi dan latihan!</p>
        </div>
      </section>

      {/* Breadcrumb otomatis */}
      <Breadcrumb currentPage="Proyek Mahasiswa" />

      {/* Proyek Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Contoh Proyek</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm hover-card">
                <div className="card-body text-center">
                  <i className="bi bi-person-badge display-4 text-primary"></i>
                  <h5 className="card-title mt-3">Website Portofolio</h5>
                  <p className="card-text">Website sederhana untuk menampilkan profil dan karya mahasiswa.</p>
                  <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">Lihat Contoh</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm hover-card">
                <div className="card-body text-center">
                  <i className="bi bi-calculator display-4 text-success"></i>
                  <h5 className="card-title mt-3">Aplikasi Kalkulator</h5>
                  <p className="card-text">Aplikasi web kalkulator sederhana menggunakan HTML, CSS, dan JavaScript.</p>
                  <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">Lihat Contoh</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm hover-card">
                <div className="card-body text-center">
                  <i className="bi bi-list-check display-4 text-warning"></i>
                  <h5 className="card-title mt-3">To-Do List</h5>
                  <p className="card-text">Aplikasi daftar tugas untuk mengelola pekerjaan harian.</p>
                  <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">Lihat Contoh</a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Jelajahi Proyek Lain di GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProyekMahasiswa;
