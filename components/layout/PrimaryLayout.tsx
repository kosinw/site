import { PrimarySidebar } from '~components/layout/PrimarySidebar'

type PrimaryLayoutProps = { children: JSX.Element }

export const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  return (
    <div className="relative flex h-full min-h-full w-full overflow-x-hidden">
      <PrimarySidebar />
      <div className="flex flex-1">
        <div className="relative flex max-h-screen w-full flex-col overflow-y-auto">
          <div className="mx-auto mt-2 max-w-3xl px-4 py-12 pb-10 md:px-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
