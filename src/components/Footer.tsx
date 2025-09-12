import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: #374151;
  color: white;
  padding: 2rem 0;
  margin-top: auto;
`

const FooterContent = styled.div`
  text-align: center;
`

const Copyright = styled.p`
  margin: 0;
  opacity: 0.8;
`

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <Copyright>
            © 2024 LangA Frontend. All rights reserved.
          </Copyright>
        </FooterContent>
      </div>
    </FooterContainer>
  )
}

export default Footer
