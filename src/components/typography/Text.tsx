import styled from 'styled-components'
import { TextProps, StyledProps } from '../../types'

const StyledText = styled.p<StyledProps>`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily.body};
  font-size: ${props => props.theme.typography.fontSize.base};
  line-height: ${props => props.theme.typography.lineHeight.normal};
  margin: 0;
  
  /* Variants */
  ${props => props.$variant === 'body' && `
    font-size: ${props.theme.typography.fontSize.base};
    line-height: ${props.theme.typography.lineHeight.normal};
  `}
  
  ${props => props.$variant === 'small' && `
    font-size: ${props.theme.typography.fontSize.sm};
    line-height: ${props.theme.typography.lineHeight.normal};
    color: ${props.theme.colors.textLight};
  `}
  
  ${props => props.$variant === 'caption' && `
    font-size: ${props.theme.typography.fontSize.xs};
    line-height: ${props.theme.typography.lineHeight.normal};
    color: ${props.theme.colors.textLight};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  `}
  
  ${props => props.$variant === 'lead' && `
    font-size: ${props.theme.typography.fontSize.lg};
    line-height: ${props.theme.typography.lineHeight.relaxed};
    color: ${props.theme.colors.text};
  `}

  ${props => props.$variant === 'strikethrough' && `
    text-decoration: line-through;
    color: ${props.theme.colors.textLight};
  `}
`

const Text = ({ as = 'p', variant = 'body', children, ...props }: TextProps) => {
  return (
    <StyledText as={as} $variant={variant} {...props}>
      {children}
    </StyledText>
  )
}

export default Text 