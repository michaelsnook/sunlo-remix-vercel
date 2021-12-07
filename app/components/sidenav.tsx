import { Link, NavLink } from 'remix'

export default function Sidenav() {
  return (
    <div className="h-screen w-40 bg-blue-700 text-white py-1 px-3 flex flex-col gap-8">
      <nav aria-label="Main navigation" className="">
        <Link to="/" title="Sunlo" className="font-bold">
          Sunlo
        </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <footer>
        <nav>
          <p className="font-bold">Site footer nav</p>
          <ul>
            <li><NavLink to="/languages">Languages</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
            <li><NavLink to="/admin">Admin</NavLink></li>
            <li><NavLink to="/admin/new">New post</NavLink></li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}