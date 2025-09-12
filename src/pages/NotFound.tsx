import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 4rem 0;
`

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  color: #e5e7eb;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`

const ErrorMessage = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
`

const ErrorDescription = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 2rem;
`

const HomeLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: #2563eb;
  }
`

const NotFound = () => {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>페이지를 찾을 수 없습니다</ErrorMessage>
      <ErrorDescription>
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </ErrorDescription>
      <HomeLink to="/">홈으로 돌아가기</HomeLink>
    </NotFoundContainer>
  )
}

export default NotFound
