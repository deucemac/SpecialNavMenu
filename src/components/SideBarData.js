import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const sideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text'
  },
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'User',
        path: '/overview/user',
        icon: <IoIcons.IoIosPaper/>
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper/>
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    className: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    className: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    className: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    className: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    className: 'nav-text'
  },
]