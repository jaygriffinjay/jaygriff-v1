import styled from 'styled-components'
import { Heading, Text } from '../components'

const PageContent = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`

const LogEntry = styled.div`
  padding: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
  border-bottom: 1px solid ${props => props.theme.colors.border};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`

const DateHeader = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.875rem;
  margin-bottom: ${props => props.theme.spacing.sm};
  font-weight: 500;
`

function DevLog() {
  return (
    <PageContent>
      <Heading as="h1" variant="h1">Dev Log</Heading>
      <Text variant="lead">
        A running log of development updates, thoughts, and progress on various projects.
      </Text>

      <div style={{ marginTop: '2rem' }}>
        <LogEntry>
          <DateHeader>September 21, 2025</DateHeader>
          <Heading as="h3" variant="h3">Website Open Sourced</Heading>
          <Text variant="body">
            Made the decision to open source my personal website. Updated the README with proper 
            documentation and tech stack badges. The code is now publicly available for others 
            to learn from and contribute to.
          </Text>
        </LogEntry>

        <LogEntry>
          <DateHeader>September 21, 2025</DateHeader>
          <Heading as="h3" variant="h3">Favicon Updated</Heading>
          <Text variant="body">
            Finally replaced the default favicon with my actual logo. It was sitting in the 
            assets folder the whole time - just needed to copy it to the public directory.
          </Text>
        </LogEntry>

        <LogEntry>
          <DateHeader>September 21, 2025</DateHeader>
          <Heading as="h3" variant="h3">Dev Log Created</Heading>
          <Text variant="body">
            Added this dev log page to track development progress and thoughts. It's helpful 
            to have a place to document the journey of building and improving this site.
          </Text>
        </LogEntry>
      </div>
    </PageContent>
  )
}

export default DevLog