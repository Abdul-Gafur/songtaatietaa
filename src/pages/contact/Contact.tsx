import { BiSolidMessageAltDetail } from "react-icons/bi"

const ContactUs = () => {
  return (
    <div>
      <div className="m-auto h-[55vh] bg-primary/20 flex items-center justify-center">
        <span>
          <a
            className="flex link font-semibold border-4 border-primary px-8 py-3 rounded-full bg-secondary text-white shadow-xl"
            href="mailto:suthaanita22@gmail.com?subject=Hello&body=Please type your message here... "
          >
            <BiSolidMessageAltDetail size={49}/> Send Us Email
          </a>
        </span>
      </div>
    </div>
  )
}

export default ContactUs
