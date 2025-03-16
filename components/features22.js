import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features22 = (props) => {
  return (
    <>
      <div
        id={props.features22Id}
        className="features22-layout349 thq-section-padding"
      >
        <div className="features22-max-width thq-section-max-width">
          <div className="features22-container1">
            <h2 id={props.headingId} className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="features22-text30">Features</span>
                </Fragment>
              )}
            </h2>
            <span className="features22-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="features22-text26">
                    MeloREMedy transforms the way you rest with AI-generated
                    playlists, sleep tracking, and mental health check-ins. Earn
                    rewards by improving your sleep and grow a virtual garden as
                    you build healthier habits. Relax, recharge, and wake up
                    refreshed - effortlessly.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features22-container2 thq-grid-auto-300">
            <div className="features22-card1 thq-flex-column thq-card">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features22-image1 thq-img-ratio-1-1 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features22-text27">
                      Customized Playlists
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="features22-text13 thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features22-text22">
                      <span>
                        Have our AI generate a custom made playlist specific to
                        your personal tastes.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features22-card2 thq-flex-column thq-card">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features22-image2 thq-img-ratio-1-1 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features22-text31">
                      Natural Sleep Remedies
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="features22-text15 thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features22-text29">
                      Explore a range of natural musical remedies that promote
                      relaxation and improve sleep quality.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features22-card3 thq-flex-column thq-card">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features22-image3 thq-img-ratio-1-1 thq-img-round"
              />
              <h1 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features22-text28">
                      Easy to Use Sleep Tracker
                    </span>
                  </Fragment>
                )}
              </h1>
              <span className="features22-text17 thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features22-text20">
                      Track your sleep and view your data on easy-to-understand
                      screens.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features22-card4 thq-flex-column thq-card">
              <img
                alt={props.feature2ImageAlt1}
                src={props.feature2ImageSrc1}
                className="features22-image4 thq-img-ratio-1-1 thq-img-round"
              />
              <h2 className="thq-heading-2">
                {props.feature2Title1 ?? (
                  <Fragment>
                    <span className="features22-text25">
                      Gamified Virtual Garden
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="features22-text19 thq-body-small">
                {props.feature2Description1 ?? (
                  <Fragment>
                    <span className="features22-text21">
                      Keep your plants growing healthy and happy by reporting
                      your own healthy sleep.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features22-layout349 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .features22-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features22-container1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .features22-text11 {
            text-align: center;
          }
          .features22-container2 {
            width: 100%;
            position: relative;
          }
          .features22-card1 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary2);
          }
          .features22-image1 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            object-fit: cover;
          }
          .features22-text13 {
            text-align: center;
          }
          .features22-card2 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .features22-image2 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            object-fit: cover;
          }
          .features22-text15 {
            text-align: center;
          }
          .features22-card3 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary2);
          }
          .features22-image3 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            object-fit: cover;
          }
          .features22-text17 {
            text-align: center;
          }
          .features22-card4 {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .features22-image4 {
            width: var(--dl-layout-size-medium);
            height: var(--dl-layout-size-medium);
            object-fit: cover;
          }
          .features22-text19 {
            text-align: center;
          }
          .features22-text20 {
            display: inline-block;
          }
          .features22-text21 {
            display: inline-block;
          }
          .features22-text22 {
            display: inline-block;
          }
          .features22-text25 {
            display: inline-block;
          }
          .features22-text26 {
            display: inline-block;
          }
          .features22-text27 {
            display: inline-block;
          }
          .features22-text28 {
            display: inline-block;
          }
          .features22-text29 {
            display: inline-block;
          }
          .features22-text30 {
            display: inline-block;
          }
          .features22-text31 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features22-max-width {
              flex-direction: column;
            }
            .features22-container1 {
              margin-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .features22-container1 {
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .features22-card1 {
              width: 100%;
            }
            .features22-card2 {
              width: 100%;
            }
            .features22-card3 {
              width: 100%;
            }
            .features22-card4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features22.defaultProps = {
  feature2ImageAlt: 'Natural Plant Remedies Image',
  feature3Description: undefined,
  feature2Description1: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1569230919100-d3fd5e1132f4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHRyYWNrZXJ8ZW58MHx8fHwxNzQxOTM2MzgxfDA&ixlib=rb-4.0.3&w=1400',
  feature3ImageAlt: 'Personalized Plant Care Tips Image',
  feature1ImageAlt: 'Gamified Music Therapy Image',
  feature1Description: undefined,
  feature2Title1: undefined,
  headingId: 'features',
  content1: undefined,
  feature1Title: undefined,
  feature3Title: undefined,
  feature2Description: undefined,
  feature2ImageAlt1: 'Natural Plant Remedies Image',
  feature2ImageSrc1:
    'https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fHBsYW50fGVufDB8fHx8MTc0MTkzNjA2Mnww&ixlib=rb-4.0.3&w=1400',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxzbGVlcHxlbnwwfHx8fDE3NDE5MzYzNjh8MA&ixlib=rb-4.0.3&w=1400',
  features22Id: '',
  heading1: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1616356601595-8af46b090cc4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxwbGF5bGlzdHxlbnwwfHx8fDE3NDE5MzYzNTZ8MA&ixlib=rb-4.0.3&w=1400',
  feature2Title: undefined,
}

Features22.propTypes = {
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2Description1: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2Title1: PropTypes.element,
  headingId: PropTypes.string,
  content1: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2ImageAlt1: PropTypes.string,
  feature2ImageSrc1: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  features22Id: PropTypes.string,
  heading1: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
}

export default Features22
