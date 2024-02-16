export function Section({
  id,
  className,
  children
}: {
  id: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={`${className} w-full md:w-[740px] mx-auto`}>
      {children}
    </section>
  )
}
