import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero = (props) => {
  return (
    <>
      <div className="hero-header78">
        <div className="hero-content1">
          <h1 className="hero-text1 thq-heading-1">
            {props.text4 ?? (
              <Fragment>
                <span className="hero-text3">This is MeloREMedy.</span>
              </Fragment>
            )}
          </h1>
          <span className="hero-text2">
            {props.text2 ?? (
              <Fragment>
                <span className="hero-text4">
                  MeloREMedy is a revolutionary web app that harnesses AI-driven
                  music therapy to help you overcome sleep deprivation. With
                  intelligent playlist generation, sleep tracking, and mental
                  health check-ins, we make improving your well-being
                  effortless. Sleep better, feel better—one night at a time.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="hero-content2">
          <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.placeholderImageSrc}
                className="hero-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1625786682948-2168238883d2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI1fHxoZWFkcGhvbmVzfGVufDB8fHx8MTc0MjA4ODMxNnww&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
          <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image12Alt}
                src={props.image12Src}
                className="hero-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="hero-container2">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-header78 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero-text1 {
            text-align: center;
          }
          .hero-text2 {
            width: 1011px;
            display: flex;
            text-align: center;
          }
          .hero-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero-row-container1 {
            width: 100%;
          }
          .hero-placeholder-image10 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image11 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image12 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image13 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image14 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image15 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image16 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image17 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image18 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image19 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image20 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image21 {
            width: 400px;
            height: 400px;
          }
          .hero-row-container2 {
            width: 100%;
          }
          .hero-placeholder-image22 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image23 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image24 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image25 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image26 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image27 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image28 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image29 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image30 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image31 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image32 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image33 {
            width: 400px;
            height: 400px;
          }
          .hero-container2 {
            display: contents;
          }
          .hero-text3 {
            display: inline-block;
          }
          .hero-text4 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .hero-content2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  image1Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1496360711189-5edeb09fe715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTcxNzg3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image12Alt: 'Hero Image',
  placeholderImageSrc1:
    'https://images.unsplash.com/photo-1625786682948-2168238883d2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI1fHxoZWFkcGhvbmVzfGVufDB8fHx8MTc0MjA4ODMxNnww&ixlib=rb-4.0.3&w=1500',
  image4Src:
    'https://images.unsplash.com/photo-1601211230654-67f4c7d966c7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxtdXNpYyUyMHBsYW50fGVufDB8fHx8MTc0MTgyNTIzNXww&ixlib=rb-4.0.3&w=1500',
  text4: undefined,
  image2Alt: 'Hero Image',
  image10Alt: 'Hero Image',
  placeholderImageSrc:
    'https://images.unsplash.com/photo-1625786682948-2168238883d2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGxpc3RlbmluZyUyMHRvJTIwbXVzaWN8ZW58MHx8fHwxNzQxODI0ODI4fDA&ixlib=rb-4.0.3&w=1500',
  image6Alt: 'Hero Image',
  image12Src:
    'https://images.unsplash.com/photo-1519370176697-e79e948162dc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHNsZWVwaW5nJTIwaW4lMjBuYXR1cmV8ZW58MHx8fHwxNzQxODI1NTg5fDA&ixlib=rb-4.0.3&w=1500',
  image3Src:
    'https://images.unsplash.com/photo-1581091595283-04de15a05a01?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxsaXN0ZW5pbmclMjB0byUyMG11c2ljfGVufDB8fHx8MTc0MTgyNDgyOHww&ixlib=rb-4.0.3&w=1500',
  image5Src:
    'https://images.unsplash.com/photo-1597429842223-ee6bd0d5a0ca?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxtdXNpYyUyMHBsYW50fGVufDB8fHx8MTc0MTgyNTIzNXww&ixlib=rb-4.0.3&w=1500',
  image4Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  image8Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1610170934049-1cee05704a3e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxtdXNpYyUyMHBsYW50fGVufDB8fHx8MTc0MTgyNTIzNXww&ixlib=rb-4.0.3&w=1500',
  image7Src:
    'https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxzbGVlcHxlbnwwfHx8fDE3NDE4MjQ4Njh8MA&ixlib=rb-4.0.3&w=1500',
  image11Alt: 'Hero Image',
  image9Src:
    'https://images.unsplash.com/photo-1552650272-b8a34e21bc4b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fHNsZWVwfGVufDB8fHx8MTc0MTgyNDg2OHww&ixlib=rb-4.0.3&w=1500',
  image7Alt: 'Hero Image',
  image10Src:
    'https://images.unsplash.com/photo-1568262979825-9f6e0e000e7a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fG5hcCUyMG11c2ljfGVufDB8fHx8MTc0MTgyNTM5Mnww&ixlib=rb-4.0.3&w=1500',
  image8Src:
    'https://images.unsplash.com/photo-1631310709791-1b3701c7a335?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM4fHxzbGVlcHxlbnwwfHx8fDE3NDE4MjQ4Njh8MA&ixlib=rb-4.0.3&w=1500',
  text2: undefined,
  image9Alt: 'Hero Image',
  image3Alt: 'Hero Image',
  image11Src:
    'https://images.unsplash.com/photo-1633613286880-dae9f126b728?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHNsZWVweXxlbnwwfHx8fDE3NDE4MjU1NzR8MA&ixlib=rb-4.0.3&w=1500',
}

Hero.propTypes = {
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image12Alt: PropTypes.string,
  placeholderImageSrc1: PropTypes.string,
  image4Src: PropTypes.string,
  text4: PropTypes.element,
  image2Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  placeholderImageSrc: PropTypes.string,
  image6Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image3Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image7Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image8Src: PropTypes.string,
  text2: PropTypes.element,
  image9Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image11Src: PropTypes.string,
}

export default Hero
