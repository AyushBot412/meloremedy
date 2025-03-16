import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Steps = (props) => {
  return (
    <>
      <div className="steps-container1 thq-section-padding">
        <div className="steps-max-width thq-section-max-width">
          <div className="steps-container2 thq-grid-2">
            <div className="steps-section-header">
              <h2 className="thq-heading-2">Discover the Power of Sleep</h2>
              <p className="thq-body-large">{props.text}</p>
              <div className="steps-actions">
                <Link href="/research">
                  <a className="steps-link thq-button-animated thq-button-filled">
                    <span className="thq-body-small">{props.button1}</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="steps-container3">
              <div className="steps-container4 thq-card">
                <h2 className="steps-text13 thq-heading-2">
                  {props.step1Title}
                </h2>
                <span className="steps-text14 thq-body-small">
                  {props.step1Description}
                </span>
                <label className="steps-text15 thq-heading-3">01</label>
              </div>
              <div className="steps-container5 thq-card">
                <h2 className="thq-heading-2">{props.step2Title}</h2>
                <span className="steps-text17 thq-body-small">
                  {props.step2Description}
                </span>
                <label className="steps-text18 thq-heading-3">02</label>
              </div>
              <div className="steps-container6 thq-card">
                <h2 className="thq-heading-2">{props.step3Title}</h2>
                <span className="steps-text20 thq-body-small">
                  {props.step3Description}
                </span>
                <label className="steps-text21 thq-heading-3">03</label>
              </div>
              <div className="steps-container7 thq-card">
                <h2 className="thq-heading-2">{props.step4Title}</h2>
                <span className="steps-text23 thq-body-small">
                  {props.step4Description}
                </span>
                <label className="steps-text24 thq-heading-3">04</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps-max-width {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps-container2 {
            align-items: start;
          }
          .steps-section-header {
            gap: var(--dl-layout-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps-link {
            text-decoration: none;
          }
          .steps-container3 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps-text13 {
            width: 415px;
          }
          .steps-text14 {
            text-align: center;
          }
          .steps-text15 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps-text17 {
            text-align: center;
          }
          .steps-text18 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps-text20 {
            text-align: center;
          }
          .steps-text21 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container7 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps-text23 {
            text-align: center;
          }
          .steps-text24 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .steps-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps-section-header {
              position: static;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .steps-actions {
              width: 100%;
              align-self: flex-start;
            }
            .steps-container4 {
              width: 100%;
            }
            .steps-container5 {
              width: 100%;
            }
            .steps-container6 {
              width: 100%;
            }
            .steps-container7 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .steps-link {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps.defaultProps = {
  step1Description:
    'Learn how MeloREMedy can revolutionize your sleeping experience with its innovative features and benefits.',
  step3Description:
    'Read the extensive research that guided MeloREMedy to become an innovate application.',
  step2Description:
    'View our unique design methods and see how our features help you maximize the potential of your garden with MeloREMedy.',
  step3Title: 'Research',
  step2Title: 'Design',
  button1: 'View Research',
  step1Title: 'Discover the Power of MeloREMedy',
  step4Description:
    'Read what our satisfied customers have to say about their experience using MeloREMedy for their sleeping needs.',
  text: 'Sleep is one of the most important processes of the human body. It helps the body recover after days of energy spent. However, with the constant stresses of life, people are now experiencing more struggles with sleep deprivation and mental health.',
  step4Title: 'Testimonials',
}

Steps.propTypes = {
  step1Description: PropTypes.string,
  step3Description: PropTypes.string,
  step2Description: PropTypes.string,
  step3Title: PropTypes.string,
  step2Title: PropTypes.string,
  button1: PropTypes.string,
  step1Title: PropTypes.string,
  step4Description: PropTypes.string,
  text: PropTypes.string,
  step4Title: PropTypes.string,
}

export default Steps
