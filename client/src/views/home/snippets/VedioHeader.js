import React from 'react'
import styled from 'styled-components'
import { ExitToApp, OpenWith } from '@material-ui/icons'
import Vid from '../../../assets/vid.mp4'



const VedioHeader = () => {
    return (
        <> 
            <section className="wrapper">
                <div className="video-container">
                    <video muted autoPlay loop src={Vid}></video>
                </div>

                <div className="header-content">
                    <Logo>Unicon</Logo>
                    <h1 className="text-white">Universal University Connection</h1>
                    <p className="lead text-white">
                        Where College Students Collaborate, View There Stats, Study, And Also Ask Questions.
                    </p>
                    <ButtonContainer>
                        <Button className="mr-2">Login</Button>
                        <Button className="ml-2">Signup</Button>
                    </ButtonContainer>
                </div>
            </section>

        </>
    )
}

const Video = styled.video`
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    position: absolute;
`

const VideoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    heigth: 100%;
    overflow: hidden;
    background: #303030 url(../../../assets/cover.png) no-repeat center center/cover;
`

const Logo = styled.h2`
    font-size: 1.2rem;
    font-weight: 300;
    color: #fff;
    position: absolute;
    left: 50%;
    bottom: 90%;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`


const Button = styled.button`
    cursor: pointer;
    outline: none !important;
    border: #64b5f6 solid 2px !important;
    background: transparent;
    padding: 8px 20px;
    border-radius: 22px;
    color: #64b5f6;
    font-size: 1rem;
`

const HeaderContent = styled.div`
    z-index: 10;
`

const Wrapper = styled.section`
   position: relative;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   padding: 0 20px;
   color: #fff;
`


export default VedioHeader
