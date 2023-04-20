import React from 'react'

function AppBar() {
  return (
    <div>
        <nav className="flex sm:justify-end space-x-4">
  {[
    ['Dashboard', '/dashboard'],
    ['About', '/about'],
    ['Projects', '/projects'],
    ['Cart', '/cart'],
  ].map(([title, url]) => (
    <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
  ))}
</nav>
    </div>
  )
}

export default AppBar