import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <footer
        className={`footer-footer1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="footer-max-width thq-section-max-width">
          <div className="footer-content"></div>
          <div className="footer-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer-row">
              <span className="thq-body-small">{props.content3}</span>
              <div className="footer-footer-links">
                <span className="footer-text1">
                  {props.text ?? (
                    <Fragment>
                      <span className="footer-text2">
                        <span>
                          M E L O
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="footer-text4">R E M</span>
                        <span> E D Y </span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="footer-image"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer1 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer-max-width {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-content {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: var(--dl-layout-radius-radius4);
          }
          .footer-credits {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-layout-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-row {
            gap: 64px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer-footer-links {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer-text1 {
            align-self: center;
          }
          .footer-image {
            width: 44px;
            height: 44px;
            object-fit: cover;
          }
          .footer-text2 {
            display: inline-block;
            font-weight: 700;
          }
          .footer-text4 {
            color: #8d8d8d;
          }

          @media (max-width: 767px) {
            .footer-content {
              flex-direction: column;
            }
            .footer-row {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .footer-credits {
              gap: 0;
            }
            .footer-row {
              align-items: center;
              justify-content: center;
            }
            .footer-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text: undefined,
  rootClassName: '',
  imageSrc: '/logo.svg',
  content3: 'Frequent this page to see updates soon!',
  imageAlt: 'image',
}

Footer.propTypes = {
  text: PropTypes.element,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  content3: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Footer
