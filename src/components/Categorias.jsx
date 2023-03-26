
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

// CSS
import './css/Categorias.css'

//Dados das Categorias
import { categorias } from '../../backend/dados';

// USE STATE
import { useState } from "react";

import React from 'react'

export default function Categorias() {

    //Usamos o UseState para que a primeira categoria já inicialize active
    const [idClicado, setIdClicado] = useState(1);
    // função para selecionar a categoria
    const handleClick = (e, id) => {
        setIdClicado(id)
    }

    return (
        <div className='pt-3 container-fluid d-flex align-items-center justify-content-between'>
            <div className='container-airbnb d-flex align-items-center justify-content-between row'>
                <div className='col-sm-11'>
                    <Swiper
                        slidesPerView={14}
                        slidesPerGroup={13}
                        spaceBetween={7}
                        pagination={false}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            categorias.map((dados, index) => (                   //classe muda deacordo com estado idClicado
                                <SwiperSlide
                                    key={dados.id}
                                    virtualIndex={index}
                                    className={dados.id === idClicado ? 'active' : ''}
                                    // evento onClique pega o evento clicado envia p/ função handleClick
                                    onClick={(e) => handleClick(e, dados.id)}
                                >

                                    <img className="mb-2" src={dados.imagem} />
                                    <span>{dados.titulo}</span>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className='col-sm-1'>
                    <button className="btn btn-filtro d-flex float-end "
                        data-bs-toggle='modal' data-bs-target='#filterModal'>
                        <i className="mdi mdi-tune-variant me-2 mt-2"></i>
                        <div className="d-flex float-end mt-2"  ><span className="align-middle">Filtros</span></div>
                    </button>
                </div>
            </div>
        </div>

    )
}
