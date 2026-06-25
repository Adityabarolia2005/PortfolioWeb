export default function PageHeading({ children, className = '' }) {
  return (
    <p className={`text-3xl text-white gap-3 font-heading font-semibold ${className}`}>{children}</p>
  )
}
