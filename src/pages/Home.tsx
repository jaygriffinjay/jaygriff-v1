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

function Home() {
  return (
    <PageContent>
      <Heading as="h1" variant="h1">Welcome</Heading>
      <Text variant="lead">
        Welcome to my personal website. Here you'll find my projects, thoughts, and more.
      </Text>
    </PageContent>
  )
}

export default Home 