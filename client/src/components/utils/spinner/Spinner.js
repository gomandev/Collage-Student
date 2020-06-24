import React from 'react'
import styled from 'styled-components'
import { Book } from '@material-ui/icons'

const Spinner = () => {
  return (
    <LoaderWrapper>
      <Book fontSize="large" />
    </LoaderWrapper>
  )
}

const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #64b5f6 !important;
`

export default Spinner
