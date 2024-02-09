import React, { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import NavDropDown from './NavDropDown'

Modal.setAppElement('#root')

//create search page and logic

const NavigationMenu = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const customStyles = {
    content: {
      left: '5px',
      bottom: 'auto',
      border: 'none',
      borderRadius: '8px',
      overflow: 'visible',
      zIndex: 1000
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0)'
    }
  }

  function openModal() {
    setIsOpen(!modalIsOpen)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <div className='flex justify-between gap-6 items-center'>
        <button
          onClick={openModal}
          className='text-blue-500 text-5xl'
          style={{
            transform: modalIsOpen ? 'rotate(270deg)' : 'rotate(0deg)',
            transition: modalIsOpen ? '500ms' : '500ms'
          }}
        >
          {!modalIsOpen ? <IoMenu /> : <IoClose />}
        </button>
        <Link to='/' className='text-[#2ea2d4] text-sm md:text-4xl font-bold '>
          MegaMart
        </Link>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <NavDropDown />
      </Modal>
    </>
  )
}

export default NavigationMenu
