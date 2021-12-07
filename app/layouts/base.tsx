import Sidenav from '~/components/sidenav'

export default function LayoutBase({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <Sidenav />
      <div className="flex-grow">
        <header className="container">
          top of page header
        </header>
        <div className="container py-6">{children}</div>
      </div>
    </div>
  )
}
