export function SectionHeader({ num, title, tag }) {
  return (
    <header className="section-header">
      <div>
        <p className="section-num">{num}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {tag ? <p className="section-tag">{tag}</p> : null}
    </header>
  )
}
