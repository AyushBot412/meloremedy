import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero9 = (props) => {
  return (
    <>
      <div className="hero9-header30 thq-section-padding">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="hero9-image"
        />
        <div className="hero9-container"></div>
        <div className="hero9-max-width thq-section-max-width">
          <div className="hero9-content">
            <h1 className="hero9-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero9-text4">Welcome to MeloREMedy</span>
                </Fragment>
              )}
            </h1>
            <p className="hero9-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero9-text3">
                    Experience the power of music therapy and digital plant care
                    for improved sleeping
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero9-header30 {
            gap: var(--dl-layout-space-twounits);
          }
          .hero9-image {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .hero9-container {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.7);
          }
          .hero9-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
          }
          .hero9-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero9-text1 {
            text-align: center;
          }
          .hero9-text2 {
            text-align: center;
          }
          .hero9-text3 {
            display: inline-block;
          }
          .hero9-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .hero9-text1 {
              text-align: center;
            }
            .hero9-text2 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Hero9.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1540593463874-59835505e99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTgwOTk1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Meloremedy app',
  content1: undefined,
  heading1: undefined,
}

Hero9.propTypes = {
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero9
