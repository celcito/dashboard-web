import React  from 'react';
import { useState, useEffect } from 'react';
import Container from './Panel.styled'
import DateRange from '../DateRange/DateRange'
import CardCustomer from '../CardCustomer/CardCustomer'
import {searchCustomers} from '../../Service/DashboardService'
import {Row} from 'antd'
import { v4 as uuidv4 } from 'uuid';
import {compare} from '../../Utils/Utils'

function Panel(props) {

    const [data, setData] = useState([]);
    const [page,setPage] = useState(1);
    const [pages,setPages] = useState()
    const prevButton =  page>1 ?  <button   onClick={() => {prev();}}>Anterior </button>:''
    const nextButton =  page<pages ?<button onClick={() => {next();}} >Proximo</button>:''
    const prev=()=>setPage(page-1)
    const next=()=>{
        setPage(page+1)
    }


    const sortOrderByName=()=> {
        setData (data.sort(compare))
        console.log(data)
    }

      useEffect(() => {
        async function fetchData() {
          const response = await searchCustomers(page);
          setPages(response.pages)
          setData(response.docs)
        }
        fetchData();
      }, [page]); 

      
     return (
        <Container >
        <div> 
            <div><span className="title">Ordenar por:</span>
             <button>Menor Budget </button> <button>Maior Budget </button>  <button onClick={() => {sortOrderByName();}} >A-Z</button> <button>Z-A</button>
             <span className="title">Data de Registro:</span>
             <DateRange/> 
            </div>
       </div>
        {data.map((element ,index) => {
            return<CardCustomer element={element} key={uuidv4()} />
        })};

        <Row type="flex" justify="center">
        {prevButton}
        {nextButton}
        </Row>
        </Container>
    );
}

export default Panel;
