import styled from 'styled-components'
import { TooltipProps } from '../types'
import Link from './typography/Link'

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`

const TooltipContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.xs};
  margin-top: ${props => props.theme.spacing.xs};
  min-width: 160px;
  box-shadow: ${props => props.theme.shadows.md};
`

const TooltipList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const TooltipItem = styled.li`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.typography.fontSize.sm};
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
    color: ${props => props.theme.colors.textLight};
    transition: color ${props => props.theme.transitions.normal};
  }

  &:hover {
    background-color: ${props => props.theme.colors.background};
    a {
      color: ${props => props.theme.colors.primary} !important;
    }
  }
`

const Tooltip = ({ trigger, items, isOpen, onClose, onItemClick }: TooltipProps) => {
  if (!isOpen) return trigger

  return (
    <TooltipContainer>
      {trigger}
      <TooltipContent>
        <TooltipList>
          {items.map((item, index) => (
            <TooltipItem key={index}>
              <Link href={item.href} style={{ color: 'inherit', textDecoration: 'none', display: 'block', width: '100%' }}>
                {item.label}
              </Link>
            </TooltipItem>
          ))}
        </TooltipList>
      </TooltipContent>
    </TooltipContainer>
  )
}

export default Tooltip 