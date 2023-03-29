
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

//categoria recebida via props de App <Categorias changeCat={changeCat} />
export default function Categorias({ changeCat }) {

    //Usamos o UseState para que a primeira categoria já inicialize active
    const [idClicado, setIdClicado] = useState(1);
    // função para selecionar a categoria
    const handleClick = (e, id) => {
        setIdClicado(id);
        changeCat(id); //altera a categoria recebida via props de App <Categorias changeCat={changeCat} />
    }

    return (
        <div style={{ position: 'fixed', top: 0, marginTop: '80px', zIndex: 998 }} className='bg-white pt-2 container-fluid d-flex justify-content-between align-items-center'>
            <div className='container-airbnb d-flex align-items-center justify-content-between row'>
                <div className='col-sm-11'>
                    <Swiper
                        // slidesPerView={14}
                        // slidesPerGroup={13}
                        // spaceBetween={7}
                        breakpoints={{
                            100: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                                spaceBetween: 1
                            },
                            //JANELA MAIOR QUE 576 (sm)
                            576: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                spaceBetween: 4
                            },
                            //JANELA MAIOR QUE 768 (md)
                            768: {
                                slidesPerView: 6,
                                slidesPerGroup: 6,
                                spaceBetween: 7
                            },
                            //JANELA MAIOR QUE 1200 (lg)
                            992: {
                                slidesPerView: 8,
                                slidesPerGroup: 8,
                                spaceBetween: 7
                            },
                            //JANELA MAIOR QUE 1200 (XL)
                            1200: {
                                slidesPerView: 8,
                                slidesPerGroup: 8,
                                spaceBetween: 7
                            },
                            //JANELA MAIOR QUE 1400
                            1400: {
                                slidesPerView: 14,
                                slidesPerGroup: 10,
                                spaceBetween: 7
                            },
                            //JANELA MAIOR QUE >=1600 (xxl)
                            1600: {
                                slidesPerView: 14,
                                slidesPerGroup: 13,
                                spaceBetween: 7
                            }
                        }}
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
                    <button className="d-none d-sm-flex d-lg-none justify-content-center btn btn-filtro float-end "
                        data-bs-toggle='modal' data-bs-target='#filterModal'>
                        <i className="mdi mdi-tune-variant me-2 mt-2"></i>
                        {/* <div className="d-flex float-end mt-2"  ><span className="align-middle"></span></div> */}
                    </button>
                    <button className="d-none d-lg-flex btn btn-filtro d-flex float-end "
                        data-bs-toggle='modal' data-bs-target='#filterModal'>
                        <i className="mdi mdi-tune-variant me-2 mt-2"></i>
                        <div className="d-flex float-end mt-2"  ><span className="align-middle">Filtros</span></div>
                    </button>
                </div>
            </div>
        </div>

    )
}
