import styled from 'styled-components'
import { ButtonProps, StyledProps } from '../types'

const StyledButton = styled.button<StyledProps>`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  font-family: ${props => props.theme.typography.fontFamily.body};
  font-size: ${props => props.theme.typography.fontSize.base};
  border: none;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }

  ${props => props.$variant === 'secondary' && `
    background-color: ${props.theme.colors.secondary};
    &:hover {
      background-color: ${props.theme.colors.accent};
    }
  `}
  
  ${props => props.$variant === 'danger' && `
    background-color: ${props.theme.colors.error};
    &:hover {
      background-color: ${props.theme.colors.warning};
    }
  `}
`

const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <StyledButton $variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button 