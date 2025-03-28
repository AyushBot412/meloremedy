import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navbar = (props) => {
  return (
    <>
      <header className={`navbar-container ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navbar-navbar-interactive">
          <Link href="/">
            <a className="navbar-link6">
              <img
                alt="Meloremedy Logo"
                src="/logo.svg"
                className="navbar-image1"
              />
            </a>
          </Link>
          <Link href="/">
            <a className="navbar-link7">
              {props.text ?? (
                <Fragment>
                  <span className="navbar-text1">
                    <span>
                      M E L O
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="navbar-text3">R E M</span>
                    <span> E D Y </span>
                  </span>
                </Fragment>
              )}
            </a>
          </Link>
          <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
            <nav className="navbar-links1">
              <Link href="/">
                <a className="navbar-link8 thq-link thq-body-small">
                  {props.link1}
                </a>
              </Link>
              <Link href="/design">
                <a className="navbar-link9 thq-link thq-body-small">
                  {props.link42}
                </a>
              </Link>
              <Link href="/research">
                <a className="navbar-link10 thq-link thq-body-small">
                  {props.link52}
                </a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div className="navbar-nav">
              <div className="navbar-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar-logo"
                />
                <div data-thq="thq-close-menu" className="navbar-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-links2">
                <span className="thq-link thq-body-small">{props.link1}</span>
                <span className="thq-link thq-body-small">{props.link2}</span>
                <span className="thq-link thq-body-small">{props.link3}</span>
                <span className="thq-link thq-body-small">{props.link4}</span>
                <span className="thq-link thq-body-small">{props.link5}</span>
              </nav>
            </div>
            <div className="navbar-buttons">
              <button className="thq-button-filled">Login</button>
              <button className="thq-button-outline">Register</button>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .navbar-link6 {
            display: contents;
          }
          .navbar-image1 {
            height: 3rem;
            text-decoration: none;
          }
          .navbar-link7 {
            text-decoration: none;
          }
          .navbar-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar-links1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar-link8 {
            text-decoration: none;
          }
          .navbar-link9 {
            text-decoration: none;
          }
          .navbar-link10 {
            text-decoration: none;
          }
          .navbar-burger-menu {
            display: none;
          }
          .navbar-icon1 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-layout-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .navbar-logo {
            height: 3rem;
          }
          .navbar-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon3 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-links2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-buttons {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
          }
          .navbar-text1 {
            display: inline-block;
            font-weight: 700;
          }
          .navbar-text3 {
            color: #8d8d8d;
          }

          @media (max-width: 767px) {
            .navbar-navbar-interactive {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar-interactive {
              padding: var(--dl-layout-space-unit);
            }
            .navbar-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  link3: 'Testimonials',
  link2: 'Features',
  link52: 'Research\n',
  action1: '#home',
  rootClassName: '',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link4: 'Design',
  action2: '#testimonials',
  text: undefined,
  link42: 'Design',
  link5: 'Research\n',
  logoAlt: 'Meloremedy Logo',
  link1: 'Home',
}

Navbar.propTypes = {
  link3: PropTypes.string,
  link2: PropTypes.string,
  link52: PropTypes.string,
  action1: PropTypes.string,
  rootClassName: PropTypes.string,
  logoSrc: PropTypes.string,
  link4: PropTypes.string,
  action2: PropTypes.string,
  text: PropTypes.element,
  link42: PropTypes.string,
  link5: PropTypes.string,
  logoAlt: PropTypes.string,
  link1: PropTypes.string,
}

export default Navbar
