import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Testimonial = (props) => {
  return (
    <>
      <a href="#wonder" className="testimonial-link">
        <div
          id="testimonials"
          className="testimonial-testimonial13 thq-section-padding"
        >
          <div className="testimonial-max-width thq-section-max-width">
            <div className="testimonial-container10">
              <h2 id={props.headingId} className="thq-heading-2">
                {props.heading1}
              </h2>
              <span className="testimonial-text11 thq-body-small">
                {props.content1}
              </span>
            </div>
            <div className="thq-grid-2">
              <div className="thq-animated-card-bg-2">
                <div className="thq-animated-card-bg-1">
                  <div
                    data-animated="true"
                    className="thq-card testimonial-card1"
                  >
                    <div className="testimonial-container12">
                      <img
                        alt={props.author1Alt}
                        src={props.author1Src}
                        className="testimonial-image1"
                      />
                      <div className="testimonial-container13">
                        <strong className="thq-body-large">
                          {props.author1Name}
                        </strong>
                        <span className="thq-body-small">
                          {props.author1Position}
                        </span>
                      </div>
                    </div>
                    <span className="testimonial-text14 thq-body-small">
                      {props.review1}
                    </span>
                  </div>
                </div>
              </div>
              <div className="thq-animated-card-bg-2">
                <div className="thq-animated-card-bg-1">
                  <div
                    data-animated="true"
                    className="thq-card testimonial-card2"
                  >
                    <div className="testimonial-container14">
                      <img
                        alt={props.author2Alt}
                        src={props.author2Src}
                        className="testimonial-image2"
                      />
                      <div className="testimonial-container15">
                        <strong className="thq-body-large">
                          {props.author2Name}
                        </strong>
                        <span className="thq-body-small">
                          {props.author2Position}
                        </span>
                      </div>
                    </div>
                    <span className="testimonial-text17 thq-body-small">
                      {props.review2}
                    </span>
                  </div>
                </div>
              </div>
              <div className="thq-animated-card-bg-2">
                <div className="thq-animated-card-bg-1">
                  <div
                    data-animated="true"
                    className="thq-card testimonial-card3"
                  >
                    <div className="testimonial-container16">
                      <img
                        alt={props.author3Alt}
                        src={props.author3Src}
                        className="testimonial-image3"
                      />
                      <div className="testimonial-container17">
                        <strong className="thq-body-large">
                          {props.author3Name}
                        </strong>
                        <span className="thq-body-small">
                          {props.author3Position}
                        </span>
                      </div>
                    </div>
                    <span className="testimonial-text20 thq-body-small">
                      {props.review3}
                    </span>
                  </div>
                </div>
              </div>
              <div className="thq-animated-card-bg-2">
                <div className="thq-animated-card-bg-1">
                  <div
                    data-animated="true"
                    className="thq-card testimonial-card4"
                  >
                    <div className="testimonial-container18">
                      <img
                        alt={props.author4Alt}
                        src={props.author4Src}
                        className="testimonial-image4"
                      />
                      <div className="testimonial-container19">
                        <strong className="thq-body-large">
                          {props.author4Name}
                        </strong>
                        <span className="thq-body-small">
                          {props.author4Position}
                        </span>
                      </div>
                    </div>
                    <span className="testimonial-text23 thq-body-small">
                      {props.review4}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <style jsx>
        {`
          .testimonial-link {
            display: contents;
          }
          .testimonial-testimonial13 {
            text-decoration: none;
          }
          .testimonial-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial-container10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .testimonial-text11 {
            text-align: center;
          }
          .testimonial-container12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image1 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text14 {
            text-align: left;
          }
          .testimonial-container14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image2 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial-container15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text17 {
            text-align: left;
          }
          .testimonial-container16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image3 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text20 {
            text-align: left;
          }
          .testimonial-container18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image4 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text23 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .testimonial-container10 {
              margin-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial-container10 {
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .testimonial-card1 {
              width: 100%;
            }
            .testimonial-card2 {
              width: 100%;
            }
            .testimonial-card3 {
              width: 100%;
            }
            .testimonial-card4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial.defaultProps = {
  author4Alt: 'Image of David Johnson',
  review2:
    'I was able to sleep much better, thanks to MeloREMedy. Highly recommended!',
  author3Alt: 'Image of Emily Brown',
  author1Name: 'Alice Smith',
  author1Position: 'Music Enthusiast',
  author2Src:
    'https://images.unsplash.com/photo-1600878459138-e1123b37cb30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTcxNzg3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  headingId: 'Testimonials',
  author3Src:
    'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTcxNzg3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  review1:
    "MeloREMedy has truly transformed my sleeping experience. I can now easily track my plant's progress and get personalized care recommendations.",
  author4Src:
    'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTcxNzg3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: 'David Johnson',
  author4Position: 'REM Specialist',
  author3Name: 'Emily Brown',
  author1Alt: 'Image of Alice Smith',
  heading1: 'Testimonials',
  author1Src:
    'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTcxNzg3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  review4:
    "MeloREMedy's features are unmatched. From digital plant growth to custom playlists, it covers all aspects of sleeping better.",
  author2Position: 'Music Creator',
  review3:
    'As a professional somnologist, MeloREMedy has become an essential tool in my daily routine. It saves me time and helps me find better music for my work.',
  author3Position: 'Sleep Scientist',
  author2Alt: 'Image of John Doe',
  content1: 'Read what our customers have to say about MeloREMedy.',
  author2Name: 'Brian Tyson',
}

Testimonial.propTypes = {
  author4Alt: PropTypes.string,
  review2: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author1Position: PropTypes.string,
  author2Src: PropTypes.string,
  headingId: PropTypes.string,
  author3Src: PropTypes.string,
  review1: PropTypes.string,
  author4Src: PropTypes.string,
  author4Name: PropTypes.string,
  author4Position: PropTypes.string,
  author3Name: PropTypes.string,
  author1Alt: PropTypes.string,
  heading1: PropTypes.string,
  author1Src: PropTypes.string,
  review4: PropTypes.string,
  author2Position: PropTypes.string,
  review3: PropTypes.string,
  author3Position: PropTypes.string,
  author2Alt: PropTypes.string,
  content1: PropTypes.string,
  author2Name: PropTypes.string,
}

export default Testimonial
