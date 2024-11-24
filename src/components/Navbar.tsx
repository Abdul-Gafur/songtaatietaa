import { NavLink, Outlet } from 'react-router-dom'
import MainFooter from './Footer'
import { useIsScrollToDocTop } from '../lib/scroll-hooks'

const Navbar = () => {
  const links = [
    { path: '/', name: 'Home' },
    { path: '/contact-us', name: 'Contact Us' },
    { path: '/about-us', name: 'About Us' },
    { path: '/team', name: 'Team' },
  ]
  const quickLinks = [
    { elementId: 'top', text: 'Top' },
    { elementId: 'problem', text: 'Problem' },
    { elementId: 'products', text: 'Products' },
    { elementId: 'validation', text: 'Validation' },
    { elementId: 'audience', text: 'Audience' },
    { elementId: 'investment', text: 'Investment' },
    { elementId: 'competitive-adv', text: 'Advantage' },
    { elementId: 'team', text: 'Team' },
    { elementId: 'directors', text: 'Directors' },
  ]

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector('#' + id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const isTopMost = useIsScrollToDocTop()
  return (
    <div className="m-auto relative">
      <nav
        className={` min-h-[16vh] flex flex-col justify-between ${isTopMost ? 'bg-gradient-to-b from-green-50 to-secondary/50' : ''}`}
      >
        <section className="flex items-center gap-3 justify-center bg-white text-primary w-fit rounded-full px-5 mx-auto">
          {links.map((linkObj, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                `p-3 pb-1 hover:text-white hover:bg-green-600/40 border-b-2 whitespace-nowrap text-sm ${isActive ? 'border-primary' : 'border-transparent'}`
              }
              to={linkObj.path}
            >
              {linkObj.name}
            </NavLink>
          ))}
        </section>

        {/* Quick links */}
        <section
          hidden={window.location.pathname !== '/'}
          className={` justify-end group fixed  right-2 p-1 z-20 pt-6 ${isTopMost ? 'top-[8vh]' : 'top-1'}`}
        >
          <button className="absolute right-2 bg-primary px-2 rounded whitespace-nowrap">
            Go to
          </button>
          <ul className=" bg-secondary shadow-lg grid items-center overflow-x-auto rounded-md h-0 group-hover:h-fit w-0 group-hover:w-fit group-hover:pt-2 transition-all duration-200 ease-linear">
            {quickLinks.map((ql, index) => (
              <li
                onClick={() => handleScrollToSection(ql.elementId)}
                key={index}
                role="button"
                className="border rounded-full px-2 m-2 whitespace-nowrap text-xs"
              >
                {ql.text}
              </li>
            ))}
          </ul>
        </section>
      </nav>

      <main>
        <Outlet />
      </main>

      <MainFooter />
    </div>
  )
}

export default Navbar
