import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/home/Home'
import AboutUs from '../pages/about/About'
import Navbar from '../components/Navbar'
import ContactUs from '../pages/contact/Contact'
import TeamPage from '../pages/team/Page'

const router = createBrowserRouter([
  {
    path: '',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/contact-us', element: <ContactUs /> },
      { path: '/team', element: <TeamPage /> },
    ],
  },
])

export default router
