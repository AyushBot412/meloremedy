import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero7 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="hero7-max-width thq-section-max-width">
          <div className="hero7-content">
            <h1 className="hero7-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero7-text8">Welcome to MeloREMedy</span>
                </Fragment>
              )}
            </h1>
            <p className="hero7-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero7-text5">
                    Experience the power of AI-driven music therapy to improve
                    your sleep and overall well-being.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero7-actions">
              <div className="hero7-container1">
                <button className="thq-button-filled hero7-button1">
                  <span className="hero7-text3 thq-body-small">
                    {props.action1 ?? (
                      <Fragment>
                        <span className="hero7-text7">Get Started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="hero7-container2">
                <button className="thq-button-outline hero7-button2">
                  <span className="hero7-text4 thq-body-small">
                    {props.action2 ?? (
                      <Fragment>
                        <span className="hero7-text6">Learn More</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero7-max-width {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .hero7-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            max-width: 1000px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero7-text1 {
            text-align: center;
          }
          .hero7-text2 {
            text-align: center;
          }
          .hero7-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero7-container1 {
            display: flex;
            align-items: flex-start;
          }
          .hero7-text3 {
            text-align: center;
          }
          .hero7-container2 {
            display: flex;
            align-items: flex-start;
          }
          .hero7-text4 {
            text-align: center;
          }
          .hero7-text5 {
            display: inline-block;
          }
          .hero7-text6 {
            display: inline-block;
          }
          .hero7-text7 {
            display: inline-block;
          }
          .hero7-text8 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .hero7-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero7-container1 {
              width: 100%;
            }
            .hero7-button1 {
              width: 100%;
            }
            .hero7-container2 {
              width: 100%;
            }
            .hero7-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero7.defaultProps = {
  content1: undefined,
  action2: undefined,
  action1: undefined,
  heading1: undefined,
}

Hero7.propTypes = {
  content1: PropTypes.element,
  action2: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero7
