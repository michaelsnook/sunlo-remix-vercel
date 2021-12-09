export default function LoginSignupForm() {
  return (
    <div className="bg-white text-gray-800 rounded px-6 py-4">
      <ul className="flex border-b">
        <li className="-mb-px mr-1">
          <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">Sign up</a>
        </li>
        <li className="mr-1">
          <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Log in</a>
        </li>
      </ul>
      <form className="py-4 flex flex-col gap-4">
        <div>
          <label htmlFor="nameInput">Name (or nickname)</label>
          <input id="nameInput" name="name" type="text" className="rounded border border-gray-400 w-full" />
        </div>
        <div>
          <label htmlFor="emailInput">Email</label>
          <input id="emailInput" name="email" type="email" className="rounded border border-gray-400 w-full" />
        </div>
        <div>
          <label htmlFor="passwordInput">Password</label>
          <input id="passwordInput" name="password" type="password" className="rounded border border-gray-400 w-full" />
        </div>
        <button type="submit" className="py-3 px-6 bg-blue-600 hover:bg-blue-800 text-white rounded">Submit</button>
        <p className="text-sm text-gray-600">By signing up you consent to us storing the info you enter.</p>
      </form>
    </div>
  )
}