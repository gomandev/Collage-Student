import React from 'react'
import styled from 'styled-components'
import Header from './snippets/VedioHeader'

const Home = () => {
  return (
    <>
      <Header />
    </>
  )
}
const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`

const Logo = styled.a`
  margin-top: 20px;
  margin-Left: 210px0px;
  font-size: 1.3rem;
  color: #202020;
  text-decoration: none;
  text-center;

`

const LinkWrapper = styled.div`
  padding: 15px;
  font-size: 1rem;
  display: flex;
`

const Box = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid #999;
  margin: auto;
  margin-top: 200px;
  padding: 0 20px;
`

const SidePanel = styled.div`
  flex: 1;
  background: #eeeeee;
  width: 100%;
  height: 100vh;
  positon: fixed !important;
  top: 0;
  left: 0;
  border-right: 1px solid #999;
  // margin-right: 100px;
`

const ContentPanel = styled.div`
  width: 100%;
  background: #eeeeee;
  font-size: 1rem;
  flex: 5;
`

export default Home
