import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const CTA = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="thq-section-max-width">
          <div className="cta-accent2-bg">
            <div className="cta-accent1-bg">
              <div className="cta-container2">
                <div className="cta-content">
                  <span className="thq-heading-2">{props.heading1}</span>
                  <p className="thq-body-large">{props.content1}</p>
                </div>
                <div className="cta-actions">
                  <Link href="/design">
                    <a className="cta-link thq-button-filled">
                      {props.action1}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta-accent2-bg {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent2);
          }
          .cta-accent2-bg:hover {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          .cta-accent1-bg {
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(-2deg) skew(0deg, 0deg);
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent1);
          }
          .cta-container2 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-fourunits);
            border-radius: var(--dl-layout-radius-cardradius);
            padding-right: var(--dl-layout-space-fourunits);
            padding-bottom: var(--dl-layout-space-sixunits);
          }
          .cta-container2:hover {
            color: var(--dl-color-theme-neutral-light);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .cta-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta-actions {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .cta-link {
            text-decoration: none;
          }
          @media (max-width: 767px) {
            .cta-container2 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 479px) {
            .cta-actions {
              flex-wrap: wrap;
              align-self: stretch;
              justify-content: center;
            }
            .cta-link {
              flex: 1;
            }
          }
        `}
      </style>
    </>
  )
}

CTA.defaultProps = {
  heading1: 'Ready to try Meloremedy?',
  content1:
    'Take an in-depth look at the design processes that went into developing and creating this revolutionary application.',
  action1: 'See Designs',
}

CTA.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
}

export default CTA
