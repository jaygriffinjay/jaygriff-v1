import { Card, Container, Heading, Text } from '../components'

function Home() {
  return (
    <Container>
      <Card>
        <Heading as="h1" variant="h1">Welcome</Heading>
        <Text variant="lead">
          Welcome to my personal website. Here you'll find my projects, thoughts, and more.
        </Text>
      </Card>
    </Container>
  )
}

export default Home 