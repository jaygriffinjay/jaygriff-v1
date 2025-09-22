import styled from 'styled-components'
import Heading from './typography/Heading'
import { Link as RouterLink } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'
import ThemeToggle from './ThemeToggle'
import { useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const BREAKPOINT = '768px'

const NavWrapper = styled.div`
  width: 100%;
  padding: ${props => props.theme.spacing.lg} 0;
  background-color: ${props => props.theme.colors.background};
  transition: background-color ${props => props.theme.transitions.normal};
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
    flex-wrap: wrap;
    gap: ${props => props.theme.spacing.sm};
  }
`

const NameLink = styled(RouterLink)`
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

const Divider = styled.div<{ $isDarkMode?: boolean }>`
  width: 100%;
  height: 1px;
  background-color: ${props => props.$isDarkMode ? 'rgba(255, 255, 255, 0.3)' : props.theme.colors.surface};
  margin: 0;
  transition: background-color ${props => props.theme.transitions.normal};
`

const NavLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: center;

  @media (max-width: ${BREAKPOINT}) {
    margin-top: ${props => props.theme.spacing.sm};
  }
`

const NavItem = styled(RouterLink)`
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
  text-decoration: none;

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
  const { isDarkMode } = useTheme()

  // Function to generate breadcrumb items based on the current path
  const getBreadcrumbItems = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean)
    const items = [{ label: 'Home', path: '/' }]

    if (pathSegments.length === 0) return items

    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      // Convert segment to title case and handle special cases
      let label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      // Special case for thiswebsite project routes
      if (segment === 'thiswebsite' && pathSegments[index + 1] === 'components') {
        label = 'Component Library'
      } else if (segment === 'thiswebsite') {
        label = 'This Website'
      }

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
          <NameLink to="/">
            <Name>Jay Griffin</Name>
          </NameLink>
          <ThemeToggle />
        </NavRow>
        
        <Divider $isDarkMode={isDarkMode} />
        
        <NavRow>
          <DesktopNav>
            <NavItem to="/about">
              <Heading as="h4" variant="h4">About</Heading>
            </NavItem>
            <NavItem to="/projects">
              <Heading as="h4" variant="h4">Projects</Heading>
            </NavItem>
            <NavItem to="/pages">
              <Heading as="h4" variant="h4">Pages</Heading>
            </NavItem>
          </DesktopNav>
          
          <MobileNav>
            <NavItem to="/about">
              <Heading as="h4" variant="h4">About</Heading>
            </NavItem>
            <NavItem to="/projects">
              <Heading as="h4" variant="h4">Projects</Heading>
            </NavItem>
            <NavItem to="/pages">
              <Heading as="h4" variant="h4">Pages</Heading>
            </NavItem>
          </MobileNav>
        </NavRow>
      </NavContent>
    </NavWrapper>
  )
}

export default Navbar 