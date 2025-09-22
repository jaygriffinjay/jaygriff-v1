import styled from 'styled-components'
import { Heading, Text, Link, List } from '../components'
import favicon from '../assets/logos/favicon.svg'
import golfballgarageLogo from '../assets/logos/golfballgaragelogo.svg'
import locusLogo from '../assets/logos/locuslogo.png'

const PageContent = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`

const ProjectLogo = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
  transition: transform ${props => props.theme.transitions.normal};

  &:hover {
    transform: scale(1.05);
  }
`

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
  border-bottom: 1px solid ${props => props.theme.colors.border};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`

function Projects() {
  return (
    <PageContent>
      <Heading as="h1" variant="h1">Projects</Heading>
        <Text variant="lead">
          A collection of my projects, from personal websites to client work.
        </Text>

        <div style={{ marginTop: '2rem' }}>
          <List listStyle="none" spacing="loose" style={{ marginTop: '1rem' }}>
            <li>
              <ProjectSection>
                <ProjectLogo src={favicon} alt="Personal Website Logo" />
                <Heading as="h3" variant="h3">
                  <Link href="/projects/thiswebsite">jaygriff.com</Link>
                </Heading>
                <Text variant="body">
                  The project that powers this website.
                </Text>
              </ProjectSection>
            </li>

            <li>
              <ProjectSection>
                <ProjectLogo src={golfballgarageLogo} alt="Golf Ball Garage Logo" />
                <Heading as="h3" variant="h3">
                  <Link href="/projects/golfballgarage">Golf Ball Garage</Link>
                </Heading>
                <Text variant="body">
                  A website for buying pre-owned golf balls!
                </Text>
                <div style={{ marginTop: '0.5rem' }}>
                  <Link href="https://golfballgarage.com" target="_blank" rel="noopener noreferrer">
                    Visit Site →
                  </Link>
                </div>
              </ProjectSection>
            </li>
            <li>
              <ProjectSection>
                <ProjectLogo src={locusLogo} alt="Locus Logo" />
                <Heading as="h3" variant="h3">
                  <Link href="/projects/locus">Locus</Link>
                </Heading>
                <Text variant="body">
                  A high-performance bookmark finder and launcher for Chrome.
                </Text>
                <div style={{ marginTop: '0.5rem' }}>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    View on Chrome Web Store →
                  </Link>
                </div>
              </ProjectSection>
            </li>
          </List>
        </div>

        {/* Future sections can be added here, like:
        <div style={{ marginTop: '2rem' }}>
          <Heading as="h2" variant="h2">Past Projects</Heading>
          <List>...</List>
        </div>
        */}
      </PageContent>
    )
}

export default Projects 