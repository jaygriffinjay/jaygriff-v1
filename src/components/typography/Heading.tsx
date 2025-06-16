import styled from 'styled-components'
import { HeadingProps, StyledProps } from '../../types'

const StyledHeading = styled.h1<StyledProps>`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily.heading};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  line-height: ${props => props.theme.typography.lineHeight.tight};
  margin: 0;
  
  /* Variants */
  ${props => props.$variant === 'h1' && `
    font-size: ${props.theme.typography.fontSize['4xl']};
    letter-spacing: -0.025em;
  `}
  
  ${props => props.$variant === 'h2' && `
    font-size: ${props.theme.typography.fontSize['3xl']};
    letter-spacing: -0.025em;
  `}
  
  ${props => props.$variant === 'h3' && `
    font-size: ${props.theme.typography.fontSize['2xl']};
    letter-spacing: -0.025em;
  `}
  
  ${props => props.$variant === 'h4' && `
    font-size: ${props.theme.typography.fontSize.xl};
    font-weight: ${props.theme.typography.fontWeight.semibold};
  `}
  
  ${props => props.$variant === 'h5' && `
    font-size: ${props.theme.typography.fontSize.lg};
    font-weight: ${props.theme.typography.fontWeight.semibold};
  `}
  
  ${props => props.$variant === 'h6' && `
    font-size: ${props.theme.typography.fontSize.base};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: ${props.theme.typography.fontWeight.medium};
    color: ${props.theme.colors.textLight};
  `}

  /* Margin variants */
  ${props => props.$margin === 'h1' && `
    margin-bottom: ${props.theme.spacing.xl};
  `}
  
  ${props => props.$margin === 'h2' && `
    margin-bottom: ${props.theme.spacing.lg};
  `}
  
  ${props => props.$margin === 'h3' && `
    margin-bottom: ${props.theme.spacing.md};
  `}
  
  ${props => props.$margin === 'h4' && `
    margin-bottom: ${props.theme.spacing.md};
  `}
  
  ${props => props.$margin === 'h5' && `
    margin-bottom: ${props.theme.spacing.sm};
  `}
  
  ${props => props.$margin === 'h6' && `
    margin-bottom: ${props.theme.spacing.sm};
  `}
`

const Heading = ({ as, variant = 'h1', margin, children, ...props }: HeadingProps) => {
  // If no 'as' prop is provided, derive it from the variant
  const element = as || variant
  
  return (
    <StyledHeading as={element} $variant={variant} $margin={margin} {...props}>
      {children}
    </StyledHeading>
  )
}

export default Heading 