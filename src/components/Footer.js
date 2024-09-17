import React from "react";

const MyFooter = () => (
  <footer className='text-center text-lg-start text-primary bg-dark bg-opacity-2'>
    <section className='border-bottom'>
      <div className='container text-center text-md-start mt-5'>
        &nbsp;
        <div className='row mt-3'>
          <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <i className='fas fa-gem me-3'></i>BlockStellart
            </h6>
            <p>
              Accede a los cursos de tecnología más novedosos y destacados del mercado.
            </p>
          </div>

          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Cursos</h6>
            <p>
              <a href='/' className='text-reset'>
                Solidity
              </a>
            </p>
            <p>
              <a href='/' className='text-reset'>
                Metaverso
              </a>
            </p>
            <p>
              <a href='/' className='text-reset'>
                Three.js
              </a>
            </p>
            <p>
              <a href='/' className='text-reset'>
                Docker
              </a>
            </p>
          </div>
          <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
            <p>
              <i className='fas fa-envelope me-3'></i>
              melvinfrancopedraza@proton.me
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className='text-center p-4 bg-dark text-white' >
      © 2022 Copyright:&nbsp;
      <a className='text-reset fw-bold text-white' href='/'>
        melvinfranco.com
      </a>
    </div>
  </footer>
);

export default MyFooter;