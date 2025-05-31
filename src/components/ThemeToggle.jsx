import styled from 'styled-components'
import { useTheme } from '../contexts/ThemeContext'

const ToggleButton = styled.button`
  background: none;
  border: none;
  padding: ${props => props.theme.spacing.sm};
  cursor: pointer;
  color: ${props => props.theme.colors.textLight};
  transition: color ${props => props.theme.transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius.full};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.surface};
  }
`

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  
  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {isDarkMode ? '🌞' : '🌙'}
    </ToggleButton>
  )
}

export default ThemeToggle 