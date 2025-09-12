import styled from 'styled-components'
import { Container, Heading, Text, Link, List } from '../components'
import meImage from '../assets/images/me.jpg'

const PageContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 2rem auto;
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`

const ContentSection = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfileImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: ${props => props.theme.borderRadius.lg};
  margin: 2rem auto;
  display: block;
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform ${props => props.theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
  }
`

const StyledList = styled(List)`
  text-align: left;
  width: 100%;
  max-width: 600px;
  margin: 1rem auto;
`

function About() {
  return (
    <PageContent>
      <ProfileImage src={meImage} alt="Jay Griffin" />
      <Heading as="h1" variant="h1">About</Heading>
      <Text variant="lead">
        Welcome to my website where I publish my work and thoughts. I'm a software developer currently making TypeScript and React applications, mostly websites and web apps.
      </Text>

      <ContentSection>
        <Heading as="h2" variant="h2">Development Experience</Heading>
        <StyledList listStyle="disc" spacing="normal">
          <li>
            <Text variant="body">
              <b>Languages:</b> JavaScript, TypeScript, Python, Shell, HTML, CSS
            </Text>
          </li>
          <li>
            <Text variant="body">
              <b>Current Tools:</b> React, css-in-js, Node, Vite, Vercel, Git, Github, coding with AI assistance but <Link href="https://sive.rs/abdicate" target="_blank" rel="noopener noreferrer">not too much.</Link>
            </Text>
          </li>
          <li>
            <Text variant="body">
              <b>Previous Tools:</b> Flask, Django, Hugo, Jekyll, Wordpress, Tailwind, Next.js, DaisyUI
            </Text>
          </li>
          <li>
            <Text variant="body">
              <b>Infrastructure:</b> Linux, homelabbing, self-hosting, hosted solutions, VPS and cloud providers, APIs, virtualization, containers
            </Text>
          </li>
        </StyledList>
      </ContentSection>
    </PageContent>
  )
}

export default About 