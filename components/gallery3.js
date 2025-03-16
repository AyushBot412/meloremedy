import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Gallery3 = (props) => {
  return (
    <>
      <div className="gallery3-gallery3 thq-section-padding">
        <div className="gallery3-max-width thq-section-max-width">
          <div className="gallery3-section-title">
            <h2 className="gallery3-text1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="gallery3-text3">Background Research</span>
                </Fragment>
              )}
            </h2>
            <span className="gallery3-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery3-text4">
                    Read through some of the background research that inspired
                    MeloREMedy to be what it is today.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery3-container1 thq-grid-4">
            <div className="gallery3-container2">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery3-image1 thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container3">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery3-image2 thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container4">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery3-image3 thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container5">
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery3-image4 thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container6">
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="gallery3-image5 thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container7">
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="gallery3-image6 thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container8">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="gallery3-image7 thq-img-ratio-16-9"
              />
            </div>
            <div className="gallery3-container9">
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="gallery3-image8 thq-img-ratio-16-9"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery3-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery3-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery3-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 629px;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery3-text1 {
            text-align: center;
          }
          .gallery3-text2 {
            text-align: center;
          }
          .gallery3-container1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
          }
          .gallery3-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-image1 {
            width: 100%;
            height: 340px;
            max-width: 600px;
            align-self: center;
          }
          .gallery3-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-image2 {
            width: 100%;
            height: 340px;
            max-width: 600px;
            align-self: center;
          }
          .gallery3-container4 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-image3 {
            width: 100%;
            height: 340px;
            max-width: 600px;
          }
          .gallery3-container5 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-image4 {
            width: 100%;
            height: 340px;
            max-width: 600px;
          }
          .gallery3-container6 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-image5 {
            width: 100%;
            height: 340px;
            max-width: 600px;
          }
          .gallery3-container7 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-image6 {
            width: 100%;
            height: 340px;
            max-width: 600px;
          }
          .gallery3-container8 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-image7 {
            width: 100%;
            height: 340px;
            max-width: 600px;
          }
          .gallery3-container9 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .gallery3-image8 {
            width: 100%;
            height: 340px;
            max-width: 600px;
          }
          .gallery3-text3 {
            display: inline-block;
          }
          .gallery3-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .gallery3-image1 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery3-image2 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery3-image3 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery3-image4 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery3-image5 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery3-image6 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery3-image7 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
            .gallery3-image8 {
              flex: 0 0 auto;
              width: 100%;
              height: 400px;
            }
          }
          @media (max-width: 767px) {
            .gallery3-section-title {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Gallery3.defaultProps = {
  heading1: undefined,
  image2Alt: 'Sleep Tracking',
  image2Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image1Alt: 'Personalized Playlist',
  image7Src:
    'https://images.unsplash.com/photo-1484383564173-89117c57b303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTg5MTk0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Alt: 'Plant Care Features',
  image4Src:
    'https://images.unsplash.com/photo-1639654655546-68bc1f21e9e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTg5MTk0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Virtual Plants',
  image3Alt: 'Mental Health Check-ins',
  image8Src:
    'https://images.unsplash.com/photo-1609840533639-74096f58546d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTg5MTk0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Gamified Sleep Quality',
  image8Alt: 'Gardening Enthusiasts',
  image3Src:
    'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTg5MTk0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1523349122880-44486ffa7b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTg5MTk0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1698954970932-52f68292a9f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTg5MTk0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Src:
    'https://images.unsplash.com/photo-1652300353103-490b43ac8366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTg5MTk1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'AI-driven Music Therapy',
}

Gallery3.propTypes = {
  heading1: PropTypes.element,
  image2Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image5Src: PropTypes.string,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  image6Src: PropTypes.string,
  image7Alt: PropTypes.string,
}

export default Gallery3
