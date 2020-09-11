import styled from "styled-components"

const Container = styled.div`
    margin: 25px 10px;
    padding: 20px;
    background: #cccccc17;
    cursor:pointer;
    -webkit-box-shadow: 0px 0px 37px -8px rgba(0,0,0,0.43);
    -moz-box-shadow: 0px 0px 37px -8px rgba(0,0,0,0.43);
    box-shadow: 0px 0px 37px -8px rgba(0,0,0,0.43);

    .image-avatar{
        width: 60px;
        height: 60px;
        overflow: hidden;
        border-radius: 50px;
    }
    .subtitle{
        color: #28a745;
        font-weight: 600;
        font-weight: bold;
        padding-right: 5px;
    }

    .shadow{
        background: #cccccc17;
        -webkit-box-shadow: 0px 0px 37px -8px rgba(0,0,0,0.43);
        -moz-box-shadow: 0px 0px 37px -8px rgba(0,0,0,0.43);
        box-shadow: 0px 0px 37px -8px rgba(0,0,0,0.43);
    }

`
export default Container