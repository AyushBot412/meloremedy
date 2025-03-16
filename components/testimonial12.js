import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Testimonial12 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial12-max-width thq-section-max-width">
          <div className="testimonial12-section-title">
            <h2 className="testimonial12-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="testimonial12-text29">Testimonials</span>
                </Fragment>
              )}
            </h2>
            <p className="testimonial12-subtitle thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="testimonial12-text23">
                    <span>Happy reviews from happy users!</span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="testimonial12-container thq-flex-row">
            <div className="testimonial12-content1 thq-flex-column">
              <div className="testimonial12-stars1">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <p className="thq-body-large testimonial12-text10">
                {props.review1 ?? (
                  <Fragment>
                    <span className="testimonial12-text21">
                      MeloREMedy has transformed my sleep routine. The
                      personalized playlists are soothing, and the sleep
                      tracking feature helps me understand my patterns better.
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="testimonial12-avatar1">
                <img
                  alt={props.author1Alt}
                  src={props.author1Src}
                  className="testimonial12-avatar-image1 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="testimonial12-avatar-content1">
                  <span className="testimonial12-text11 thq-body-small">
                    {props.author1Name ?? (
                      <Fragment>
                        <span className="testimonial12-text31">
                          Sarah Johnson
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="thq-body-small">
                    {props.author1Position ?? (
                      <Fragment>
                        <span className="testimonial12-text26">
                          Marketing Manager
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial12-content2 thq-flex-column">
              <div className="testimonial12-stars2">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <p className="thq-body-large testimonial12-text13">
                {props.review2 ?? (
                  <Fragment>
                    <span className="testimonial12-text28">
                      I&apos;ve struggled with insomnia for years, but
                      MeloREMedy has been a game-changer. The music therapy is
                      incredibly calming, and I love waking up to see my virtual
                      garden flourish.
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="testimonial12-avatar2">
                <img
                  alt={props.author2Alt}
                  src={props.author2Src}
                  className="testimonial12-avatar-image2 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="testimonial12-avatar-content2">
                  <span className="testimonial12-text14 thq-body-small">
                    {props.author2Name ?? (
                      <Fragment>
                        <span className="testimonial12-text30">
                          Michael Chen
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="thq-body-small">
                    {props.author2Position ?? (
                      <Fragment>
                        <span className="testimonial12-text20">
                          Software Engineer
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial12-content3 thq-flex-column">
              <div className="testimonial12-stars3">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <p className="thq-body-large testimonial12-text16">
                {props.review3 ?? (
                  <Fragment>
                    <span className="testimonial12-text19">
                      As a teacher, getting quality sleep is crucial. MeloREMedy
                      not only helps me relax before bed but also provides
                      valuable insights into my sleep quality. Highly recommend!
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="testimonial12-avatar3">
                <img
                  alt={props.author3Alt}
                  src={props.author3Src}
                  className="testimonial12-avatar-image3 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="testimonial12-avatar-content3">
                  <span className="testimonial12-text17 thq-body-small">
                    {props.author3Name ?? (
                      <Fragment>
                        <span className="testimonial12-text22">
                          Emily Rodriguez
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="thq-body-small">
                    {props.author3Position ?? (
                      <Fragment>
                        <span className="testimonial12-text27">Teacher</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial12-max-width {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial12-title {
            width: 100%;
            text-align: center;
          }
          .testimonial12-subtitle {
            text-align: center;
          }
          .testimonial12-container {
            gap: var(--dl-layout-space-twounits);
            width: auto;
          }
          .testimonial12-content1 {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-stars1 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial12-avatar1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-avatar-image1 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial12-avatar-content1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-text11 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial12-content2 {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-stars2 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial12-avatar2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-avatar-image2 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial12-avatar-content2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-text14 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial12-content3 {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-stars3 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial12-avatar3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-avatar-image3 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial12-avatar-content3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial12-text17 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial12-text19 {
            display: inline-block;
          }
          .testimonial12-text20 {
            display: inline-block;
          }
          .testimonial12-text21 {
            display: inline-block;
          }
          .testimonial12-text22 {
            display: inline-block;
          }
          .testimonial12-text23 {
            display: inline-block;
          }
          .testimonial12-text26 {
            display: inline-block;
          }
          .testimonial12-text27 {
            display: inline-block;
          }
          .testimonial12-text28 {
            display: inline-block;
          }
          .testimonial12-text29 {
            display: inline-block;
          }
          .testimonial12-text30 {
            display: inline-block;
          }
          .testimonial12-text31 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .testimonial12-container {
              align-items: center;
            }
            .testimonial12-text10 {
              text-align: center;
            }
            .testimonial12-text13 {
              text-align: center;
            }
            .testimonial12-text16 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .testimonial12-max-width {
              padding: var(--dl-layout-space-threeunits);
            }
            .testimonial12-section-title {
              width: 100%;
              max-width: 800px;
            }
            .testimonial12-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .testimonial12-max-width {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .testimonial12-avatar1 {
              flex-direction: column;
            }
            .testimonial12-avatar-content1 {
              align-items: center;
              justify-content: center;
            }
            .testimonial12-avatar2 {
              flex-direction: column;
            }
            .testimonial12-avatar-content2 {
              align-items: center;
              justify-content: center;
            }
            .testimonial12-avatar3 {
              flex-direction: column;
            }
            .testimonial12-avatar-content3 {
              align-items: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial12.defaultProps = {
  review3: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1543096222-72de739f7917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTg5MTk0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1577900232413-d4009bb81e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTg5MTk0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Position: undefined,
  review1: undefined,
  author3Name: undefined,
  content1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1630910561339-4e22c7150093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTg5MTk0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Michael Chen',
  author1Alt: 'Image of Sarah Johnson',
  author1Position: undefined,
  author3Position: undefined,
  review2: undefined,
  heading1: undefined,
  author2Name: undefined,
  author3Alt: 'Image of Emily Rodriguez',
  author1Name: undefined,
}

Testimonial12.propTypes = {
  review3: PropTypes.element,
  author3Src: PropTypes.string,
  author2Src: PropTypes.string,
  author2Position: PropTypes.element,
  review1: PropTypes.element,
  author3Name: PropTypes.element,
  content1: PropTypes.element,
  author1Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Position: PropTypes.element,
  author3Position: PropTypes.element,
  review2: PropTypes.element,
  heading1: PropTypes.element,
  author2Name: PropTypes.element,
  author3Alt: PropTypes.string,
  author1Name: PropTypes.element,
}

export default Testimonial12
