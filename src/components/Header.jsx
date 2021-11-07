import React from 'react';
import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useWindowSize from '@/hooks/useWindowsSize';

import logo from '@/images/Francisco Araujo-logo/vector/default-monochrome-white.svg';
import mlogo from '@/images/Francisco Araujo-logo/vector/isolated-monochrome-white.svg';

const Header = () => {
  const dark =
    'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z';
  const light =
    'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z';

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const size = useWindowSize();
  const [icon, setIcon] = useState('');
  const [toggle, setToggle] = useState('');

  useEffect(() => {
    setIcon(localStorage.getItem('theme') === 'light' ? light : dark);
  }, [toggle]);

  useEffect(() => {
    localStorage.getItem('theme') === null &&
      localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <div className='shadow-lg bg-neutral-focus text-neutral-content fixed z-50 w-screen bg-opacity-80 backdrop-filter backdrop-blur-md w-full'>
      <nav className='navbar max-w-screen-2xl mx-auto'>
        <HashLink to='/#hero' className='flex-1 px-2 mx-2'>
          {size.width <= 768 ? (
            <img className='h-6' src={mlogo} alt='' />
          ) : (
            <img className='h-8' src={logo} alt='' />
          )}
        </HashLink>
        <div className='flex-none flex px-2 mx-2'>
          <div className='flex items-center'>
            <HashLink to='/#hero' className='btn btn-ghost btn-sm rounded-btn'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 md:mr-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
              <span className='hidden md:inline'>Inicio</span>
            </HashLink>
            <HashLink
              to='/#projects'
              className='btn btn-ghost btn-sm rounded-btn'
            >
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 md:mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <span className='hidden md:inline'>Proyectos</span>
            </HashLink>
            {/* <Link to='/blog' className='btn btn-ghost btn-sm rounded-btn'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 mr-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
                />
              </svg>
              Blog
            </Link> */}
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 md:mr-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <span className='hidden md:inline'>Acerca de</span>
            </Link>
            {/* <input
            type='checkbox'
            checked={toggle}
            className='toggle toggle-accent'
            onChange={() => setToggle(!toggle)}
            data-toggle-theme='dark,light'
            data-act-class='ACTIVECLASS'
          /> */}
            <div className='divider divider-vertical' />
            <button
              className='btn btn-outline btn-accent btn-sm btn-square'
              data-toggle-theme='light,dark'
              data-act-class='ACTIVECLASS'
              onClick={() => setToggle(!toggle)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d={icon}
                />
              </svg>
            </button>
          </div>
        </div>
        {/* <div className='flex-none lg:hidden'>
          <button className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-6 h-6 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>
        </div> */}
      </nav>
    </div>
  );
};

export default Header;
