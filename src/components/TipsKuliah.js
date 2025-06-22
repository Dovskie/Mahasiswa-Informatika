import React from 'react';
import Breadcrumb from './Breadcrumb';
import { Link } from 'react-router-dom';

function TipsKuliah() {
  return (
    <main className="flex-fill">
      {/* Hero Section */}
      <section
        className="hero text-center text-white"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://source.unsplash.com/1200x500/?student,success') center/cover no-repeat`,
          position: 'relative'
        }}
      >
        <div className="container py-5" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-5 fw-bold">Tips Sukses Kuliah di Informatika</h1>
          <p className="lead">Dapatkan tips dan trik untuk menaklukkan dunia perkuliahan!</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb currentPage="Tips Kuliah" />

      {/* Tips Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Tips untuk Kamu</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm hover-card text-center">
                <div className="card-body">
                  <i className="bi bi-journal-check display-4 text-success"></i>
                  <h5 className="card-title mt-3">Rajin Buat Catatan</h5>
                  <p className="card-text">Buat catatan rapi agar mudah dipelajari saat ujian dan mengerjakan tugas.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm hover-card text-center">
                <div className="card-body">
                  <i className="bi bi-clock-history display-4 text-warning"></i>
                  <h5 className="card-title mt-3">Atur Waktu dengan Baik</h5>
                  <p className="card-text">Jangan tunda-tunda tugas dan buat jadwal belajar yang teratur.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm hover-card text-center">
                <div className="card-body">
                  <i className="bi bi-people-fill display-4 text-primary"></i>
                  <h5 className="card-title mt-3">Aktif di Komunitas</h5>
                  <p className="card-text">Ikut organisasi atau komunitas untuk menambah relasi dan pengalaman.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm hover-card text-center">
                <div className="card-body">
                  <i className="bi bi-laptop display-4 text-info"></i>
                  <h5 className="card-title mt-3">Manfaatkan Teknologi</h5>
                  <p className="card-text">Gunakan aplikasi seperti Notion, Trello, atau Google Calendar untuk membantu belajar.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm hover-card text-center">
                <div className="card-body">
                  <i className="bi bi-book-half display-4 text-secondary"></i>
                  <h5 className="card-title mt-3">Baca Sumber Lain</h5>
                  <p className="card-text">Jangan hanya bergantung pada slide dosen. Cari referensi tambahan agar lebih paham.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm hover-card text-center">
                <div className="card-body">
                  <i className="bi bi-heart-pulse display-4 text-danger"></i>
                  <h5 className="card-title mt-3">Jaga Kesehatan</h5>
                  <p className="card-text">Istirahat cukup, olahraga, dan makan sehat agar tetap fokus saat kuliah.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="https://www.dicoding.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Cek Kursus Tambahan di Dicoding
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TipsKuliah;
