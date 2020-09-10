import React  from 'react';
import { useState, useCallback } from 'react';
import Container from './Panel.styled'
import DateRange from '../DateRange/DateRange'
import CardCustomer from '../CardCustomer/CardCustomer'
import {Row} from 'antd'

function Panel(props) {
    return (
        <Container>
        <div> 
            <div><span className="title">Ordenar por:</span>
             <button>Menor Budget </button> <button>Maior Budget </button>  <button>A-Z</button> <button>Z-A</button>
             <span className="title">Data de Registro:</span>
             <DateRange/> 
            </div>
       </div>
       <CardCustomer {...props} />

        <Row type="flex" justify="center">
        <button>Anterior </button>
        <button>Proximo</button>
        </Row>
        </Container>
    );
}

export default Panel;
