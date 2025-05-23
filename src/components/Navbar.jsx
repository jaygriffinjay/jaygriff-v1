import styled from 'styled-components'
import Heading from './typography/Heading'
import Link from './typography/Link'
import Breadcrumb from './Breadcrumb'
import { useLocation } from 'react-router-dom'

const BREAKPOINT = '768px'

const NavWrapper = styled.div`
  width: 100%;
  padding: ${props => props.theme.spacing.lg} 0;
  background-color: ${props => props.theme.colors.background};
`

const BreadcrumbWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.md};

  @media (max-width: ${BREAKPOINT}) {
    padding: 0 ${props => props.theme.spacing.md};
  }
`

const NavContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};

  @media (max-width: ${BREAKPOINT}) {
    padding: 0 ${props => props.theme.spacing.md};
  }
`

const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: ${BREAKPOINT}) {
    justify-content: center;
  }
`

const NameLink = styled(Link)`
  text-decoration: none;
  transition: all ${props => props.theme.transitions.normal};
  
  &:hover {
    text-decoration: none;
  }
`

const Name = styled.h1`
  font-family: ${props => props.theme.typography.fontFamily.heading};
  font-size: 3.75rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.textLight};
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.1;
  transition: color ${props => props.theme.transitions.normal}, transform ${props => props.theme.transitions.normal};
  white-space: nowrap;

  ${NameLink}:hover & {
    color: ${props => props.theme.colors.primary};
    transform: translateY(-1px);
  }

  @media (max-width: ${BREAKPOINT}) {
    font-size: 3rem;
  }
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.surface};
  margin: 0;
`

const NavLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: center;

  @media (max-width: ${BREAKPOINT}) {
    margin-top: ${props => props.theme.spacing.sm};
  }
`

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all ${props => props.theme.transitions.normal};
  background-color: transparent;
  min-width: auto;
  position: relative;
  overflow: hidden;

  h4 {
    color: ${props => props.theme.colors.textLight};
    transition: all ${props => props.theme.transitions.normal};
    letter-spacing: 0.02em;
    font-weight: ${props => props.theme.typography.fontWeight.medium};
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transition: all ${props => props.theme.transitions.normal};
    transform: translateX(-50%);
  }

  &:hover {
    background-color: ${props => props.theme.colors.surface};
    text-decoration: none;

    &::before {
      width: 80%;
    }

    h4 {
      color: ${props => props.theme.colors.primary};
      transform: translateY(-1px);
    }
  }
`

const DesktopNav = styled(NavLinks)`
  @media (max-width: ${BREAKPOINT}) {
    display: none;
  }
`

const MobileNav = styled(NavLinks)`
  display: none;
  @media (max-width: ${BREAKPOINT}) {
    display: flex;
  }
`

const NavTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.sm};
`

const Navbar = () => {
  const location = useLocation()
  
  // Generate breadcrumb items based on current path
  const getBreadcrumbItems = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean)
    const items = [{ label: 'Home', path: '/' }]
    
    let currentPath = ''
    pathSegments.forEach(segment => {
      currentPath += `/${segment}`
      // Convert segment to title case and remove hyphens
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      items.push({ label, path: currentPath })
    })
    
    return items
  }

  return (
    <NavWrapper>
      <BreadcrumbWrapper>
        <Breadcrumb items={getBreadcrumbItems()} />
      </BreadcrumbWrapper>
      <NavContent>
        <NavRow>
          <NameLink href="/">
            <Name>Jay Griffin</Name>
          </NameLink>
          <DesktopNav>
            <NavItem href="/about">
              <Heading as="h4" variant="h4">About</Heading>
            </NavItem>
            <NavItem href="/pages">
              <Heading as="h4" variant="h4">Pages</Heading>
            </NavItem>
            <NavItem href="/projects">
              <Heading as="h4" variant="h4">Projects</Heading>
            </NavItem>
          </DesktopNav>
        </NavRow>
        <Divider />
        <MobileNav>
          <NavItem href="/about">
            <Heading as="h4" variant="h4">About</Heading>
          </NavItem>
          <NavItem href="/pages">
            <Heading as="h4" variant="h4">Pages</Heading>
          </NavItem>
          <NavItem href="/projects">
            <Heading as="h4" variant="h4">Projects</Heading>
          </NavItem>
        </MobileNav>
      </NavContent>
    </NavWrapper>
  )
}

export default Navbar 