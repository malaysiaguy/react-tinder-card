import { useEffect, useState } from 'react'
import {
    FaSignOutAlt,
    FaCart,
    FaBookReader,
    FaCaretRight,
    FaAward,
    FaBriefcase,
    FaBiking,
    FaClipboard,
    FaElementor,
    FaEdit,
    FaHome,
    FaHiking,
    FaLeanpub,
    FaSchool,
    FaLink,
    FaMapMarkerAlt,
    FaMedal,
    FaPhone,
    FaPortrait,
    FaPeopleCarry,
    FaReadme,
    FaTrashAlt,
    FaRegUser,
    FaRegFileAlt,
    FaSignInAlt,
    FaHistory
} from 'react-icons/fa'
import Home from '../pages/Home'
import Summary from '../pages/Summary'
import ActivitySummary from '../pages/ActivitySummary'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap'

function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isDropdown, setIsDropdown] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleDropdown = () => {
        setIsDropdown(!isDropdown)
    }

    const authLinks = (
        <Nav className='ms-auto' navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Menu
                </DropdownToggle>
                <DropdownMenu end className='bg-dark'>
                    <DropdownItem>
                        <a exact='true'
                            style={{ color: 'grey', textDecoration: 'none' }}
                            href='/'>
                                <FaHome /> Home
                        </a>
                    </DropdownItem>
{/*                    <DropdownItem divider /> */}
                    <DropdownItem>
                        <a
                            style={{ color: 'grey', textDecoration: 'none' }}
                            href='/history'>
                            <FaHistory /> History
                        </a>
                    </DropdownItem>
                    <DropdownItem>
                        <a
                            style={{ color: 'grey', textDecoration: 'none' }}
                            href={'/activity'}>
                            <FaHiking /> Activity
                        </a>
                    </DropdownItem>
                    <DropdownItem>
                        <a
                            style={{ color: 'grey', textDecoration: 'none' }}
                            href='/experience'>
                            <FaBriefcase /> Experience
                        </a>
                    </DropdownItem>
                    <DropdownItem>
                        <a
                            style={{ color: 'grey', textDecoration: 'none' }}
                            href='/honorable'>
                            <FaAward /> Achievement
                        </a>
                    </DropdownItem>
                    <DropdownItem>
                        <a
                            style={{ color: 'grey', textDecoration: 'none' }}
                            href='/summary'>
                            <FaElementor /> Summary
                        </a>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
    )

    return (
            <Navbar className='bgImage' color='dark' dark expand='lg' fixed-top='true'>
                <NavbarBrand href='#' left='true' className='navbar-primary'>
                    <Nav className='ml-auto ps-5'><h4 className='text-warning'>
                        My Life Journey</h4><span className='lead mx-2'>starts from here ... </span>
                    </Nav>
                    <Nav className='ml-auto ps-5'><h4 className='text-info'>
                        我的生命历程</h4><span className='text-danger lead mx-2'>由此开始 ... </span>
                    </Nav>
                    <Nav className='ml-auto ps-5'><h4 className='text-success'>
                        Perjalanan Hidup Saya</h4><span className='text-warning lead mx-2'>bermula dari sini ... </span>
                    </Nav>
                </NavbarBrand>
                <NavbarToggler collapse='true' target='#navmenu' onClick={handleToggle} />
                <Collapse isOpen={isOpen} id='navmenu' className='px-5' navbar>
                    <div className='navbar-text ms-auto'>
                        <strong>
                            Welcome {' to '}
                            <span>
                                <a href='/profile' style={{ color: 'yellow', textDecoration: 'none' }}>
                                    {/* user ? `${user.name}` : '' */}
                                    Malaysiaguy
                                </a>
                            </span>
                             {' '}website
                        </strong>
                    </div>
                    { authLinks }
                </Collapse>
            </Navbar>
    )
}

export default AppNavbar