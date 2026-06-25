function Description({ children, className = '' }) {
  return (
    <p className={`text-[13px] font-desc leading-5 text-slate-200 ${className}`}>
      {children}
    </p>
  )
}

export default Description