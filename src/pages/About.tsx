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
        I am a software developer and accountant interested in full-stack development and computer infrastructure.
      </Text>

      <ContentSection>
        <Heading as="h2" variant="h2">Development Interests</Heading>
        <StyledList listStyle="disc" spacing="normal">
          <li>
            <Text variant="body">
              <b>Languages:</b> JavaScript, TypeScript, Python, Shell, HTML, CSS
            </Text>
          </li>
          <li>
            <Text variant="body">
              <b>Current Tools:</b> React, css-in-js, Node, Vite, Cursor.ai
            </Text>
          </li>
          <li>
            <Text variant="body">
              <b>Previous Tools:</b> Flask, Django, Hugo, Jekyll, Wordpress, Tailwind, Next.js, DaisyUI
            </Text>
          </li>
        </StyledList>
      </ContentSection>

      <ContentSection>
        <Heading as="h2" variant="h2">Computer Infrastructure</Heading>
        <StyledList listStyle="disc" spacing="normal">
          <li>
            <Text variant="body">
              Linux, homelab, hosting, networking, hardware, virtualization, containers, container orchestration, automation
            </Text>
          </li>
        </StyledList>
      </ContentSection>

      <ContentSection>
        <Heading as="h2" variant="h2">Accounting Interests</Heading>
        <StyledList listStyle="disc" spacing="normal">
          <li>
            <Text variant="body">
              Tax Accounting, Bookkeeping, Excel, PowerQuery
            </Text>
          </li>
        </StyledList>
      </ContentSection>
    </PageContent>
  )
}

export default About 