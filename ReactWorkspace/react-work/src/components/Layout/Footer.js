import React, { useEffect } from 'react'

const Footer = () => {
    useEffect(() => {
        console.log('Footer loaded');
    }, [])
    return (
        <div style={{ backgroundColor: 'grey', textAlign: 'center' }}>Footer</div>
    )
}

export default Footer