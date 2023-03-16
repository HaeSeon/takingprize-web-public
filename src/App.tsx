import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { getUser } from './modules/auth';
import { Header } from './components/layout/Header'
import { getCookie } from './utils/cookie';
import { useAuthContext } from "./context/AuthContext";
import { Router } from "./Router";
import styled from "styled-components";

// const BASE_URL = "https://api.takingprize.com"
const BASE_URL = "http://localhost:3000"

axios.defaults.baseURL = BASE_URL

const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 480px;
  min-width: 340px;
  width: 100%;
`

const ContentContainer = styled.div`
  flex: auto;
`

function App() {
  const { setUser } = useAuthContext()

  useEffect(() => {
    const cookie = getCookie("accessJwtToken")
    if (cookie !== undefined) {
      getUser().then(setUser)
    }
  }, [])

  return (
    <div className='App'>
      <Container>
        <Header />
        <ContentContainer>
          <Router />
        </ContentContainer>
      </Container>
    </div>
  )
}


export default App