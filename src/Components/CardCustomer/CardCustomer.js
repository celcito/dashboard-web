import React from 'react';
import Container from './CardCustomer.styled'
import {Row,Col} from 'antd'

function CardCustomer(props) {
    const {email,pictures,name,age,budget}=props.element
    return (
        <Container>
            <Row>
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