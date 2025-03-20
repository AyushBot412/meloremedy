import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Gallery7 = (props) => {
  return (
    <>
      <div className="gallery7-gallery3 thq-section-padding">
        <div className="gallery7-max-width">
          <div className="gallery7-section-title">
            <h2 className="gallery7-text1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery7-text3">
                    MeloREMedy Design Pallete
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="gallery7-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery7-text4">
                    Explore the various hue packs used in MeloREMedy, along with
                    a user flow diagram and a fully functioning Figma prototype!
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery7-container1">
            <div className="gallery7-content">
              <div className="gallery7-container2">
                <img
                  alt={props.image1Alt}
                  src={props.image1Src}
                  className="gallery7-image1 thq-img-ratio-1-1"
                />
                <img
                  alt={props.image2Alt}
                  src={props.image2Src}
                  className="gallery7-image2 thq-img-ratio-1-1"
                />
              </div>
              <div className="gallery7-container3">
                <div>
                  <div className="gallery7-container5">
                    <Script
                      html={`<iframe
  style="border: 1px solid rgba(0, 0, 0, 0.1)"
  width="800"
  height="450"
  src="https://embed.figma.com/proto/OBOjI2G1nvoerRSoKsDpF3/MeloREMedy?node-id=136-3&starting-point-node-id=136%3A3&scaling=contain&content-scaling=fixed&embed-host=share"
  allowfullscreen
></iframe>
`}
                    ></Script>
                  </div>
                </div>
                <img
                  alt={props.imageAlt12}
                  src={props.imageSrc12}
                  className="gallery7-image"
                />
              </div>
              <div className="gallery7-container6">
                <img
                  alt={props.image6Alt}
                  src={props.image6Src}
                  className="gallery7-image6 thq-img-ratio-1-1"
                />
                <img
                  alt={props.image7Alt}
                  src={props.image7Src}
                  className="gallery7-image7 thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery7-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery7-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery7-section-title {
            gap: 24px;
            width: 932px;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery7-text1 {
            text-align: center;
          }
          .gallery7-text2 {
            text-align: center;
          }
          .gallery7-container1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .gallery7-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery7-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery7-image1 {
            width: 100%;
            height: 440px;
            object-fit: cover;
            border-color: #000000;
            border-style: solid;
            border-width: 2px;
          }
          .gallery7-image2 {
            width: 100%;
            height: 440px;
            object-fit: cover;
            border-color: #000000;
            border-width: 2px;
          }
          .gallery7-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery7-container5 {
            display: contents;
          }
          .gallery7-image {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          .gallery7-container6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery7-image6 {
            width: 100%;
            height: 440px;
            object-fit: cover;
            border-color: #000000;
            border-width: 2px;
          }
          .gallery7-image7 {
            width: 100%;
            height: 440px;
            object-fit: cover;
            border-color: #000000;
            border-width: 2px;
          }
          .gallery7-text3 {
            display: inline-block;
          }
          .gallery7-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .gallery7-content {
              align-items: center;
              flex-direction: column;
            }
            .gallery7-container2 {
              width: 100%;
            }
            .gallery7-image1 {
              flex: 0 0 auto;
              width: 100%;
            }
            .gallery7-container3 {
              width: 100%;
            }
            .gallery7-container6 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .gallery7-section-title {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Gallery7.defaultProps = {
  imageAlt12: 'image',
  image6Src: '/rectangle%207-1500w.png',
  image7Src: '/rectangle%2010-1500w.png',
  image6Alt: 'Meloremedy Music Therapy',
  image2Src: '/rectangle%208-1500w.png',
  image1Src: '/rectangle%206-1500w.png',
  image2Alt: 'Meloremedy Gardening Community Forum',
  heading1: undefined,
  image7Alt: 'Meloremedy Sleep Deprivation Solution',
  content1: undefined,
  image1Alt: 'Meloremedy Plant Remedies',
  imageSrc12: '/user%20flow%20diagram-1500w.png',
}

Gallery7.propTypes = {
  imageAlt12: PropTypes.string,
  image6Src: PropTypes.string,
  image7Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image1Src: PropTypes.string,
  image2Alt: PropTypes.string,
  heading1: PropTypes.element,
  image7Alt: PropTypes.string,
  content1: PropTypes.element,
  image1Alt: PropTypes.string,
  imageSrc12: PropTypes.string,
}

export default Gallery7
