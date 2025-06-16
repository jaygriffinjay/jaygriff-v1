import styled from 'styled-components'
import { ContainerProps } from '../types'

const StyledContainer = styled.div<{ $maxWidth?: string; $padding?: string }>`
  max-width: ${props => props.$maxWidth || '1200px'};
  margin: 0 auto;
  padding: ${props => props.$padding || '0 1rem'};
`

const Container = ({ children, maxWidth, padding, ...props }: ContainerProps) => {
  return (
    <StyledContainer $maxWidth={maxWidth} $padding={padding} {...props}>
      {children}
    </StyledContainer>
  )
}

export default Container 