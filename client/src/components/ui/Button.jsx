export default function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
}) {
  const base =
    'inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.3em] transition-all duration-300 ease-luxury'

  const variants = {
    primary:
      'bg-teal text-white hover:opacity-80 hover:scale-[1.02]',

    secondary:
      'border border-white/40 text-white backdrop-blur-sm hover:bg-white hover:text-navy',

    outline:
      'border border-navy/20 text-navy hover:bg-navy hover:text-white',
  }

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}