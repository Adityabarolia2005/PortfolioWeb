function Description({ children, className = '' }) {
  return (
    <p className={`text-md font-[font-family-var(--font-heading)] leading-7 text-slate-200 ${className}`}>
      {children}
    </p>
  )
}

export default Description