import { BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { IoCallSharp, IoLocationSharp } from 'react-icons/io5'
import { LiaLinkedin } from 'react-icons/lia'
import { MdOutlineAlternateEmail } from 'react-icons/md'

const MainFooter = () => {
  const contacts = [
    {
      icon: <IoLocationSharp />,
      title: 'Address',
      description: 'Upper West Region, Lawra District, Zambo',
    },
    {
      icon: <IoCallSharp />,
      title: 'Telephone',
      description: '+233 24 786 8389',
    },
    {
      icon: <MdOutlineAlternateEmail />,
      title: 'Email',
      description: 'suthaanita22@gmail.com',
    },
  ]

  const socialMedia = [
    {
      icon: <FaFacebook />,
      name: 'Facebook',
      link: 'https://www.facebook.com/songtaatietaa',
    },
    {
      icon: <BsTwitterX />,
      name: 'X/Twitter',
      link: 'https://twitter.com/songtaatietaa',
    },
    {
      icon: <LiaLinkedin />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/company/songtaatietaa',
    },
  ]
  return (
    <footer className="bg-secondary">
      <div className="flex flex-wrap items-start gap-8">
        <ul className="flex flex-wrap items-start gap-10 p-6 text-white">
          {contacts.map((contact, index) => (
            <li key={index} className="flex items-start">
              <span className="mt-1 mr-2 text-3xl">{contact.icon}</span>
              <div>
                <h2 className="font-bold text-lg">{contact.title}</h2>
                <p>{contact.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className=" text-white p-6">
          <h2>Follow us on: </h2>
          <ul className="flex flex-wrap items-start gap-10 p-6 text-white">
            {socialMedia.map((media, index) => (
              <li key={index} className="flex items-start">
                <a href={media.link} className="border rounded-xl p-2 w-28">
                  <span className="mt-1 mr-2 text-3xl">{media.icon}</span>
                  <h2 className="font-bold text-lg">{media.name}</h2>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>{' '}
      <div className="relative z-10 mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        <p className="text-gray-400 bg-white rounded-full px-2 w-fit mx-auto">
          &copy; {new Date().getFullYear()} Song-Taa Tie-Taa Company. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default MainFooter
