import styled from 'styled-components'
import { Card, Container, Heading, Text, Link, List } from '../components'
import favicon from '../assets/logos/favicon.svg'
import golfballgarageLogo from '../assets/logos/golfballgaragelogo.svg'

const ProjectLogo = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
  transition: transform ${props => props.theme.transitions.normal};

  &:hover {
    transform: scale(1.05);
  }
`

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

function Projects() {
  return (
    <Container>
      <Card>
        <Heading as="h1" variant="h1">Projects</Heading>
        <Text variant="lead">
          A collection of my projects, from personal websites to client work.
        </Text>

        <div style={{ marginTop: '2rem' }}>
          <Heading as="h2" variant="h2">Active Projects</Heading>
          <List listStyle="none" spacing="loose" style={{ marginTop: '1rem' }}>
            <li>
              <ProjectCard>
                <ProjectLogo src={favicon} alt="Personal Website Logo" />
                <Heading as="h3" variant="h3">
                  <Link href="/projects/meta">This Website</Link>
                </Heading>
                <Text variant="body">
                  The project that powers this website. Includes component library, 
                  architecture decisions, and other meta-documentation.
                </Text>
                <List listStyle="disc" spacing="normal" style={{ marginTop: '0.5rem' }}>
                  <li>
                    <Link href="/projects/meta/components">Component Library</Link>
                    <Text variant="small"> - Visual documentation of all UI components</Text>
                  </li>
                </List>
              </ProjectCard>
            </li>

            <li>
              <ProjectCard>
                <ProjectLogo src={golfballgarageLogo} alt="Golf Ball Garage Logo" />
                <Heading as="h3" variant="h3">
                  <Link href="/projects/golfballgarage">Golf Ball Garage</Link>
                </Heading>
                <Text variant="body">
                  A platform for buying and selling golf balls. Built with modern web technologies
                  and a focus on user experience.
                </Text>
                <div style={{ marginTop: '0.5rem' }}>
                  <Link href="https://golfballgarage.com" target="_blank" rel="noopener noreferrer">
                    Visit Site →
                  </Link>
                </div>
              </ProjectCard>
            </li>
          </List>
        </div>

        {/* Future sections can be added here, like:
        <div style={{ marginTop: '2rem' }}>
          <Heading as="h2" variant="h2">Past Projects</Heading>
          <List>...</List>
        </div>
        */}
      </Card>
    </Container>
  )
}

export default Projects 