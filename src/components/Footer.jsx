import React from 'react'
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
    return (
        <footer className='bg-dark text-light mt-5 p-4'>
            <div className='d-flex justify-content-center'>
                <h3 className='mt-4'>EXPLORE</h3>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <FaXTwitter className='fs-2 m-2' />
                <FaInstagram className='fs-2 m-2' />
                <FaLinkedinIn className='fs-2 m-2' />
            </div>
            <p className='text-center mt-3'>- Ali Osman Demirkollu - 2024 -</p>
        </footer>
    )
}

export default Footer