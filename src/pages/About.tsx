import styled from 'styled-components'

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  color: #1f2937;
`

const Content = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  line-height: 1.8;
`

const Section = styled.section`
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #374151;
`

const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: #6b7280;
`

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`

const TechItem = styled.li`
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 0.375rem;
  text-align: center;
  font-weight: 500;
  color: #374151;
`

const About = () => {
  return (
    <AboutContainer>
      <Title>프로젝트 소개</Title>
      <Content>
        <Section>
          <SectionTitle>LangA Frontend</SectionTitle>
          <Paragraph>
            LangA Frontend는 React 18과 TypeScript를 기반으로 구축된 현대적인 웹 애플리케이션입니다. 
            백엔드와 완전히 분리된 프론트엔드 아키텍처를 채택하여 독립적인 개발과 배포가 가능합니다.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>주요 기술 스택</SectionTitle>
          <TechList>
            <TechItem>React 18</TechItem>
            <TechItem>TypeScript</TechItem>
            <TechItem>Vite</TechItem>
            <TechItem>React Router</TechItem>
            <TechItem>Styled Components</TechItem>
            <TechItem>Axios</TechItem>
            <TechItem>ESLint</TechItem>
          </TechList>
        </Section>

        <Section>
          <SectionTitle>프로젝트 구조</SectionTitle>
          <Paragraph>
            이 프로젝트는 컴포넌트 기반 아키텍처를 따르며, 재사용 가능한 컴포넌트와 
            명확한 폴더 구조를 통해 유지보수성을 극대화했습니다.
          </Paragraph>
          <Paragraph>
            - <strong>components/</strong>: 재사용 가능한 UI 컴포넌트<br/>
            - <strong>pages/</strong>: 라우트별 페이지 컴포넌트<br/>
            - <strong>hooks/</strong>: 커스텀 React 훅<br/>
            - <strong>utils/</strong>: 유틸리티 함수들<br/>
            - <strong>types/</strong>: TypeScript 타입 정의<br/>
            - <strong>services/</strong>: API 서비스 레이어
          </Paragraph>
        </Section>
      </Content>
    </AboutContainer>
  )
}

export default About
