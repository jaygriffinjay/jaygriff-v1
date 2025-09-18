import styled from 'styled-components'
import { Heading, Text, Link, List } from '../components'
import favicon from '../assets/logos/favicon.svg'

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

function MetaProject() {
  return (
    <PageContent>
      <Heading as="h1" variant="h1">This website</Heading>
      <ProjectLogo src={favicon} alt="This Website's Logo" />
      <Text variant="lead">
        Documentation and tools for maintaining this website.
      </Text>
      <List listStyle="disc" spacing="normal" style={{ marginTop: '1rem' }}>
        <li>
          <Link href="/projects/meta/components">Component Library</Link>
          <Text variant="small"> - Visual documentation of all UI components</Text>
        </li>
        {/* Future meta documentation links can go here */}
      </List>
    </PageContent>
  )
}

export default MetaProject 