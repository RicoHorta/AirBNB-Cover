import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
// CSS
import './css/Card.css'
//Dados do Backend (simulação)
//import { acomodacoes } from '../../backend/dados.js'


//dados sendo passados pelas Props vindo de App.jsp - <Card dados={filterHouses} />
export default function Card({ dados }) {


    //Funçao que gera um num inteiro randomico para usar na distãncia 
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //Array para conter os meses abreviados
    var months = new Array(['1', 'jan'], ['2', 'fev'], ['3', 'mar'], ['4', 'abr'], ['5', 'mai'], ['6', 'jun'], ['7', 'jul'], ['8', 'ago'], ['9', 'set'], ['10', 'out'], ['11', 'nov'], ['12', 'dez']);
    //Captura a data atual
    const today = new Date();
    //Captura o mês Atual
    const currentMonth = today.getMonth() + 1;
    //Converte o numero do mês em Mês abreviado
    const nextMonth = months[currentMonth.toString()];
    // criada para animar o ícine dos favoritos (coraçãozinho)
    //ativando e desativando conforme o clique no coração
    function animar(e) {
        e.target.classList.toggle('animate')
    }
    //Função para contar e tratar as categoria vazias

    if (dados.length == 0) {
        return (
            <div style={{ paddingTop: '180px' }} className='d-flex justify-content-center align-items-center'>
                <div className='container-airbnb row'>
                    <div className='col mt-5'>
                        <div className='card text-center'>
                            <div className='card-body'>
                                No momento não há acomodação disponível nesta categoria
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div style={{ paddingTop: '180px', paddingBottom: '100px' }} className='container-fluid'>
                <div className='container-airbnb row'>
                    {
                        //dados da API, passados pelas props 
                        dados.map((acomodacao, index) => (
                            <div key={acomodacao.id} className='position-relative mt-4 col-xs-6 col-sm-4 col-md-3 col-lg-15'>
                                <div onClick={animar} className='heartAnimation position-absolute top-0 end-0'></div>
                                <Swiper
                                    pagination={true}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="img-content"
                                >
                                    {
                                        acomodacao.imagens.map((imagem, index) => (                   //classe muda deacordo com estado idClicado
                                            <SwiperSlide className='swiperImg' key={index}>
                                                <img className="img-fluid cardImage" src={imagem} />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                                {/* <img src={acomodacao.imagens[0]} className="img-fluid cardImage" /> */}

                                <p className='d-flex justify-content-between mt-3 mb-0'>
                                    <span style={{ display: 'block', maxWidth: '170px' }} className='fw-bold text-truncate'>{acomodacao.cidade}, {acomodacao.pais}</span>
                                    <span><i className='mdi mdi-star'></i> {acomodacao.nota}</span>
                                </p>
                                <p className='my-0 text-muted'>{getRandomInt(100, 800)} km de distância</p>
                                <p className='my-0 text-muted'>{getRandomInt(1, 18)}-{getRandomInt(19, 29)} de {nextMonth[1]}.</p>
                                <p><b>R${acomodacao.preco.toLocaleString('pt-BR')}</b> noite </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }


}
