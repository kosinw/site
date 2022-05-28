import type { NextPage } from 'next'
import Link from 'next/link'

import { Hyperlink } from '~components/common/Hyperlink'
import { Thumbnail } from '~components/common/Thumbnail'

type HomeSectionProps = {
  sectionTitle?: string
  children: JSX.Element
  desktop?: boolean
}

const HomeSection = ({
  sectionTitle = '',
  children,
  desktop = false,
}: HomeSectionProps) => {
  return (
    <div
      className={`md:grid ${
        desktop ? 'hidden' : 'grid'
      } grid-cols-1 items-start gap-6 md:grid-cols-12`}
    >
      <h4
        className={`md:inline ${
          sectionTitle ? 'inline' : 'hidden'
        } text-md col-span-2 pt-8 font-extrabold text-foreground md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40`}
      >
        {sectionTitle}
      </h4>
      <div className="col-span-10">{children}</div>
    </div>
  )
}

type HomeLinkProps = {
  name: string | JSX.Element
  href: string
  extra?: string
}

const HomeLink = ({ name, href, extra }: HomeLinkProps) => {
  return (
    <Link href={href}>
      <a className="group flex items-center space-x-4" target="_blank">
        <strong className="flex-none font-medium text-foreground group-hover:text-primary">
          {name}
        </strong>
        <span className="w-full shrink border border-t border-dotted border-gray-400" />
        {extra && (
          <span className="hidden md:inline flex-none text-sm text-foreground text-opacity-40">
            {extra}
          </span>
        )}
      </a>
    </Link>
  )
}

type HomeLinkTableProps = {
  links: HomeLinkProps[]
}

const HomeLinkTable = ({ links }: HomeLinkTableProps) => {
  return (
    <div className="flex flex-col space-y-2">
      {links.map((link) => (
        <HomeLink key={link.href} {...link} />
      ))}
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div className="space-y-8 pb-24 md:space-y-16">
      <HomeSection>
        <Thumbnail
          layout="responsive"
          alt="Photo of Kosi Nwabueze"
          priority
          height="380"
          width="678"
          src="/images/me.jpg"
        />
      </HomeSection>
      <HomeSection>
        <div className="text-md prose text-foreground">
          <p>
            Hi, I'm Kosi.
          </p>
          <p>
            I am currently a sophomore majoring in electrical engineering and
            computer science at the{' '}
            <Hyperlink href="https://web.mit.edu/directory/?id=kosinw&d=mit.edu">
              Massachusetts Institute of Technology
            </Hyperlink>
            .
          </p>
          <p>
            Currently, I am working as an instructor at{' '}
            <Hyperlink href="http://www.buildcoolrobots.com/">
              Great Minds Robotics
            </Hyperlink>
            . In the past, I worked as a software engineer intern at{' '}
            <Hyperlink href="https://openx.com">OpenX</Hyperlink> where I built
            a{' '}
            <Hyperlink href="https://github.com/kosinw/objviz">
              network visualization tool
            </Hyperlink>{' '}
            for debugging large amounts of database objects and relationships.
          </p>
          <p>
            Outside of school, I enjoy working on projects in{' '}
            <Hyperlink href="https://github.com/kosinw/mochi">
              programming languages
            </Hyperlink>{' '}
            and{' '}
            <Hyperlink href="https://github.com/kosinw/Castor">
              computer systems
            </Hyperlink>
            . My hobbies include discovering new music, web design, and writing.
            I like to take beachside bike rides and I am currently learning how
            to play the alto saxophone.
          </p>
        </div>
      </HomeSection>
      {/* <HomeSection sectionTitle="Links">
        <HomeLinkTable
          links={[
            {
              name: 'GitHub',
              href: 'https://github.com/kosinw',
              extra: 'Follow',
            },
            {
              name: 'LinkedIn',
              href: 'https://www.linkedin.com/in/kosinw',
              extra: 'Connect',
            },
            {
              name: 'Resume',
              href: 'https://kosinw.com/resume',
              extra: 'Read',
            },
            {
              name: 'Mail',
              href: 'mailto:kosinw@mit.edu',
              extra: 'Send',
            },
          ]}
        />
      </HomeSection> */}
      <HomeSection sectionTitle="Work">
        <HomeLinkTable
          links={[
            {
              name: 'Great Minds Robotics',
              href: 'https://buildcoolrobots.com',
              extra: 'Summer 2022',
            },
            {
              name: 'OpenX',
              href: 'https://openx.com',
              extra: 'Summer 2021',
            },
            {
              name: 'USC QED Lab',
              href: 'https://qed.usc.edu',
              extra: 'Summer 2020',
            },
          ]}
        />
      </HomeSection>
      <HomeSection sectionTitle="Coursework">
        <HomeLinkTable
          links={[
            {
              name: (
                <span>
                  Circuits and Electronics<sup>6.2000</sup>
                </span>
              ),
              href: 'https://eecs6002.mit.edu/',
              extra: "Fall '22",
            },
            {
              name: (
                <span>
                  Computation Structures<sup>6.1910</sup>
                </span>
              ),
              href: 'https://6004.mit.edu/web/',
              extra: "Fall '22",
            },
            {
              name: (
                <span>
                  Large-scale Symbolic Systems<sup>6.905</sup>
                </span>
              ),
              href: 'https://groups.csail.mit.edu/mac/users/gjs/6.945/index.html',
              extra: "Spring '22",
            },
            {
              name: (
                <span>
                  Software Construction<sup>6.031</sup>
                </span>
              ),
              href: 'https://web.mit.edu/6.031/www/sp22/',
              extra: "Spring '22",
            },
            {
              name: (
                <span>
                  Fundamentals of Programming<sup>6.009</sup>
                </span>
              ),
              href: 'https://py.mit.edu/',
              extra: "Fall '21",
            },
          ]}
        />
      </HomeSection>
      <HomeSection sectionTitle="Papers">
        <HomeLinkTable
          links={[
            {
              name: 'A Scheme Implementation for WebAssembly',
              href: 'https://mochi-scheme.github.io/paper.pdf',
              extra: "Spring '22",
            },
          ]}
        />
      </HomeSection>
    </div>
  )
}

export default Home
