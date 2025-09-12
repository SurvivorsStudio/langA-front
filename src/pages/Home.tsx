import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { useTheme } from '@/contexts/ThemeContext'
import { lightTheme, darkTheme } from '@/styles/theme'

const MainContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  min-height: 100vh;
`

const Header = styled.header`
  background-color: ${props => props.theme.colors.surface};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding: 1rem 0;
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${props => props.theme.gradients.primary};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`

const SearchContainer = styled.div`
  flex: 1;
  max-width: 500px;
  margin: 0 2rem;
  position: relative;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  
  &::placeholder {
    color: ${props => props.theme.colors.textMuted};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const GitHubButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  
  &:hover {
    background-color: ${props => props.theme.colors.surfaceHover};
  }
`

const UploadButton = styled.button`
  background: ${props => props.theme.gradients.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.theme.gradients.primaryHover};
  }
`

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  
  &:hover {
    background-color: ${props => props.theme.colors.surfaceHover};
  }
`

const UserProfile = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.border};
  border-radius: 50%;
  cursor: pointer;
`

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0 6rem;
  background: ${props => props.theme.gradients.hero};
`

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`

const HeroSubtitle = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  background: ${props => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroDescription = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 2rem;
  line-height: 1.6;
`

const HeroSearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const HeroSearchInput = styled.input`
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  min-width: 300px;
  
  &::placeholder {
    color: ${props => props.theme.colors.textMuted};
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`

const ExploreButton = styled.button`
  background: ${props => props.theme.gradients.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.theme.gradients.primaryHover};
  }
`

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
`

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.875rem;
`

const StatDot = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.color};
`

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`

const CategoryButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const CategoryButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.surface};
  color: ${props => props.active ? props.theme.colors.white : props.theme.colors.textSecondary};
  border: 1px solid ${props => props.active ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.primaryHover : props.theme.colors.surfaceHover};
  }
`

const FilterControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.875rem;
  cursor: pointer;
`

const Checkbox = styled.input`
  accent-color: ${props => props.theme.colors.primary};
`

const SortSelect = styled.select`
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 6px;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
`

const NodesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`

const NodeCard = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s ease;
  box-shadow: ${props => props.theme.shadows.card};
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.cardHover};
  }
`

const NodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const NodeTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin: 0;
`

const VerifiedBadge = styled.span`
  background-color: ${props => props.theme.colors.success};
  color: ${props => props.theme.colors.white};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const NodeVersion = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 500;
`

const NodeDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`

const NodeAuthor = styled.p`
  color: ${props => props.theme.colors.textMuted};
  font-size: 0.875rem;
  margin-bottom: 1rem;
`

const NodeTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`

const Tag = styled.span`
  background-color: ${props => props.theme.colors.surfaceHover};
  color: ${props => props.theme.colors.textSecondary};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
`

const NodeStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.textMuted};
  font-size: 0.875rem;
`

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const NodeFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NodeDate = styled.span`
  color: ${props => props.theme.colors.textMuted};
  font-size: 0.875rem;
`

const NodeActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

const StarButton = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.textSecondary};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  
  &:hover {
    background-color: ${props => props.theme.colors.surfaceHover};
  }
`

const DownloadButton = styled.button`
  background: ${props => props.theme.gradients.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  
  &:hover {
    background: ${props => props.theme.gradients.primaryHover};
  }
`

const LoadMoreButton = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.textSecondary};
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 auto;
  display: block;
  
  &:hover {
    background-color: ${props => props.theme.colors.surfaceHover};
  }
`

const Home = () => {
  const { theme, toggleTheme } = useTheme()
  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <StyledThemeProvider theme={currentTheme}>
      <MainContainer>
        <Header>
          <HeaderContent>
            <Logo>
              <LogoIcon>⚡</LogoIcon>
              LangA
            </Logo>
            
            <SearchContainer>
              <SearchInput placeholder="Q Search nodes..." />
            </SearchContainer>
            
            <HeaderActions>
              <GitHubButton>
                <span>📁</span>
                GitHub
              </GitHubButton>
              <UploadButton>Upload Node</UploadButton>
              <ThemeToggle onClick={toggleTheme}>
                {theme === 'light' ? '🌙' : '☀️'}
              </ThemeToggle>
              <UserProfile />
            </HeaderActions>
          </HeaderContent>
        </Header>

      <HeroSection>
        <HeroContent>
          <HeroSubtitle>LLM FRAMEWORK COMMUNITY</HeroSubtitle>
          <HeroTitle>Share & Discover AI Nodes</HeroTitle>
          <HeroDescription>
            커뮤니티가 만든 검증된 노드들을 탐색하고, 당신만의 혁신적인 노드를 공유해보세요. 
            LLM 프레임워크의 무한한 가능성을 함께 만들어갑니다.
          </HeroDescription>
          
          <HeroSearchContainer>
            <HeroSearchInput placeholder="Q 노드 검색..." />
            <ExploreButton>탐색하기</ExploreButton>
          </HeroSearchContainer>
          
          <StatsContainer>
            <StatItem>
              <StatDot color="#10b981" />
              1,247개의 검증된 노드
            </StatItem>
            <StatItem>
              <StatDot color="#8b5cf6" />
              5,890명의 개발자
            </StatItem>
            <StatItem>
              <StatDot color="#ec4899" />
              매일 새로운 노드 업데이트
            </StatItem>
          </StatsContainer>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <FilterBar>
          <CategoryButtons>
            <CategoryButton active>All</CategoryButton>
            <CategoryButton>Text Processing</CategoryButton>
            <CategoryButton>Image Generation</CategoryButton>
            <CategoryButton>Data Analysis</CategoryButton>
            <CategoryButton>API Integration</CategoryButton>
            <CategoryButton>Utilities</CategoryButton>
          </CategoryButtons>
          
          <FilterControls>
            <CheckboxLabel>
              <Checkbox type="checkbox" />
              검증된 노드만
            </CheckboxLabel>
            <SortSelect>
              <option>인기순</option>
              <option>최신순</option>
              <option>이름순</option>
            </SortSelect>
          </FilterControls>
        </FilterBar>

        <NodesGrid>
          <NodeCard>
            <NodeHeader>
              <NodeTitle>Text Summarizer Pro</NodeTitle>
              <VerifiedBadge>✓ 검증됨</VerifiedBadge>
            </NodeHeader>
            <NodeVersion>v2.1.4</NodeVersion>
            <NodeDescription>
              고급 자연어 처리 기술을 사용하여 긴 텍스트를 간결하고 정확하게 요약합니다.
            </NodeDescription>
            <NodeAuthor>by AIDevCorp</NodeAuthor>
            <NodeTags>
              <Tag>text-processing</Tag>
              <Tag>nlp</Tag>
              <Tag>summarization</Tag>
            </NodeTags>
            <NodeStats>
              <Stat>📥 1.2k</Stat>
              <Stat>⭐ 4.8</Stat>
              <Stat>👁 3.4k</Stat>
            </NodeStats>
            <NodeFooter>
              <NodeDate>2일 전</NodeDate>
              <NodeActions>
                <StarButton>☆ Star</StarButton>
                <DownloadButton>Download</DownloadButton>
              </NodeActions>
            </NodeFooter>
          </NodeCard>

          <NodeCard>
            <NodeHeader>
              <NodeTitle>Image Style Transfer</NodeTitle>
              <VerifiedBadge>✓ 검증됨</VerifiedBadge>
            </NodeHeader>
            <NodeVersion>v1.5.2</NodeVersion>
            <NodeDescription>
              AI를 활용하여 이미지의 스타일을 다른 이미지로 변환하는 고급 노드입니다.
            </NodeDescription>
            <NodeAuthor>by CreativeAI</NodeAuthor>
            <NodeTags>
              <Tag>image-processing</Tag>
              <Tag>style-transfer</Tag>
              <Tag>ai</Tag>
            </NodeTags>
            <NodeStats>
              <Stat>📥 856</Stat>
              <Stat>⭐ 4.6</Stat>
              <Stat>👁 2.1k</Stat>
            </NodeStats>
            <NodeFooter>
              <NodeDate>5일 전</NodeDate>
              <NodeActions>
                <StarButton>☆ Star</StarButton>
                <DownloadButton>Download</DownloadButton>
              </NodeActions>
            </NodeFooter>
          </NodeCard>

          <NodeCard>
            <NodeHeader>
              <NodeTitle>Data Visualizer</NodeTitle>
            </NodeHeader>
            <NodeVersion>v3.0.1</NodeVersion>
            <NodeDescription>
              복잡한 데이터를 직관적인 차트와 그래프로 변환하는 데이터 시각화 노드입니다.
            </NodeDescription>
            <NodeAuthor>by DataWiz</NodeAuthor>
            <NodeTags>
              <Tag>data-analysis</Tag>
              <Tag>visualization</Tag>
              <Tag>charts</Tag>
            </NodeTags>
            <NodeStats>
              <Stat>📥 2.1k</Stat>
              <Stat>⭐ 4.9</Stat>
              <Stat>👁 5.2k</Stat>
            </NodeStats>
            <NodeFooter>
              <NodeDate>1주 전</NodeDate>
              <NodeActions>
                <StarButton>☆ Star</StarButton>
                <DownloadButton>Download</DownloadButton>
              </NodeActions>
            </NodeFooter>
          </NodeCard>

          <NodeCard>
            <NodeHeader>
              <NodeTitle>API Gateway</NodeTitle>
              <VerifiedBadge>✓ 검증됨</VerifiedBadge>
            </NodeHeader>
            <NodeVersion>v1.2.0</NodeVersion>
            <NodeDescription>
              다양한 외부 API를 통합하고 관리하는 게이트웨이 노드입니다.
            </NodeDescription>
            <NodeAuthor>by CloudTech</NodeAuthor>
            <NodeTags>
              <Tag>api-integration</Tag>
              <Tag>gateway</Tag>
              <Tag>microservices</Tag>
            </NodeTags>
            <NodeStats>
              <Stat>📥 743</Stat>
              <Stat>⭐ 4.4</Stat>
              <Stat>👁 1.8k</Stat>
            </NodeStats>
            <NodeFooter>
              <NodeDate>3일 전</NodeDate>
              <NodeActions>
                <StarButton>☆ Star</StarButton>
                <DownloadButton>Download</DownloadButton>
              </NodeActions>
            </NodeFooter>
          </NodeCard>

          <NodeCard>
            <NodeHeader>
              <NodeTitle>Text Generator</NodeTitle>
            </NodeHeader>
            <NodeVersion>v2.3.0</NodeVersion>
            <NodeDescription>
              GPT 기반 텍스트 생성 노드로 창의적인 콘텐츠를 자동으로 생성합니다.
            </NodeDescription>
            <NodeAuthor>by GenAI</NodeAuthor>
            <NodeTags>
              <Tag>text-generation</Tag>
              <Tag>gpt</Tag>
              <Tag>ai</Tag>
            </NodeTags>
            <NodeStats>
              <Stat>📥 1.5k</Stat>
              <Stat>⭐ 4.7</Stat>
              <Stat>👁 2.9k</Stat>
            </NodeStats>
            <NodeFooter>
              <NodeDate>1주 전</NodeDate>
              <NodeActions>
                <StarButton>☆ Star</StarButton>
                <DownloadButton>Download</DownloadButton>
              </NodeActions>
            </NodeFooter>
          </NodeCard>

          <NodeCard>
            <NodeHeader>
              <NodeTitle>File Processor</NodeTitle>
              <VerifiedBadge>✓ 검증됨</VerifiedBadge>
            </NodeHeader>
            <NodeVersion>v1.8.3</NodeVersion>
            <NodeDescription>
              다양한 파일 형식을 처리하고 변환하는 유틸리티 노드입니다.
            </NodeDescription>
            <NodeAuthor>by FileMaster</NodeAuthor>
            <NodeTags>
              <Tag>utilities</Tag>
              <Tag>file-processing</Tag>
              <Tag>conversion</Tag>
            </NodeTags>
            <NodeStats>
              <Stat>📥 934</Stat>
              <Stat>⭐ 4.5</Stat>
              <Stat>👁 1.6k</Stat>
            </NodeStats>
            <NodeFooter>
              <NodeDate>4일 전</NodeDate>
              <NodeActions>
                <StarButton>☆ Star</StarButton>
                <DownloadButton>Download</DownloadButton>
              </NodeActions>
            </NodeFooter>
          </NodeCard>
        </NodesGrid>

        <LoadMoreButton>더 많은 노드 보기</LoadMoreButton>
      </ContentSection>
    </MainContainer>
    </StyledThemeProvider>
  )
}

export default Home
