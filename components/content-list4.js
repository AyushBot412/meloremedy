import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContentList4 = (props) => {
  return (
    <>
      <div className="content-list4-container thq-section-padding">
        <div className="content-list4-max-width thq-flex-column thq-section-max-width">
          <div className="content-list4-content2 thq-flex-column">
            <ul className="content-list4-ul1 thq-flex-column">
              <li className="content-list4-li10 thq-flex-column list-item">
                <h2 className="content-list4-heading7 thq-heading-2">
                  {props.heading7 ?? (
                    <Fragment>
                      <span className="content-list4-text20">
                        Background Research
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="content-list4-content7 thq-body-small">
                  {props.content7 ?? (
                    <Fragment>
                      <span className="content-list4-text14">
                        Read through some of the background research that
                        inspired MeloREMedy to be what it is today.
                      </span>
                    </Fragment>
                  )}
                </p>
                <ul className="content-list4-ul2 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading8 ?? (
                        <Fragment>
                          <span className="content-list4-text21">
                            Music as Medicine
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content2 ?? (
                        <Fragment>
                          <span className="content-list4-text16">
                            This has been a long-standing, non-invasive, and
                            inexpensive method for treating individuals with
                            insomnia. Given that sleep is a critical part of
                            everyday life, approximately 30 to 40 percent of
                            adults in the United States struggle with some form
                            of irregular sleep, and 8.4% consistently take sleep
                            medications
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading9 ?? (
                        <Fragment>
                          <span className="content-list4-text25">
                            <span>Sleep Requirements</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content9 ?? (
                        <Fragment>
                          <span className="content-list4-text35">
                            Within the pivotal years 18-25-year-olds experience,
                            the typical emerging and exiting college student
                            needs adequate sleep for productive brain
                            functioning. Although busy schedules often interfere
                            with prioritizing quality sleep, researchers have
                            continuously shown that disruptive sleep routines
                            can seriously affect school, work, and physical and
                            mental health.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading91 ?? (
                        <Fragment>
                          <span className="content-list4-text22">
                            <span>Reality of College Students</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content91 ?? (
                        <Fragment>
                          <span className="content-list4-text11">
                            Many students get far less than recommended, with 70
                            to 96 percent of college students receiving less
                            than eight hours of sleep per night and over 50
                            percent sleeping less than seven. Through the use of
                            music as medicine, a personalized approach to
                            enhance sleep quality can assist students across the
                            nation.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="content-list4-content10 thq-flex-column">
            <ul className="content-list4-ul3 thq-flex-column">
              <li className="content-list4-li14 thq-flex-column list-item">
                <h2 className="content-list4-heading11 thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="content-list4-text32">
                        <span>
                          Competitive Analysis
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
                </h2>
                <p className="content-list4-content11 thq-body-small">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="content-list4-text17">
                        <span>
                          View the competitive analysis done on existing
                          solutions in the market.
                        </span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </p>
                <ul className="content-list4-ul4 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading3 ?? (
                        <Fragment>
                          <span className="content-list4-text29">Spotify</span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content3 ?? (
                        <Fragment>
                          <span className="content-list4-text15">
                            The AI Playlist on Spotify generates a radio after
                            analyzing your music preference/categorizes by
                            genre/mood.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading4 ?? (
                        <Fragment>
                          <span className="content-list4-text30">
                            Nursing Study
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content4 ?? (
                        <Fragment>
                          <span className="content-list4-text13">
                            A study conducted in the Wiley Online Library
                            compared classical music, audiobooks, and no music
                            on improving student sleep quality - they found that
                            classical music showed positive results.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading5 ?? (
                        <Fragment>
                          <span className="content-list4-text12">
                            American Music Therapy Association
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content5 ?? (
                        <Fragment>
                          <span className="content-list4-text31">
                            The AMTA is a nonprofit association who aims to
                            bring awareness to the advantages of music therapy
                            and help increase accessibility to high quality
                            music therapy;
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading6 ?? (
                        <Fragment>
                          <span className="content-list4-text10">
                            UCLA Health
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content6 ?? (
                        <Fragment>
                          <span className="content-list4-text28">
                            They provide a variety of different music therapy
                            treatments such as &quot;neonatal intensive care
                            unit (NICU) music therapy, neurologic music therapy
                            and rehabilitative music therapy.”
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="content-list4-content12 thq-flex-column">
            <ul className="content-list4-ul5 thq-flex-column">
              <li className="content-list4-li19 thq-flex-column list-item">
                <h2 className="content-list4-heading12 thq-heading-2">
                  {props.heading14 ?? (
                    <Fragment>
                      <span className="content-list4-text36">
                        <span>Research Findings</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="content-list4-content13 thq-body-small">
                  {props.content14 ?? (
                    <Fragment>
                      <span className="content-list4-text39">
                        <span>
                          From our survey, we found that majority of our
                          responders (ages 18-25) receives 6-7 hours of sleep
                          per night!
                        </span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </p>
                <ul className="content-list4-ul6 thq-flex-column">
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading31 ?? (
                        <Fragment>
                          <span className="content-list4-text42">
                            User Interview Preferences:
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content31 ?? (
                        <Fragment>
                          <span className="content-list4-text43">
                            From our user interviews, we found that users would
                            prefer gamification, a large music selection, music
                            recommendations, and a clear visualization of data
                            in our app.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading41 ?? (
                        <Fragment>
                          <span className="content-list4-text44">
                            Application Focus Areas:
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content41 ?? (
                        <Fragment>
                          <span className="content-list4-text45">
                            We designed our app with a simple layout and game
                            incentive to keep users intrigued, and displayed
                            data in an understandable way.
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h3 className="thq-heading-3">
                      {props.heading51 ?? (
                        <Fragment>
                          <span className="content-list4-text46">
                            External Inspiration:
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-small">
                      {props.content51 ?? (
                        <Fragment>
                          <span className="content-list4-text47">
                            <span>
                              We also took inspiration from other applications
                              and their user interfaces such as Spotify for
                              music playing, playlist creation and
                              recommendations as well as Apple Health for data
                              visualization.
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content-list4-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .content-list4-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .content-list4-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list4-ul1 {
            align-items: flex-start;
          }
          .content-list4-li10 {
            align-items: flex-start;
          }
          .content-list4-heading7 {
            align-self: center;
            text-align: center;
          }
          .content-list4-content7 {
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .content-list4-ul2 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list4-content10 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list4-ul3 {
            align-items: flex-start;
          }
          .content-list4-li14 {
            align-items: flex-start;
          }
          .content-list4-heading11 {
            align-self: center;
            text-align: center;
          }
          .content-list4-content11 {
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .content-list4-ul4 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list4-content12 {
            align-self: stretch;
            align-items: flex-start;
          }
          .content-list4-ul5 {
            align-items: flex-start;
          }
          .content-list4-li19 {
            align-items: flex-start;
          }
          .content-list4-heading12 {
            align-self: center;
            text-align: center;
          }
          .content-list4-content13 {
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .content-list4-ul6 {
            align-items: flex-start;
            padding-left: var(--dl-layout-space-fiveunits);
          }
          .content-list4-text10 {
            display: inline-block;
          }
          .content-list4-text11 {
            display: inline-block;
          }
          .content-list4-text12 {
            display: inline-block;
          }
          .content-list4-text13 {
            display: inline-block;
          }
          .content-list4-text14 {
            display: inline-block;
          }
          .content-list4-text15 {
            display: inline-block;
          }
          .content-list4-text16 {
            display: inline-block;
          }
          .content-list4-text17 {
            display: inline-block;
          }
          .content-list4-text20 {
            display: inline-block;
          }
          .content-list4-text21 {
            display: inline-block;
          }
          .content-list4-text22 {
            display: inline-block;
          }
          .content-list4-text25 {
            display: inline-block;
          }
          .content-list4-text28 {
            display: inline-block;
          }
          .content-list4-text29 {
            display: inline-block;
          }
          .content-list4-text30 {
            display: inline-block;
          }
          .content-list4-text31 {
            display: inline-block;
          }
          .content-list4-text32 {
            display: inline-block;
          }
          .content-list4-text35 {
            display: inline-block;
          }
          .content-list4-text36 {
            display: inline-block;
          }
          .content-list4-text39 {
            display: inline-block;
          }
          .content-list4-text42 {
            display: inline-block;
          }
          .content-list4-text43 {
            display: inline-block;
          }
          .content-list4-text44 {
            display: inline-block;
          }
          .content-list4-text45 {
            display: inline-block;
          }
          .content-list4-text46 {
            display: inline-block;
          }
          .content-list4-text47 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .content-list4-ul2 {
              padding-left: var(--dl-layout-space-threeunits);
            }
            .content-list4-ul4 {
              padding-left: var(--dl-layout-space-threeunits);
            }
            .content-list4-ul6 {
              padding-left: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .content-list4-ul2 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .content-list4-ul4 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .content-list4-ul6 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

ContentList4.defaultProps = {
  heading6: undefined,
  content91: undefined,
  heading5: undefined,
  content4: undefined,
  content7: undefined,
  content3: undefined,
  content2: undefined,
  content1: undefined,
  heading7: undefined,
  heading8: undefined,
  heading91: undefined,
  heading9: undefined,
  content6: undefined,
  heading3: undefined,
  heading4: undefined,
  content5: undefined,
  heading1: undefined,
  content9: undefined,
  heading14: undefined,
  content14: undefined,
  heading31: undefined,
  content31: undefined,
  heading41: undefined,
  content41: undefined,
  heading51: undefined,
  content51: undefined,
}

ContentList4.propTypes = {
  heading6: PropTypes.element,
  content91: PropTypes.element,
  heading5: PropTypes.element,
  content4: PropTypes.element,
  content7: PropTypes.element,
  content3: PropTypes.element,
  content2: PropTypes.element,
  content1: PropTypes.element,
  heading7: PropTypes.element,
  heading8: PropTypes.element,
  heading91: PropTypes.element,
  heading9: PropTypes.element,
  content6: PropTypes.element,
  heading3: PropTypes.element,
  heading4: PropTypes.element,
  content5: PropTypes.element,
  heading1: PropTypes.element,
  content9: PropTypes.element,
  heading14: PropTypes.element,
  content14: PropTypes.element,
  heading31: PropTypes.element,
  content31: PropTypes.element,
  heading41: PropTypes.element,
  content41: PropTypes.element,
  heading51: PropTypes.element,
  content51: PropTypes.element,
}

export default ContentList4
