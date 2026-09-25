import React, { ReactNode } from 'react'

const ListItem: React.FC<{
  text?: string
  className?: string
  children?: ReactNode
}> = ({ text, className ,children}) => {
  return (
    <li className={`flex items-start ${className}`}>
      <span className="mr-3">✅</span> {text} {children}
    </li>
  )
}

export default ListItem
