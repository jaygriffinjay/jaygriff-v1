import styled from 'styled-components'
import { Card, Container, Heading, Text, Link, List } from '../components'
import meImage from '../assets/images/me.jpg'

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

function About() {
  return (
    <Container>
      <Card>

        <ProfileImage src={meImage} alt="Jay Griffin" />

        <div style={{ marginTop: '2rem' }}>
          <Heading as="h2" variant="h2">Background</Heading>
          <Text variant="body">
            With a passion for creating intuitive digital experiences, I specialize in full-stack web development
            using modern technologies like React, Node.js, and TypeScript. I believe in writing clean, maintainable
            code and building applications that are both powerful and easy to use.
          </Text>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Heading as="h2" variant="h2">Skills & Expertise</Heading>
          <List listStyle="disc" spacing="normal" style={{ marginTop: '1rem' }}>
            <li>Frontend Development (React, TypeScript, styled-components)</li>
            <li>Backend Development (Node.js, Express, PostgreSQL)</li>
            <li>UI/UX Design & Implementation</li>
            <li>Responsive Web Design</li>
            <li>Performance Optimization</li>
            <li>Testing & Quality Assurance</li>
          </List>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Heading as="h2" variant="h2">Projects</Heading>
          <Text variant="body">
            I've worked on various projects, from personal websites to client applications. You can explore
            some of my work in the <Link href="/projects">Projects</Link> section, including:
          </Text>
          <List listStyle="disc" spacing="normal" style={{ marginTop: '1rem' }}>
            <li>
              <Link href="/projects/golfballgarage">Golf Ball Garage</Link>
              <Text variant="small"> - A modern marketplace for buying and selling golf balls</Text>
            </li>
            <li>
              <Link href="/projects/meta">This Website</Link>
              <Text variant="small"> - A showcase of my work and thoughts</Text>
            </li>
          </List>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Heading as="h2" variant="h2">Get in Touch</Heading>
          <Text variant="body">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out
            through any of the following:
          </Text>
          <List listStyle="disc" spacing="normal" style={{ marginTop: '1rem' }}>
            <li>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="mailto:your.email@example.com">
                Email
              </Link>
            </li>
          </List>
        </div>
      </Card>
    </Container>
  )
}

export default About 