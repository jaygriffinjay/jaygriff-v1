import { Button, Card, Container, Heading, Text, Link, List } from '../components'

function ComponentLibrary() {
  return (
    <Container>
      <Card>
        <Heading as="h1" variant="h1">Component Library</Heading>
        <Text variant="lead">
          A collection of reusable components built with styled-components and theme integration.
        </Text>

        {/* Headings Section */}
        <section style={{ marginTop: '2rem' }}>
          <Heading as="h2" variant="h2">Headings</Heading>
          <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
            <Heading as="h1" variant="h1">Heading 1 (4xl)</Heading>
            <Heading as="h2" variant="h2">Heading 2 (3xl)</Heading>
            <Heading as="h3" variant="h3">Heading 3 (2xl)</Heading>
            <Heading as="h4" variant="h4">Heading 4 (xl)</Heading>
            <Heading as="h5" variant="h5">Heading 5 (lg)</Heading>
            <Heading as="h6" variant="h6">Heading 6 (base)</Heading>
          </div>
        </section>

        {/* Text Variants Section */}
        <section style={{ marginTop: '2rem' }}>
          <Heading as="h2" variant="h2">Text Variants</Heading>
          <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
            <Text variant="lead">Lead Text - Used for introductory paragraphs</Text>
            <Text variant="body">Body Text - The default text style for regular content</Text>
            <Text variant="small">Small Text - Used for secondary information</Text>
            <Text variant="caption">Caption Text - Used for labels and small print</Text>
          </div>
        </section>

        {/* Links Section */}
        <section style={{ marginTop: '2rem' }}>
          <Heading as="h2" variant="h2">Links</Heading>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Link href="#">Default Link</Link>
            <Link href="#" variant="secondary">Secondary Link</Link>
            <Link href="#" variant="muted">Muted Link</Link>
          </div>
        </section>

        {/* Lists Section */}
        <section style={{ marginTop: '2rem' }}>
          <Heading as="h2" variant="h2">Lists</Heading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginTop: '1rem' }}>
            <div>
              <Heading as="h3" variant="h3">List Styles</Heading>
              <List listStyle="disc" spacing="normal">
                <li>Disc style list item</li>
                <li>With normal spacing</li>
                <li>Between items</li>
              </List>
              
              <List listStyle="circle" spacing="normal" style={{ marginTop: '1rem' }}>
                <li>Circle style list item</li>
                <li>With normal spacing</li>
                <li>Between items</li>
              </List>
              
              <List listStyle="square" spacing="normal" style={{ marginTop: '1rem' }}>
                <li>Square style list item</li>
                <li>With normal spacing</li>
                <li>Between items</li>
              </List>
            </div>
            
            <div>
              <Heading as="h3" variant="h3">List Spacing</Heading>
              <List listStyle="custom" spacing="tight">
                <li>Custom bullet style</li>
                <li>With tight spacing</li>
                <li>Between items</li>
              </List>
              
              <List listStyle="none" spacing="loose" style={{ marginTop: '1rem' }}>
                <li>
                  <Text variant="body">List item with <Link href="#">a link</Link></Text>
                </li>
                <li>
                  <Text variant="small">Small text in a list item</Text>
                </li>
                <li>
                  <Button>Button in a list</Button>
                </li>
              </List>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section style={{ marginTop: '2rem' }}>
          <Heading as="h2" variant="h2">Buttons</Heading>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="danger">Danger Button</Button>
          </div>
        </section>

        {/* Cards Section */}
        <section style={{ marginTop: '2rem' }}>
          <Heading as="h2" variant="h2">Cards</Heading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginTop: '1rem' }}>
            <Card>
              <Heading as="h3" variant="h3">Basic Card</Heading>
              <Text>This is a basic card with some content.</Text>
            </Card>
            
            <Card>
              <Heading as="h3" variant="h3">Card with Button</Heading>
              <Text>Cards can contain any content, including buttons.</Text>
              <div style={{ marginTop: '1rem' }}>
                <Button>Card Button</Button>
              </div>
            </Card>
          </div>
        </section>
      </Card>
    </Container>
  )
}

export default ComponentLibrary 