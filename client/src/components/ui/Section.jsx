export default function Section({
  children,
  id,
  className = '',
  background = '',
  innerRef,
}) {
  return (
    <section
      ref={innerRef}
      id={id}
      className={`py-20 md:py-24 px-6 ${background} ${className}`}
    >
      {children}
    </section>
  )
}