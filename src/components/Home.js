import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="flex-fill">
      {/* Hero Section */}
      <section
        className="hero d-flex align-items-center text-center text-white p-5"
        style={{
          background: `url('https://source.unsplash.com/1200x500/?technology,code') center/cover no-repeat`,
          position: 'relative'
        }}
      >
        <div
          style={{
            content: '""',
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 0
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-4 fw-bold">Selamat Datang di Website Mahasiswa Informatika</h1>
          <p className="lead">Belajar. Berkarya. Berinovasi.</p>
          <a href="#fitur" className="btn btn-lg btn-light shadow-sm">Lihat Fitur</a>
        </div>
      </section>

      {/* Card Section */}
      <section id="fitur" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Fitur Unggulan</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <Link to="/belajarcoding" className="text-decoration-none">
                <div className="card h-100 shadow-sm border-0 hover-card text-center">
                  <div className="card-body">
                    <i className="bi bi-code-slash display-4 text-primary"></i>
                    <h5 className="card-title mt-3">Belajar Coding</h5>
                    <p className="card-text">Sumber dan tutorial coding untuk pemula.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/proyekmahasiswa" className="text-decoration-none">
                <div className="card h-100 shadow-sm border-0 hover-card text-center">
                  <div className="card-body">
                    <i className="bi bi-laptop display-4 text-success"></i>
                    <h5 className="card-title mt-3">Proyek Mahasiswa</h5>
                    <p className="card-text">Contoh proyek dan tugas informatika sederhana.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/tipskuliah" className="text-decoration-none">
                <div className="card h-100 shadow-sm border-0 hover-card text-center">
                  <div className="card-body">
                    <i className="bi bi-lightbulb display-4 text-warning"></i>
                    <h5 className="card-title mt-3">Tips Kuliah</h5>
                    <p className="card-text">Tips sukses kuliah di jurusan informatika.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
