import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'


import style from '../../styles/header.css';
import dice from "../../assets/Header/rpg-dice.png";


// Styled componets

const HeaderDiv = styled.header`
    width: 100%
    height: auto;
`

const Menu = styled.nav`
    width: 100%;
    height: 60px;
    // background-color: yellow;
`

const LogoDiv = styled.div`
    width: 25%;
    height: 100%;
    // background-color: pink;
    display: flex;
    flex-direction: row;
`

const DiceImgDiv = styled.div`
    width: 40%;
    height: 100%;
    // background-color: grey;
`

const DiceImg = styled.img`
    max-width: 50px;
    margin-left: 50px;
`

const TitleDiv = styled.div`
    width: 60%;
    margin-top: 15px;
    height: 50%;
    // background-color: red;
`

const TitleSpan = styled.span`
    font-family: 'Old London';
    font-size: 19pt;
`

const Line = styled.div`
    color: black;
    width: 10px;
`

function Header(props) {
    return (
        <HeaderDiv>
            <Menu>
                <LogoDiv>
                    <DiceImgDiv>
                        <DiceImg src={dice} />
                    </DiceImgDiv>
                    <TitleDiv>
                        <TitleSpan>
                            Amiguinhos medievais
                        </TitleSpan>
                    </TitleDiv>
                </LogoDiv>
                <div id="line"></div>
            </Menu>
        </HeaderDiv>
    );
}

export default Header;