import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Text } from '@/components/ui/text'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">SGC</div>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
            // isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="text-white lg:flex items-center">
            <li className="mr-4">
              <Link to="/dashboard?show=overwiew" title="ir para dashboard">
                <Text className="text-base text-white">Listar</Text>
              </Link>
            </li>
            <li className="mr-4">
              <Link
                to="/dashboard?show=form"
                title="ir para formulurio de cadastramento de cliente"
              >
                <Text className="text-base text-white">Novo Cliente</Text>
              </Link>
            </li>
            <li className="mr-4">
              <Link
                to="/dashboard?show=routers"
                title="ir para formulurio de cadastramento de cliente"
              >
                <Text className="text-base text-white">Rotas</Text>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
