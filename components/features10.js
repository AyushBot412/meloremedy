import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features10 = (props) => {
  return (
    <>
      <div className="features10-layout300 thq-section-padding">
        <div className="features10-max-width thq-flex-column thq-section-max-width">
          <div className="features10-section-title thq-flex-column">
            <h2 className="thq-heading-2 features10-text10">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features10-text26">
                    Initial Survey Results
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="features10-text11 thq-body-large">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features10-text41">
                    Discover the research that went into creating MeloREMedy
                    into the unique and effective tool for improving sleep
                    quality that it is today.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="features10-content1 thq-grid-auto-300">
            <div className="features10-feature11 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="features10-feature1-image1 thq-img-ratio-4-3"
              />
              <h3 className="features10-feature1-title1 thq-heading-3">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features10-text38">
                      Important Features
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features10-text40">
                      Most users mentioned that the most important feature for
                      them is getting good music recommendations, which is why
                      we used AI.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features10-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features10-feature2-image thq-img-ratio-4-3"
              />
              <h3 className="thq-heading-3">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features10-text18">Calming Music</span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features10-text32">
                      <span>
                        The majority of users also mentioned that they use music
                        as a way to help regulate their emotions.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features10-feature31 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features10-feature3-image1 thq-img-ratio-4-3"
              />
              <h3 className="thq-heading-3">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features10-text19">
                      <span>Listening Environments</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features10-text29">
                      <span>
                        When given multiple options, around 22 out of 26
                        respondents mentioned they listen to music while
                        commuting or just for pleasure.
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features10-feature32 thq-flex-column">
              <img
                alt={props.feature3ImageAlt3}
                src={props.feature3ImageSrc3}
                className="features10-feature3-image2 thq-img-ratio-4-3"
              />
              <h3 className="thq-heading-3">
                {props.feature3Title3 ?? (
                  <Fragment>
                    <span className="features10-text23">
                      <span>Listening Music</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature3Description3 ?? (
                  <Fragment>
                    <span className="features10-text15">
                      <span>
                        Our respondents tend to listen to music varyingly,
                        however, nearly 40% of them listen to around 2-4 hours
                        per day.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features10-feature33 thq-flex-column">
              <img
                alt={props.feature3ImageAlt1}
                src={props.feature3ImageSrc1}
                className="features10-feature3-image3 thq-img-ratio-4-3"
              />
              <h3 className="thq-heading-3">
                {props.feature3Title1 ?? (
                  <Fragment>
                    <span className="features10-text22">
                      Sleep Tracker Usage
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature3Description1 ?? (
                  <Fragment>
                    <span className="features10-text12">
                      <span>
                        Out of 26 responders, only 1 person answered that they
                        currently used a sleep tracker.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features10-feature34 thq-flex-column">
              <img
                alt={props.feature3ImageAlt2}
                src={props.feature3ImageSrc2}
                className="features10-feature3-image4 thq-img-ratio-4-3"
              />
              <h3 className="thq-heading-3">
                {props.feature3Title2 ?? (
                  <Fragment>
                    <span className="features10-text39">
                      Sleep Tracker Improvement
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature3Description2 ?? (
                  <Fragment>
                    <span className="features10-text28">
                      The results on this didn&apos;t seem to favor the sleep
                      tracker, as only 7.7% of users said a sleep tracker
                      benefited them.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="features10-content2 thq-grid-auto-300">
            <div className="features10-feature12 thq-flex-column">
              <img
                alt={props.feature1ImageAlt1}
                src={props.feature1ImageSrc1}
                className="features10-feature1-image2 thq-img-ratio-4-3"
              />
              <h3 className="features10-feature1-title2 thq-heading-3">
                {props.feature1Title1 ?? (
                  <Fragment>
                    <span className="features10-text35">
                      <span>Sleeping Hours</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="thq-body-small">
                {props.feature1Description1 ?? (
                  <Fragment>
                    <span className="features10-text27">
                      Most respondents answered that they were getting around
                      the recommend hours of sleep, 65.4% got 6-7 hours and
                      23.1% got 8 or more hours.
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
          .features10-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features10-max-width {
            gap: var(--dl-layout-space-threeunits);
            align-items: center;
          }
          .features10-section-title {
            align-items: center;
          }
          .features10-text11 {
            width: 798px;
            text-align: center;
          }
          .features10-content1 {
            align-self: stretch;
            align-items: center;
            grid-template-columns: 1fr 1fr;
          }
          .features10-feature11 {
            align-items: flex-start;
          }
          .features10-feature1-image1 {
            aspect-ratio: auto;
          }
          .features10-feature1-title1 {
            text-align: center;
          }
          .features10-feature2 {
            align-items: flex-start;
          }
          .features10-feature2-image {
            aspect-ratio: auto;
          }
          .features10-feature31 {
            align-items: flex-start;
          }
          .features10-feature3-image1 {
            aspect-ratio: auto;
          }
          .features10-feature32 {
            align-items: flex-start;
          }
          .features10-feature3-image2 {
            aspect-ratio: auto;
          }
          .features10-feature33 {
            align-items: flex-start;
          }
          .features10-feature3-image3 {
            aspect-ratio: auto;
          }
          .features10-feature34 {
            align-items: flex-start;
          }
          .features10-feature3-image4 {
            aspect-ratio: auto;
          }
          .features10-content2 {
            align-self: stretch;
            align-items: center;
            place-items: center;
          }
          .features10-feature12 {
            width: 50%;
            align-items: flex-start;
          }
          .features10-feature1-image2 {
            aspect-ratio: auto;
          }
          .features10-feature1-title2 {
            text-align: center;
          }
          .features10-text12 {
            display: inline-block;
          }
          .features10-text15 {
            display: inline-block;
          }
          .features10-text18 {
            display: inline-block;
          }
          .features10-text19 {
            display: inline-block;
          }
          .features10-text22 {
            display: inline-block;
          }
          .features10-text23 {
            display: inline-block;
          }
          .features10-text26 {
            display: inline-block;
          }
          .features10-text27 {
            display: inline-block;
          }
          .features10-text28 {
            display: inline-block;
          }
          .features10-text29 {
            display: inline-block;
          }
          .features10-text32 {
            display: inline-block;
          }
          .features10-text35 {
            display: inline-block;
          }
          .features10-text38 {
            display: inline-block;
          }
          .features10-text39 {
            display: inline-block;
          }
          .features10-text40 {
            display: inline-block;
          }
          .features10-text41 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features10-section-title {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .features10-section-title {
              width: auto;
            }
            .features10-text10 {
              text-align: center;
            }
            .features10-feature2 {
              width: auto;
            }
            .features10-feature31 {
              width: auto;
            }
            .features10-feature32 {
              width: auto;
            }
            .features10-feature33 {
              width: auto;
            }
            .features10-feature34 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .features10-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Features10.defaultProps = {
  feature3Description1: undefined,
  feature3Description3: undefined,
  feature2Title: undefined,
  feature3ImageSrc2: '/survey5.svg',
  feature3Title: undefined,
  feature3ImageSrc: '/survey3.svg',
  feature3Title1: undefined,
  feature3Title3: undefined,
  sectionTitle: undefined,
  feature3ImageSrc3: '/survey4.svg',
  feature1ImageAlt1: 'Personalized Playlists Image',
  feature1Description1: undefined,
  feature3Description2: undefined,
  feature1ImageSrc: '/survey1-1400w.png',
  feature2ImageAlt: 'Sleep Tracking Image',
  feature3Description: undefined,
  feature1ImageSrc1: '/survey7-700w.png',
  feature3ImageSrc1: '/survey6.svg',
  feature2Description: undefined,
  feature1ImageAlt: 'Personalized Playlists Image',
  feature2ImageSrc: '/survey2.svg',
  feature3ImageAlt1: 'Gamified Experience Image',
  feature3ImageAlt2: 'Gamified Experience Image',
  feature1Title1: undefined,
  feature1Title: undefined,
  feature3ImageAlt: 'Gamified Experience Image',
  feature3Title2: undefined,
  feature1Description: undefined,
  feature3ImageAlt3: 'Gamified Experience Image',
  sectionDescription: undefined,
}

Features10.propTypes = {
  feature3Description1: PropTypes.element,
  feature3Description3: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3ImageSrc2: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature3Title1: PropTypes.element,
  feature3Title3: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature3ImageSrc3: PropTypes.string,
  feature1ImageAlt1: PropTypes.string,
  feature1Description1: PropTypes.element,
  feature3Description2: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1ImageSrc1: PropTypes.string,
  feature3ImageSrc1: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3ImageAlt1: PropTypes.string,
  feature3ImageAlt2: PropTypes.string,
  feature1Title1: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3Title2: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3ImageAlt3: PropTypes.string,
  sectionDescription: PropTypes.element,
}

export default Features10
