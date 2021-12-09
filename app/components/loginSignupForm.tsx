import { useState } from 'react'

const SignupForm = () => (
  <form className="py-4 flex flex-col gap-4">
    <h2 className="text-2xl">Sign up to start learning</h2>
    <div>
      <label htmlFor="nameInput">Name (or nickname)</label>
      <input
        id="nameInput"
        name="name"
        type="text"
        className="rounded border border-gray-400 w-full"
      />
    </div>
    <div>
      <label htmlFor="emailInput">Email</label>
      <input
        placeholder="yourname@email.net"
        id="emailInput"
        name="email"
        type="email"
        className="rounded border border-gray-400 w-full"
      />
    </div>
    <div>
      <label htmlFor="passwordInput">Password</label>
      <input
        placeholder="************"
        id="passwordInput"
        name="password"
        type="password"
        className="rounded border border-gray-400 w-full"
      />
    </div>
    <button
      type="submit"
      className="py-3 px-6 bg-blue-600 hover:bg-blue-800 text-white rounded"
    >
      Submit
    </button>
    <p className="text-sm text-gray-600">
      By signing up you consent to us storing the info you enter.
    </p>
  </form>
)

const LoginForm = () => (
  <form className="py-4 flex flex-col gap-4">
    <h2 className="text-2xl">Log in to your account</h2>
    <div>
      <label htmlFor="emailInput">Email</label>
      <input
        placeholder="yourname@email.net"
        id="emailInput"
        name="email"
        type="email"
        className="rounded border border-gray-400 w-full"
      />
    </div>
    <div>
      <label htmlFor="passwordInput">Password</label>
      <input
        placeholder="************"
        id="passwordInput"
        name="password"
        type="password"
        className="rounded border border-gray-400 w-full"
      />
    </div>
    <button
      type="submit"
      className="py-3 px-6 bg-blue-600 hover:bg-blue-800 text-white rounded"
    >
      Submit
    </button>
  </form>
)

export default function LoginSignupForm() {
  const [active, setActive] = useState('signup')
  return (
    <div className="bg-white text-gray-800 rounded px-4 lg:px-6 py-4">
      <ul className="flex border-b">
        <li className={`${active === 'signup' ? '-mb-px' : ''} mr-1`}>
          <button
            className={`bg-white inline-block py-2 px-4 ${
              active === 'signup'
                ? 'border-l border-t border-r rounded-t text-blue-800'
                : 'text-blue-500 hover:text-blue-800'
            } font-semibold`}
            href="#"
            disabled={active === 'signup'}
            onClick={e => {
              e.preventDefault()
              setActive('signup')
            }}
          >
            Sign up
          </button>
        </li>
        <li className={`${active === 'login' ? '-mb-px' : ''} mr-1`}>
          <button
            className={`bg-white inline-block py-2 px-4 ${
              active === 'login'
                ? 'border-l border-t border-r rounded-t text-blue-800'
                : 'text-blue-500 hover:text-blue-800'
            } font-semibold`}
            disabled={active === 'login'}
            onClick={e => {
              e.preventDefault()
              setActive('login')
            }}
          >
            Log in
          </button>
        </li>
      </ul>
      {active === 'signup' ? <SignupForm /> : <LoginForm />}
    </div>
  )
}
