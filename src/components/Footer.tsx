import { IoCallSharp, IoLocationSharp } from 'react-icons/io5'
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
  return (
    <div className='bg-secondary min-h-80 '>
      <ul className='flex flex-wrap items-start gap-10 p-6 text-white'>
        {contacts.map((contact, index) => (
          <li key={index} className='flex items-start'>
            <span className='mt-1 mr-2 text-3xl'>{contact.icon}</span>
            <div>
              <h2 className='font-bold text-lg'>{contact.title}</h2>
              <p>{contact.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MainFooter
