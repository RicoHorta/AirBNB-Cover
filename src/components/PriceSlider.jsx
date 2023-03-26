import React from 'react'
// CSS
import './css/PriceSlider.css'
import { useState, useEffect } from 'react';

export default function PriceSlider(props) {

    // useState - variáveis que recebem as props passadas pelo Modal/PriceSlider progress para mover as bolinhas do slider
    // O controle do movimento é feito pelo CSS .slider .progress
    const [min, setMin] = useState(props.min);
    const [max, setMax] = useState(props.max);
    // useState - valores definido para poder movimentar a barra progress do slider
    const [left, setLeft] = useState('0%');
    const [right, setRight] = useState('0%');

    //para que a posição do botao Min altere conforme o valor da barra de progresso
    function ChangRangeMin(e) {
        // impede que o botão de minimo ultrapasse o de máximo
        if ((parseInt(e.target.value) - max) >= -(props.step)) {
            //console.log('limite minimo alcançado');
        } else {
            setMin(parseInt(e.target.value)); //pega o target.value do evento onChange(e) e coloca como setMin (minimo no momento)
            //console.log(e.target.value);
            //para que a barra deslise conforme a bolinha minimo
            if (min == props.min) {
                setLeft("0%");
            } else {
                var totalBarra = props.max - props.min; //2000 - 50 = 1950 (Escopo do movimento da barra)
                var qtsSteps = min - props.min; // Num Steps = Valor atribuído pelo usuário - 50
                //menor / maior * 100
                setLeft(((qtsSteps / totalBarra) * 100) + "%");
            }
        }
    }
    // Efeito colateral se o que for modificado for o [min] repara lá embaixo
    useEffect(() => {
        if (min == props.min) {
            //seta o valor inicial R$50 na caixa do valor Mínimo R$ do Modal
            document.getElementById('inputMin').value = props.min;
        } else {
            //se não, recebe o valor que recebeu do estado(e) onChange
            document.getElementById('inputMin').value = min;
        }
    }, [min]);

    function ChangRangeMax(e) {
        if ((parseInt(e.target.value) - min) <= (props.step)) {
            //console.log('limite máximo alcançado');
        } else {
            setMax(parseInt(e.target.value));
            if (max == props.max) {
                setRight("0%");
            } else {
                var totalBarra = props.max - props.min;
                var qtsSteps = props.max - max;

                setRight(((qtsSteps * 100) / totalBarra) + "%");
            }
        }
    }

    useEffect(() => {
        if (max == props.max) {
            document.getElementById('inputMax').value = props.max + "+";
        } else {
            document.getElementById('inputMax').value = max;
        }
    }, [max]);

    //função de validação nos dados min e max em R$

    function validation(e) {
        //Pegar campo inputMin e põe na variável
        let inputMin = document.getElementById('inputMin');
        let inputMax = document.getElementById('inputMax');
        //Pegar o valor do campo Intup R$ vindo do evento onBlur (sair de Foco)
        let valor = parseInt(e.target.value);
        //verifica se é InputMin;
        if (e.target.id == 'inputMin') {
            if (e.target.value == '' || e.target.value == null || e.target.value < props.min) {
                setMin(props.min); //Se for nulo ou vazio, R$50
                setLeft('0%'); //barra de progress esquerda 0
                inputMin.value = props.min; //atribui o min vindo do props R$50
            } else {
                //setLeft(((qtsSteps / totalBarra) * 100) + "%");
                if (valor >= max) {
                    let corrige = max - props.step;
                    setMin(corrige);
                    //Calcula a % para movimentar a barra
                    var totalBarra = props.max - props.min;
                    var qtsSteps = valor - props.min;
                    setLeft(((qtsSteps / totalBarra) * 100) + "%");
                    inputMin.value = corrige;
                } else {
                    setMin(valor); //Tudo certo
                    //Mover a Barra
                    var totalBarra = props.max - props.min;
                    var qtsSteps = valor - props.min;
                    setLeft(((qtsSteps / totalBarra) * 100) + "%");
                }
            }
        } else {
            //se valor digitado > máximo permitido R$2000
            if (e.target.value == "" || e.target.value == null || e.target.value > props.max) {
                //setar para max permitido
                setMax(props.max);
                setRight('0%');
                //Mudar o campo para o Máx +
                inputMax.value = props.max + '+';
            } else {
                //Valor digitado é válido e menor que o máximo permitido
                if (e.target.value <= min) {
                    let corrige = min + props.step;
                    setMax(corrige);
                    //Calcula a % para movimentar a barra
                    var totalBarra = props.max - props.min;
                    var qtsSteps = props.max - valor;
                    setRight(((qtsSteps / totalBarra) * 100) + "%");
                    inputMax.value = corrige;
                } else {
                    setMax(valor); //Tudo certo
                    //Mover a Barra
                    var totalBarra = props.max - props.min;
                    var qtsSteps = props.max - valor;
                    setRight(((qtsSteps / totalBarra) * 100) + "%");
                }
            }
        }
    }

    //funçao para ignorar a digitação de letras nos inputs min e max
    function soNumero(e) {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    }

    return (
        <div>
            <div className='slider'>
                <div style={{ left: left, right: right }} className='progress'></div>
            </div>
            <div className='range-input'>
                <input id='rangeMin' onChange={ChangRangeMin} type='range' min={props.min} max={props.max} value={min} step={props.step} />
                <input id='rangeMax' onChange={ChangRangeMax} type='range' min={props.min} max={props.max} value={max} step={props.step} />
            </div>
            <dir className="row mt-4 me-4">
                <div className='col'>
                    <label htmlFor="">preço mínimo</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">R$</span>
                        <input id='inputMin' onBlur={validation} onKeyDown={(e) => { (e.key == "Enter" ? validacao(e) : soNumero(e)) }} type="text" className="form-control" placeholder="Min" />
                    </div>
                </div>
                <div className='col '>
                    <label htmlFor="">preço máximo</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">R$</span>
                        <input id='inputMax' onBlur={validation} onKeyDown={(e) => { (e.key == "Enter" ? validacao(e) : soNumero(e)) }} type="text" className="form-control" placeholder="Max" />
                    </div>
                </div>
            </dir>
        </div>
    )
}
