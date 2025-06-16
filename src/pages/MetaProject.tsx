import { Card, Container, Heading, Text, Link, List } from '../components'

function MetaProject() {
  return (
    <Container>
      <Card>
        <Heading as="h1" variant="h1">This website</Heading>
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
      </Card>
    </Container>
  )
}

export default MetaProject 