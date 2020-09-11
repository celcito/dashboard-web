import React from 'react';

import Container from './CardCustomer.styled'
import {Row,Col} from 'antd'
import { useState, useEffect } from 'react';
import Customer from '../Modal/Customer/Customer'

function CardCustomer(props) {

    const [elements,setElements] = useState(props.element)
    const [visible, setVisible] = useState(false);
    const handleVisible = param => setVisible(param);

    useEffect(() => {
        setElements(props.element)
    },[props.element])

    const {email,pictures,name,age,budget}=elements
    return (
        <Container>
        <Customer
            
              visible={visible}
              handleVisible={handleVisible}
              data={elements}
              
              >

        </Customer>
            <Row  onClick={() => {handleVisible(true)}}>
                <Col  lg={2} sm={24}>
                <img className="image-avatar" src={pictures[0].url} alt="" />
                </Col>
                <Col lg={12} >
                <span className="subtitle">Nome:</span>
                <span className="">{name.first} {name.last}</span>
                <div>
                <span className="subtitle">E-mail:</span>
                {email}
                </div>
                </Col>
                <Col lg={4} >
                <span className="subtitle">Idade:</span>
                <span>{age}</span>
                <div>
                <span className="subtitle">Budget:</span>
                <span>{budget}</span>
                </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CardCustomer;