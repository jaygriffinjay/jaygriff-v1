import styled from 'styled-components'
import { Heading, Text, Link, List } from '../components'
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

function Locus() {
  return (
    <PageContent>
      <Heading as="h1" variant="h1">Locus</Heading>
      <ProjectLogo src={locusLogo} alt="Locus Logo" />
      <Text variant="lead" style={{ marginBottom: '1.5rem' }}>
        A high-performance bookmark finder and launcher, built as a Chrome extension to supercharge your browsing workflow.
      </Text>
      <List listStyle="disc" spacing="normal">
        <li>
          <Text variant="body">
            <strong>Instant Search:</strong> Find any bookmark in milliseconds with a powerful, fuzzy-search algorithm.
          </Text>
        </li>
        <li>
          <Text variant="body">
            <strong>Keyboard First:</strong> Navigate, search, and launch entirely from your keyboard.
          </Text>
        </li>
        <li>
          <Text variant="body">
            <strong>Lightweight & Fast:</strong> Built with performance as a primary feature, ensuring no browser slowdown.
          </Text>
        </li>
        <li>
          <Text variant="body">
            <strong>Minimalist UI:</strong> A clean and unobtrusive interface that appears only when you need it.
          </Text>
        </li>
      </List>
      <div style={{ marginTop: '2rem' }}>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          View on Chrome Web Store →
        </Link>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <Heading as="h2" variant="h2">Support</Heading>
        <Text variant="body" style={{ marginTop: '0.5rem' }}>
          For support, comments, or questions please email <Link href="mailto:jay@jaygriff.com">jay@jaygriff.com</Link>.
        </Text>
      </div>
    </PageContent>
  )
}

export default Locus
