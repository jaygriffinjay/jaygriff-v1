import styled from 'styled-components'
import { Heading, Text, Link, List } from '../components'
import golfballgarageLogo from '../assets/logos/golfballgaragelogo.svg'

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

function GolfBallGarage() {
  return (
    <PageContent>
      <Heading as="h1" variant="h1">Golf Ball Garage</Heading>
      <ProjectLogo src={golfballgarageLogo} alt="Golf Ball Garage Logo" />
      <Text variant="lead">
        A modern marketplace for buying and selling golf balls, built with a focus on user experience
        and efficient transactions.
      </Text>

      <div style={{ marginTop: '2rem' }}>
        <Heading as="h2" variant="h2">Project Overview</Heading>
        <Text variant="body">
          Golf Ball Garage is a platform that connects golf ball buyers and sellers, making it easy
          to find quality used golf balls at competitive prices. The project emphasizes a clean,
          intuitive interface and streamlined user experience.
        </Text>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Heading as="h2" variant="h2">Key Features</Heading>
        <List listStyle="disc" spacing="normal" style={{ marginTop: '1rem' }}>
          <li>User-friendly marketplace interface</li>
          <li>Advanced search and filtering capabilities</li>
          <li>Secure payment processing</li>
          <li>Responsive design for all devices</li>
          <li>Real-time inventory management</li>
        </List>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Heading as="h2" variant="h2">Visit the Site</Heading>
        <div style={{ marginTop: '1rem' }}>
          <Link 
            href="https://golfballgarage.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ fontSize: '1.25rem' }}
          >
            golfballgarage.com →
          </Link>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/projects">← Back to Projects</Link>
      </div>
    </PageContent>
  )
}

export default GolfBallGarage 