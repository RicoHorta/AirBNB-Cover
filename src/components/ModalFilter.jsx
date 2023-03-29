import React from 'react'
//PriceSlider
import PriceSlider from './PriceSlider';
import ButtonGroup from './ButtonGroup';
import CardGroup from './CardGroup';

export default function ModalFilter() {
    return (
        // modal-live bootStrap
        <div className="modal fade" id="filterModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <button type="button" className="fs-6 btn-close opacity-100" data-bs-dismiss="modal" aria-label="Close"></button>
                        <h1 className="modal-title w-100 fw-bold fs-5" id="exampleModalLabel">Filtros</h1>
                    </div>
                    <div className="modal-body">
                        <section className='px-2 mb-4 border-bottom'>
                            <span className='fs-4 fw-bold'>Faixa de preço</span>
                            <p className='mb-5 text-muted'>O Preço médio por noite é R$713</p>
                            <PriceSlider min={50} max={2000} step={1} />
                        </section>
                        <section className='px-2 mb-4 border-bottom'>
                            <span className='fs-4 fw-bold'>Tipo de Lugar</span>
                            <div className='row mt-4'>
                                <div className='col-md-6'>
                                    <div className="form-check ms-3">
                                        <input className="fs-4 form-check-input" type="checkbox" value="" id="espacoInteiro" />
                                        <label className="ps-2 form-check-label" htmlFor="espacoInteiro">
                                            Espaço inteiro<br />
                                            <small className='text-muted'>Um lugar só pra voçê</small>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-check ms-3 px-3">
                                        <input className="fs-4 form-check-input" type="checkbox" value="" id="quartoInteiro" />
                                        <label className="ps-2 form-check-label" htmlFor="quartoInteiro">
                                            Quarto privativo<br />
                                            <small className='text-muted'>Seu próprio quarto em uma casa ou hotel, além de alguns espaços comuns compartilhados</small>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-6 mb-5'>
                                    <div className="form-check ms-3">
                                        <input className="fs-4 form-check-input" type="checkbox" value="" id="quartoCompartilhado" />
                                        <label className="ps-2 form-check-label" htmlFor="quartoCompartilhado">
                                            Quarto compartilhado<br />
                                            <small className='text-muted'>Um espaço para dormir e áreas comuns que podem ser compartilhadas com outras pessoas</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='px-2 mb-4 border-bottom'>
                            <span className='fs-4 fw-bold'>Quartos e Camas</span>
                            <p className='mt-3 px-1'>Quartos</p>
                            <ButtonGroup buttons={["Qualquer um", "1", "2", "3", "4", "5", "6", "7", "8+"]} />
                            <p className='mt-3 px-1'>Camas</p>
                            <ButtonGroup buttons={["Qualquer um", "1", "2", "3", "4", "5", "6", "7", "8+"]} />
                            <p className='mt-3 px-1'>Banheiros</p>
                            <ButtonGroup buttons={["Qualquer um", "1", "2", "3", "4", "5", "6", "7", "8+"]} />
                        </section>
                        <section className='px-2 mb-4 border-bottom'>
                            <span className='fs-4 fw-bold'>Tipo de propriedade</span>
                            <CardGroup
                                options={[
                                    { icon: "mdi mdi-home-outline", text: "Casa" },
                                    { icon: "mdi mdi-domain", text: "Apartamento" },
                                    { icon: "mdi mdi-home-import-outline", text: "Casa de hóspedes" },
                                    { icon: "mdi mdi-office-building-outline", text: "Hotel" },
                                ]} />

                        </section>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <a href="#" className='link-dark fw-bold ps-2'>Remover filtros</a>
                        <button type="button" className="btn btn-dark fw-bold py-3 px-4" data-bs-dismiss="modal">Mostrar X acomodações</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
