import React from 'react'

type HeadingProps = {
  title: string,
  count?: number
}

export default function Heading({ title, count }: HeadingProps) {
  return (
    <div className="component-heading rounded bg-light shadow">
      <h1>{title}</h1>
      {count && <span>{count} db</span>}
    </div>
  )
}