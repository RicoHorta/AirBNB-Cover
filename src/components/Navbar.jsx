import React from 'react'
//CSS
import './css/Navbar.css';
import '../App.css';
//Imagem
import logo from '../img/logo-airbnb-Navbar.svg';

export default function Navbar() {
    return (
        <div>
            <nav className='nav-topo'>
                <div className='container-airbnb'>
                    <div className='d-flex aling-items-center col-sm-6'>
                        <img className='logo' src={logo} alt="logo do site" />
                    </div>
                    <div className='d-flex align-items-center justify-content-end col-sm-6'>
                        <a className='link-especial px-3' href="#">Anuncie seu espaço no Airbn</a>
                        <a className='icon-nav mx-2' href="#"><i className='mdi mdi-web'></i></a>
                        <div className='dropdown ms-2' >
                            <a className="button-login dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className='fs-5 mdi mdi-menu ps-2'></i>
                                <i className='fs-2 position-relative mdi mdi-account-circle pe-2'>
                                    <span className="position-absolute top-0 start-50 badge border border-light rounded-circle bg-danger p-2"><span className="visually-hidden">unread messages</span></span>
                                </i>
                            </a>

                            <ul style={{ borderRadius: '15px' }} className="dropdown-menu border-0 mt-2 py-3 shadow ">
                                <li><a className="dropdown-item px-3 p-2 fw-bold text-secondary" href="#">Cadastrar-se</a></li>
                                <li><a className="dropdown-item px-3 p-2" href="#">Entrar</a></li>
                                <li><hr className='dropdown-divider' /></li>
                                <li><a className="dropdown-item px-3 p-2" href="#">Anuncie seu espaço no Airbnb</a></li>
                                <li><a className="dropdown-item px-3 p-2" href="#">Ofereça uma experiência</a></li>
                                <li><a className="dropdown-item px-3 p-2" href="#">Ajuda</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
