import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { io, Socket } from "socket.io-client";

import Header from "../components/Header/";


import styled from 'styled-components'
import Button from '@mui/material/Button';

import style from '../styles/home.css';
import { Box, width } from "@mui/system";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { SimCard } from "@mui/icons-material";

const HeaderDiv = styled.div`
    width: 100%;
    height: 60px;
`

const BodyDiv = styled.div`
    width: 100%;
    height: 700px;
`

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const TitleSpanBlack = styled.span`
  font-family: 'Old London';
  font-size: 19pt;
  display: block;
  margin-bottom: 16px
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
    
    const socket = io();
    const navigate = useNavigate();

    const [openNew, setOpenNew] = React.useState(false);
    const handleOpenNew = () => setOpenNew(true);
    const handleCloseNew = () => setOpenNew(false);
    const [sala, setSala] = React.useState('');
    const [nickName, setnickName] = React.useState('');

    const [openOld, setOpenOld] = React.useState(false);
    const handleOpenOld = () => setOpenOld(true);
    const handleCloseOld = () => setOpenOld(false);

    const handleChangeSala = (event) => {
      setSala(event.target.value);
      console.log('Alterando a sala:', sala);

    };

    const handleChangeUser = event => {
        setnickName(event.target.value);
        console.log('Alterando o usuário:', sala);
    }

    const getInSession = () => {
        const user = nickName
        const roomName = sala
        if (user !== '' || undefined) { 
            if (roomName !== '' || undefined) {
                console.log('Deu certo, nome da sala:', roomName)
                console.log('Deu certo, nome da sala:', nickName)
                socket.emit('new-user', roomName, nickName)
                navigate('/Room')
            }
        } else {
            alert('Selecione uma sala e preencha o nickName.')
        }
    }

    const createRoom = (event) => {
        window.location.href = '/room'
    }

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
                            <Button component={Link} onClick={handleOpenOld} id="entryButton" variant="contained" >Mesa antiga</Button>
                        </ButtonOld>
                        <ButtonNew>
                            <Button component={Link} onClick={handleOpenNew} id="entryButton" variant="contained" >Nova mesa</Button>
                        </ButtonNew>
                    </ButtonsDiv>
                </Card>
            </BodyDiv>
            <Modal
                open={openOld}
                onClose={handleCloseOld}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={boxStyle}
                      component="form"
                      noValidate
                      autoComplete="off">
                    <TitleSpanBlack>
                        Mesas existentes
                    </TitleSpanBlack>
                    <TextField onChange={handleChangeUser} fullWidth id="outlined-basic" label="Nick name" variant="outlined" />
                    <FormControl fullWidth id="forms-select-control">
                        <InputLabel>Mesas</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={sala}
                            label="Sala"
                            onChange={handleChangeSala}
                        >
                        <MenuItem id="itemSelect" value={'clerigo'}>Clérigo</MenuItem>
                        <MenuItem value={'teste'}>Teste</MenuItem>
                    </Select>
                    <Button onClick={getInSession} id="buttonPrincipal">Entrar na sessão</Button>
                    </FormControl>
                </Box>
            </Modal>
            <Modal
                open={openNew}
                onClose={handleCloseNew}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={boxStyle}
                      component="form"
                      noValidate
                      autoComplete="off">
                    <TitleSpanBlack>
                        Nova sala
                    </TitleSpanBlack>
                    <TextField fullWidth id="outlined-basic" label="Nick name" variant="outlined" />
                    <FormControl fullWidth id="forms-select-control">
                        <InputLabel>Sala</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={sala}
                            label="Sala"
                            onChange={handleChangeSala}
                            id="room-list"
                        >
                        <MenuItem value={'clerigo'}>Clérigo</MenuItem>
                        <MenuItem value={'druida'}>Druida</MenuItem>
                        <MenuItem value={'paladino'}>Paladino</MenuItem>
                        </Select>
                        <Button onClick={createRoom} id="buttonPrincipal">Criar nova sala</Button>
                    </FormControl>
                </Box>
            </Modal>
        </div>
    );
}

export default Home;