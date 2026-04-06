export function Button({ as = 'button', variant = 'primary', className = '', children, ...props }) {
  const Tag = as
  const buttonClassName = `btn btn-${variant} ${className}`.trim()
  return (
    <Tag className={buttonClassName} {...props}>
      {children}
    </Tag>
  )
}
