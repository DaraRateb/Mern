import React from 'react'
import { Link } from '@reach/router';

const Nav = () => {
    return (
        <div>
            <ul>
            <Link to="/players/addplayer"> <li>Manage Players |</li></Link>
            <Link to="/status/game/:id"><li>Manage Players Status</li></Link>
            </ul>
        </div>
    )
}

export default Nav

