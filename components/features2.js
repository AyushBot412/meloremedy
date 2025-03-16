import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features2-container2 thq-section-max-width">
          <div className="features2-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features2-tab-horizontal1"
            >
              <div className="features2-divider-container1">
                {activeTab === 0 && (
                  <div className="features2-container3"></div>
                )}
              </div>
              <div className="features2-content1">
                <h2 className="thq-heading-2">{props.feature1Title1}</h2>
                <span className="thq-body-small">
                  {props.feature1Description1}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features2-tab-horizontal2"
            >
              <div className="features2-divider-container2">
                {activeTab === 1 && (
                  <div className="features2-container4"></div>
                )}
              </div>
              <div className="features2-content2">
                <h2 className="thq-heading-2">{props.feature2Title1}</h2>
                <span className="thq-body-small">
                  {props.feature2Description1}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features2-tab-horizontal3"
            >
              <div className="features2-divider-container3">
                {activeTab === 2 && (
                  <div className="features2-container5"></div>
                )}
              </div>
              <div className="features2-content3">
                <h2 className="thq-heading-2">{props.feature3Title1}</h2>
                <span className="thq-body-small">
                  {props.feature3Description1}
                </span>
              </div>
            </div>
          </div>
          <div className="features2-image-container">
            {activeTab === 0 && (
              <img
                alt="add data pic"
                src="/add%20data-1400w.png"
                className="features2-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt="data pic"
                src="/data-1400w.png"
                className="features2-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt="home page pic"
                src="/home%20page-1400w.png"
                className="features2-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features2-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features2-tabs-menu {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features2-tab-horizontal1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features2-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features2-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features2-content1 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features2-tab-horizontal2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features2-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features2-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features2-content2 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features2-tab-horizontal3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features2-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features2-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features2-content3 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features2-image-container {
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .features2-image1 {
            width: 488px;
            height: 337px;
            object-fit: cover;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features2-image2 {
            width: 488px;
            height: 337px;
            object-fit: cover;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features2-image3 {
            width: 488px;
            height: 337px;
            object-fit: cover;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          @media (max-width: 991px) {
            .features2-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Features2.defaultProps = {
  feature1Title1: 'Add Data',
  feature3Description1:
    'Each night of restful sleep helps you plant, grow, and nurture a beautiful virtual garden.',
  feature2Title1: 'View Your Logs',
  feature2Description1:
    'View your data with useful statistics to learn about your listening and sleeping patterns.',
  feature1Description1:
    'Effortlessly log your sleep hours and gain insights into your sleep quality, helping you develop healthier sleeping habits.',
  feature3Title1: 'Have Fun!',
}

Features2.propTypes = {
  feature1Title1: PropTypes.string,
  feature3Description1: PropTypes.string,
  feature2Title1: PropTypes.string,
  feature2Description1: PropTypes.string,
  feature1Description1: PropTypes.string,
  feature3Title1: PropTypes.string,
}

export default Features2
