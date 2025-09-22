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

function AllPages() {
  return (
    <PageContent>
      <Heading as="h1" variant="h1">All Pages</Heading>
      <Text variant="lead">
        A comprehensive directory of all pages available on this website.
      </Text>

      <div style={{ marginTop: '2rem' }}>
        <List listStyle="none" spacing="loose">
          <li>
            <PageSection>
              <Heading as="h3" variant="h3">
                <Link href="/">Home</Link>
              </Heading>
              <Text variant="body">
                The main landing page with an overview of who I am and what I do.
              </Text>
            </PageSection>
          </li>

          <li>
            <PageSection>
              <Heading as="h3" variant="h3">
                <Link href="/about">About</Link>
              </Heading>
              <Text variant="body">
                More details about my background, experience, and what I'm currently working on.
              </Text>
            </PageSection>
          </li>

          <li>
            <PageSection>
              <Heading as="h3" variant="h3">
                <Link href="/projects">Projects</Link>
              </Heading>
              <Text variant="body">
                A showcase of my projects, both personal and professional work.
              </Text>
            </PageSection>
          </li>

          <li>
            <PageSection>
              <Heading as="h3" variant="h3">
                <Link href="/pages">Pages</Link>
              </Heading>
              <Text variant="body">
                Unique webpages and tools I've built for various purposes.
              </Text>
            </PageSection>
          </li>

          <li>
            <PageSection>
              <Heading as="h3" variant="h3">
                <Link href="/devlog">Dev Log</Link>
              </Heading>
              <Text variant="body">
                A running log of development updates, thoughts, and progress on various projects.
              </Text>
            </PageSection>
          </li>

          <li>
            <PageSection>
              <Heading as="h3" variant="h3">
                <Link href="/projects/thiswebsite/components">Component Library</Link>
              </Heading>
              <Text variant="body">
                A showcase of all the reusable components used throughout this website.
              </Text>
            </PageSection>
          </li>
        </List>
      </div>
    </PageContent>
  )
}

export default AllPages