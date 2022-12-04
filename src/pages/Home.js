import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header/";


import styled from 'styled-components'
import Button from '@mui/material/Button';

import style from '../styles/home.css';


const HeaderDiv = styled.div`
    width: 100%;
    height: 60px;
`

const BodyDiv = styled.div`
    width: 100%;
    height: 700px;
`

const Card = styled.div`
    margin-left: 20%;
    width: 60%;
    position: absolute;
    height: 500px;
    margin-top: 80px;
    background-color: #585858;
    border-radius: 10px;
`

const TitleDiv = styled.div`
    width: 60%;
    margin-top: 180px;
    margin-left: 30%;
    height: 10%;
`

const TitleSpan = styled.span`
    font-family: 'Old London';
    font-size: 19pt;
    color: white;
`

const ButtonsDiv = styled.div`
    width: 60%;
    margin-top: 40px;
    margin-left: 42%;
    height: 50%;
`

const ButtonOld = styled.div`
   width: 200px;
   height: 60px;
`

const ButtonNew = styled.div`
    width: 200px;
    height: 60px;
    margin-left: 5px;
`

function Home() {

    return (
        <div>
            <HeaderDiv>
                  {/* Incluir botão de home no header */}
                <Header/>
            </HeaderDiv>
            <BodyDiv>
                <Card>
                    <TitleDiv>
                        <TitleSpan>
                            Selecione uma das opções para começar
                        </TitleSpan>
                    </TitleDiv>
                    <ButtonsDiv>
                        {/* Controlar as mesas antigas através de uma modal, nela irá listar todas as salas já criadas, ao clicar em uma, entrará em uma sala já existente */}
                        <ButtonOld>
                            <Button component={Link} to="/Room" id="entryButton" variant="contained" >Mesa antiga</Button>
                        </ButtonOld>
                        <ButtonNew>
                            <Button component={Link} to="/Room" id="entryButton" variant="contained" >Nova mesa</Button>
                        </ButtonNew>
                    </ButtonsDiv>
                </Card>
            </BodyDiv>
        </div>
    );
}

export default Home;