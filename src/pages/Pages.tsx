import styled from 'styled-components'
import { Heading, Text, Link, List } from '../components'

const PageContent = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`

const PageSection = styled.div`
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

function Pages() {
  return (
    <PageContent>
      <Heading as="h1" variant="h1">Pages</Heading>
      <Text variant="lead">
        Unique webpages and tools I've built for various purposes.
      </Text>

      <div style={{ marginTop: '2rem' }}>
        <List listStyle="none" spacing="loose">
          <li>
            <PageSection>
              <Heading as="h3" variant="h3">
                <Link href="/pages/all">All Pages</Link>
              </Heading>
              <Text variant="body">
                A comprehensive directory of all pages available on this website.
              </Text>
            </PageSection>
          </li>

          <li>
            <PageSection>
              <Heading as="h3" variant="h3">
                <Link href="/pages/devlog">Dev Log</Link>
              </Heading>
              <Text variant="body">
                A running development log tracking progress, updates, and thoughts on various projects.
              </Text>
            </PageSection>
          </li>

          {/* Placeholder for future unique pages */}
          {/* 
          <li>
            <PageSection>
              <Heading as="h3" variant="h3">
                <Link href="/pages/toolname">Tool Name</Link>
              </Heading>
              <Text variant="body">
                Description of the unique tool or webpage.
              </Text>
            </PageSection>
          </li>
          */}
        </List>
      </div>
    </PageContent>
  )
}

export default Pages