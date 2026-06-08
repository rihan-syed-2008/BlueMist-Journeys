export default function SectionHeader({
  eyebrow,
  title,
  centered = true,
}) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12`}>
      {eyebrow && (
        <p className="text-teal text-xs tracking-luxury uppercase mb-4 font-sans">
          {eyebrow}
        </p>
      )}

      <h2 className="font-serif text-navy text-5xl font-light">
        {title}
      </h2>
    </div>
  )
}