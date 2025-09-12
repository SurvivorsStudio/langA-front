import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #1f2937;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  
  &:hover {
    color: #60a5fa;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease-in-out;
  
  &:hover {
    color: #60a5fa;
  }
  
  &.active {
    color: #60a5fa;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <Nav>
          <Logo to="/">LangA</Logo>
          <NavLinks>
            <NavLink to="/">홈</NavLink>
            <NavLink to="/about">소개</NavLink>
          </NavLinks>
        </Nav>
      </div>
    </HeaderContainer>
  )
}

export default Header
