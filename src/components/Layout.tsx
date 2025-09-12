import { ReactNode } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
  padding: 2rem 0;
`

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <div className="container">
          {children}
        </div>
      </Main>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
