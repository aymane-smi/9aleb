import React from 'react'
import { NavLink } from 'react-router-dom';
function Links() {
    const urls = [{url: "/search", text: "Search 🔍"},
        {url: "/image", text: "Images 📷"},
        {url: "/video", text: "Videos 📹"},
        {url: "/news", text: "News 📰"},
]
  return (
    <div>
        {urls.map(({url, text})=>(
            <NavLink to={url} activeClassName="text-blue-700 border-b-2 border-b-blue-700 dark:text-gray-300 dark:border-b-gray-300" className="ml-5 dark:text-white">
                {text}
            </NavLink>
        ))}
    </div>
  )
}

export default Links;