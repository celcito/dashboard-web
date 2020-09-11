import React from 'react';
import {ContainerModal} from './Customer.styled'
import Container from '../../CardCustomer/CardCustomer.styled'
import {Row,Col} from 'antd'

function Customer({visible,handleVisible,data}) {
    const {email,pictures,about,phone,address,contactTimeline,company,name,age,budget}=data
    return (
        <ContainerModal    
        footer={null}
        title="Informações do Cliente"
        visible={visible}
        onCancel={() => handleVisible(false)}
        destroyOnClose={true}
        width={1000}
        >
            <Container>
            <Row>
                <Col lg={10} >
                <span className="subtitle">Nome:</span>
                <span className="">{name.first} {name.last}</span>
                <div>
                <span className="subtitle">E-mail:</span>
                {email}

                </div>
                <div>
                <span className="subtitle">Company:</span>
                <span>{company}</span>
                </div>
                </Col>
                <Col lg={10} >
                <span className="subtitle">Idade:</span>
                <span>{age}</span>
                <div>
                <span className="subtitle">Budget:</span>
                <span>{budget}</span>
                </div>
                <div>
                <span className="subtitle">Telefone:</span>
                <span>{phone}</span>
                </div>
                </Col>
            </Row>
            <Row  style={{    marginTop: '35px'}} type="flex" justify="center">    <span  className="subtitle text-center">about:</span>
                <span>{about}</span></Row>
            </Container>
            {contactTimeline.map((element ,index) => {
                return<Row className ="rowCustom" offset={1} key={index}> <p>Broker : {element.broker}</p> </Row>
            })};

        </ContainerModal>
    );
}

export default Customer;