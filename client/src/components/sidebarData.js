import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { FaChartBar, FaTable, FaFilePdf, FaFileCsv } from 'react-icons/fa';
import { FaTachometerAlt } from 'react-icons/fa';
import LogoutButton from './logoutBtn';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <FaTachometerAlt/>,

  },
  {
    title: 'Projects',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'New Project',
        path: '/api/new-project',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'All Projects',
        path: '/api/projects',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Pending Projects',
        path: '/api/pending-projects',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Closed Projects',
        path: '/api/closed-projects',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Partners',
    path: '/api/partners',
    icon: <FaIcons.FaHandshake />
  },
  {
    title: 'Reports',
    path: '/api/reports',
    icon: <FaIcons.FaChartBar />
  },
  {
    title: 'Users',
    path: '/api/get-users',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Feedback',
    path: '/feedback',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  },


];