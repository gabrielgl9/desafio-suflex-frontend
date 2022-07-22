import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Header, Menu } from '../../components'
import { API_RICK_AND_MORTY } from '../../services'
import { Content } from './styles'

const Login = () => {
  return (
    <>
      <Menu></Menu>
      <Container>
        <Header>
          <h4>Faça seu</h4>
          <h1>Login</h1>
          <p> E aproveite todas funcionalidades do portal</p>
        </Header>
        <Content></Content>
      </Container>
    </>
  )
}

export default Login
