import React, { useEffect } from 'react'

function Header() {
    useEffect(() => {
        console.log('Header loaded');
    }, [])
    return (
        <div style={{ backgroundColor: 'grey', textAlign: 'center' }}>Header</div>
    )
}

export default Header