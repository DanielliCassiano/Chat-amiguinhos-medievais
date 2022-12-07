import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header/";

import rpgImage from "../assets/Room/rpg-image.jpg";

import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import style from '../styles/room.css';
import { io, Socket } from "socket.io-client";


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

const TextChat = styled.div`
   margin-top: 40px
`

const TextDivChat = styled.div`
    position: absolute;
    margin-top: 10px;
    margin-left: 30px;
    width: 85%;
    padding: 10px;
    border-radius: 15px;
    background-color: #585858;`

const TextChatUser = styled.span`
    color: #FFE4E1
`

const TextChatMsg = styled.span`
    color: white
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
    const [chat, setChat] = useState([{"user": 'system', "message": "You're join"}]);
    const [messageForm, setMessageForm] = useState('')
    const socket = io()
    const roomName = localStorage.getItem('roomName')
    const user = localStorage.getItem('nickName')

    const sendMsg = () => {
        if (messageForm != null) {
            socket.emit('new-user', roomName, user)
          
            messageForm.addEventListener('submit', e => {
              e.preventDefault()
              const message = messageForm
              Socket.emit('send-new-message', roomName, message)
              setMessageForm('')
            })
        }
    }

    socket.on('send-chat-message', function(user, msg) {
        setChat((prevState) => {
            const obj = { ...prevState };
            obj.push({"user": user,  "message": msg});
            return obj;
        });
    });

    const handleText = (e) => {
        let { value } = e.target || { value: null};
        setMessageForm(value);
    
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
                        <TextDiv>
                            <TitleSpan>
                            Bem-vindo(a) à mesa {roomName};
                            </TitleSpan>
                        </TextDiv>
                    </TitleDiv>
                    <TextChat>
                        {chat.map((value) => (
                            <>
                            <TextDivChat>
                                <TextChatUser>
                                    {value.user} -
                                </TextChatUser>
                                <TextChatMsg id="chat-area">
                                    {value.message}
                                </TextChatMsg>
                            </TextDivChat>
                            </>
                        ))}
                        </TextChat>
                    <ButtonsDiv id="submit-area">
                        <TextFieldDiv>
                            <TextField onChange={handleText} id="message-input"/>
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