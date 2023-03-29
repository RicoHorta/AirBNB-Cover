//Componentes para acessar a API que contém os dados na WEB e SKELETON
import { useEffect, useState } from 'react';
//Bootstrap 5.3
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
//CSS
import './App.css'
//Material Design Icons
import '@mdi/font/css/materialdesignicons.css'
//Componentes
import Navbar from './components/Navbar';
import Categorias from './components/Categorias';
import ModalFilter from './components/ModalFilter';
import Card from './components/Card';
import Skeleton from './components/Skeleton';

function App() {
  //Estado responsável por saber se está carregando os Dados da API usado na condição do Skeleton também
  const [isLoading, setLoading] = useState(true);
  //Estado que carrega a CATEGORIA (Categoria inicia com 1 - Frente pra praia)
  const [catID, setCatID] = useState(1);
  // Estado para trazer TODAS AS ACOMODAÇÕES
  const [allHouses, setAllHouses] = useState([]);
  //Estado que permite guardar as Acomodações já filtradas
  const [filterHouses, setFilterHouses] = useState([]);

  //Acontece na primeira vez que a aplicação roda
  useEffect(() => {
    //método do JS que faz a requisição http
    fetch('https://curso.programacaoweb.com.br/api-airbnb/')
      // metodo de retorno
      .then((resposta) => {
        if (resposta.ok) {
          return resposta.json();
        }
        throw new Error('Problemas com a API!');
      }).then((respostaJSON) => {
        setAllHouses(respostaJSON); //Alimentando o Array allHouses
        setLoading(false); //para que seja feita a validação lá embaixo e apareça o Skeleton)
      }).catch((error) => {
        console.log(error);
      })
  }, []);


  //Para conferir se esta puxando os dados da API
  useEffect(() => {
    //  console.log(allHouses)
    filterByID(catID);  // acrescentado depois para ver as acomodações depois de filtradas
  }, [allHouses])
  //Para conferir se esta filtrando pela categoria ID
  // useEffect(() => {
  //   console.log(filterHouses)
  // }, [])

  //funcao para que o filterByID seja filtrado por categoria

  const changeCat = (id) => {
    setCatID(id);
    filterByID(id);
  }

  //função para filtrar por categoria
  const filterByID = (id) => {
    const novaLista = allHouses.filter((item) => {
      return item.categoria === id;
    })
    //envia resultado do filtro para filterHouses por - FILTRAR POR CATEGORIAID
    setFilterHouses(novaLista);
  }
  //Cálculos e funcionamento do priceSlider no modal Filter - FILTRAR POR PREÇO

  const filterByPrice = (catID, min, max) => {
    const novaLista = allHouses.filter((item) => {
      return item.categoria === catID && item.preco >= min && item.preco <= max;
    })
    //envia resultado do filtro para filterHouses por - FILTRAR POR CATEGORIAID
    setFilterHouses(novaLista);
  }

  // Função para ressetar Filtros no modal
  const resetFilter = (id) => {
    filterByID(id);
  }

  return (
    <div >
      <Navbar />
      <Categorias changeCat={changeCat} />
      {/* //Validação para aparecer o Skeleton */}
      {
        isLoading ?
          <div style={{ paddingTop: '180px' }} className='container-airbnb row'>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
          :
          <Card dados={filterHouses} />
      }
      {/* //envia a função filterByPrice inteira para o modalFilter que recebe via props e reenvia para o PriceSlider */}
      <ModalFilter resetFilter={resetFilter} filterByPrice={filterByPrice} catID={catID} itens={filterHouses} />
    </div>
  )
}

export default App
