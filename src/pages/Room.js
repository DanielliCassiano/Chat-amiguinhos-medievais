import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header/";

import rpgImage from "../assets/Room/rpg-image.jpg";

import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import style from '../styles/room.css';


const HeaderDiv = styled.div`
    width: 100%;
    height: 60px;
`

const BodyDiv = styled.div`
    width: 100%;
    height: 700px;
`

const Card = styled.div`
    margin-left: 30%;
    width: 40%;
    position: absolute;
    background-image: url(${rpgImage});
    margin-top: 40px;
    background-color: black;
    @media (max-height: 600px) {
        height: 600px;
    }
    border-radius: 10px;
    // @media (min-height: 800px) {
    //     height: 500px;
    // }
`

const TitleDiv = styled.div`
    border-radius: 10px;
    width: 100%;
    height: 10%;
    background-color: #585858;
`

const TextDiv = styled.div`
    position: absolute;
    margin-top: 10px;
    margin-left: 30%;
    background-color: #585858;`

const TitleSpan = styled.span`
    font-family: 'Old London';
    font-size: 19pt;
    color: white;
`

const ButtonsDiv = styled.div`
    border-radius: 10px;
    width: 100%;
    margin-top: 76%;
    margin-left: 0%;
    height: 12%;
    display: flex;
    flex-direction: row;
    background-color: #585858;
`

const TextFieldDiv = styled.div`
   width: 80%;
   height: 40px;
   margin-top: 15px;
   margin-left: 10px;
   border-radius: 5px;
   background-color: #FFFF;
`

const ButtonDiv = styled.div`
    width: 20%;
    height: 60px;
    margin-top: 15px;
`

function Room() {

    return (
        <div>
            <HeaderDiv>
                  {/* Incluir botão de home no header */}
                <Header/>
            </HeaderDiv>
            <BodyDiv>
                <Card>
                    <TitleDiv>
                        <TextDiv>
                            <TitleSpan>
                            Bem-vindo(a) à mesa tralala
                            </TitleSpan>
                        </TextDiv>
                    </TitleDiv>
                    <ButtonsDiv>
                        <TextFieldDiv>
                            <TextField id="textFieldMessages"  />
                        </TextFieldDiv>
                        <ButtonDiv>
                            <Button  id="sendButton" variant="contained" >Enviar</Button>
                        </ButtonDiv>
                    </ButtonsDiv>
                </Card>
            </BodyDiv>
        </div>
    );
}

export default Room;