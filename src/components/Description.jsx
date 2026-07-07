function Description({ children, className = '' }) {
  return (
    <div className={`text-[14px] font-desc leading-5 text-slate-200 ${className}`}>
      {children}
    </div>
  )
}

export default Description