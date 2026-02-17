import React from 'react'

export default function NavLink({ href = '#', children }) {
    return (
        <a href={href} className="nav-link">{children}</a>
    )
}
