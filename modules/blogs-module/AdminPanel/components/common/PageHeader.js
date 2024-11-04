import React from 'react'
import { HamBurger, Header } from '../common/UiElements'
import { AdminContext } from '../../context/AdminContext';
import { useRouter } from 'next/router'

const PageHeader = () => {
    const { handleHideSidebar } = React.useContext(AdminContext);
    const router = useRouter();
    const hamburgerIcon = 'https://ik.imagekit.io/sahildhingra/hamburger-dark.png';

    return (
        <Header>
            <HamBurger onClick={handleHideSidebar}>
                <img src={hamburgerIcon} alt='hamburger-icon' />
            </HamBurger>
            <h1>Blogs</h1>
            <button
                onClick={() => router.push('/admin-panel/blogs/create-new')}
                className='btn-primary btn-outlined'
            >Create New</button>
        </Header>
    )
}

export default PageHeader