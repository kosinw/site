import Logo from '~components/graphics/Logo'
import Link from 'next/link'
import { HomeIcon, NewspaperIcon, BookmarkIcon, RssIcon, FolderOpenIcon } from '@heroicons/react/solid'
import GithubIcon from '~components/graphics/GithubIcon'
import LinkedInIcon from '~components/graphics/LinkedInIcon'

type SidebarIconProps = {
  className: string
}

type SidebarLinkItem = {
  label: string
  icon: React.FC<SidebarIconProps>
  href: string
}

type SidebarLinkSectionProps = {
  sectionTitle?: string
  items: SidebarLinkItem[]
}

const SidebarLinkSection = ({
  sectionTitle,
  items,
}: SidebarLinkSectionProps) => {
  return (
    <div className="flex w-full flex-col items-center space-y-4">
      {sectionTitle && (
        <span className="text-sm font-bold tracking-tight text-gray-400">
          {sectionTitle}
        </span>
      )}
      <ul className="flex w-full flex-col items-center justify-center space-y-3 text-slate-400">
        {items.map((item) => (
          <li key={item.label} className="flex flex-col">
            <Link href={item.href}>
              <a className="h-full w-full rounded-lg px-2 py-2 transition-colors ease-in-out hover:bg-gray-200 hover:text-slate-500">
                <item.icon className="h-5 w-5" />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const PrimarySidebar = () => {
  return (
    <nav className="sidebar-container justify-center">
      <div className="flex flex-col items-center space-y-12">
        <div className="mt-6 flex items-center justify-center px-4 py-4">
          <Link href="/">
            <a>
              <Logo width={26} height={26} />
            </a>
          </Link>
        </div>
        <SidebarLinkSection
          sectionTitle="Site"
          items={[
            { label: 'Home', icon: HomeIcon, href: '/' },
            { label: 'Writing', icon: NewspaperIcon, href: '/writing' },
            { label: 'Bookmarks', icon: BookmarkIcon, href: '/u' },
            { label: 'Projects', icon: FolderOpenIcon, href: '/projects' },
            { label: 'RSS', icon: RssIcon, href: '/rss.xml' },
          ]}
        />
        <SidebarLinkSection
          sectionTitle="Socials"
          items={[
            {
              label: 'GitHub',
              icon: GithubIcon,
              href: 'https://github.com/kosinw',
            },
            {
              label: 'LinkedIn',
              icon: LinkedInIcon,
              href: 'https://www.linkedin.com/in/kosinw',
            },
          ]}
        />
      </div>
    </nav>
  )
}
