import React from 'react';
import Container from './CardCustomer.styled'
import {Row,Col} from 'antd'

function CardCustomer(props) {
    return (
        <Container>
            <Row>
                <Col lg={2} sm={24}>
                <img className="image-avatar" src="https://picsum.photos/200/300" alt="" />
                </Col>
                <Col lg={12} >
                <span className="subtitle">Nome:</span>
                <span className="">Noaasasassme:</span>
                <div>
                <span className="subtitle">E-mail:</span>
                Noaasasassme:
                </div>
                </Col>
                <Col lg={4} >
                <span className="subtitle">Idade:</span>
                <span>24:</span>
                <div>
                <span className="subtitle">Budget:</span>
                <span>24:</span>
                </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CardCustomer;