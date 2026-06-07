import Link from "next/link"

export function Branding() {
  return (
    <Link
      href="/"
      className="group-data-[collapsible=icon]:hidden flex flex-col leading-none"
    >
      <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">
        [showcase]
      </span>
      <span className="text-lg font-bold tracking-widest">
        ULTRA PDF
      </span>
    </Link>
  )
}
