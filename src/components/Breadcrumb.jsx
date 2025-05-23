import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from './typography/Link'
import Tooltip from './Tooltip'

const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textLight};
`

const BreadcrumbItem = styled(Link)`
  color: ${props => props.theme.colors.textLight};
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    color: ${props => props.theme.colors.text};
    pointer-events: none;
  }
`

const EllipsisItem = styled.span`
  color: ${props => props.theme.colors.textLight};
  cursor: pointer;
  padding: 0 ${props => props.theme.spacing.xs};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const Separator = styled.span`
  color: ${props => props.theme.colors.textLight};
  opacity: 0.5;
`

const Breadcrumb = ({ items }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  useEffect(() => {
    const handleClick = (event) => {
      // Close tooltip if clicking anywhere except the ellipsis
      if (!event.target.closest('.ellipsis-trigger')) {
        setIsTooltipOpen(false)
      }
    }

    if (isTooltipOpen) {
      document.addEventListener('click', handleClick)
    }

    return () => document.removeEventListener('click', handleClick)
  }, [isTooltipOpen])

  // If we have 4 or more items, show first, ellipsis, and last
  const shouldShowEllipsis = items.length > 3
  const visibleItems = shouldShowEllipsis 
    ? [items[0], items[items.length - 1]] 
    : items
  const hiddenItems = shouldShowEllipsis 
    ? items.slice(1, -1) 
    : []

  return (
    <BreadcrumbContainer>
      {visibleItems.map((item, index) => {
        const isLast = index === visibleItems.length - 1

        if (index === 0 && shouldShowEllipsis) {
          return (
            <div key="group" style={{ display: 'flex', alignItems: 'center' }}>
              <BreadcrumbItem href={item.path}>
                {item.label}
              </BreadcrumbItem>
              <Separator>/</Separator>
              <Tooltip
                trigger={
                  <EllipsisItem 
                    className="ellipsis-trigger"
                    onClick={() => setIsTooltipOpen(!isTooltipOpen)}
                  >
                    ...
                  </EllipsisItem>
                }
                items={hiddenItems}
                isOpen={isTooltipOpen}
                onClose={() => setIsTooltipOpen(false)}
                onItemClick={(item) => window.location.href = item.path}
              />
              <Separator>/</Separator>
              <BreadcrumbItem 
                href={visibleItems[1].path}
                className="active"
              >
                {visibleItems[1].label}
              </BreadcrumbItem>
            </div>
          )
        }

        if (!shouldShowEllipsis) {
          return (
            <div key={item.path} style={{ display: 'flex', alignItems: 'center' }}>
              <BreadcrumbItem 
                href={item.path}
                className={isLast ? 'active' : ''}
              >
                {item.label}
              </BreadcrumbItem>
              {!isLast && <Separator>/</Separator>}
            </div>
          )
        }

        return null
      })}
    </BreadcrumbContainer>
  )
}

export default Breadcrumb