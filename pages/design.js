import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import Hero9 from '../components/hero9'
import Features22 from '../components/features22'
import Gallery7 from '../components/gallery7'
import Footer from '../components/footer'

const Design = (props) => {
  return (
    <>
      <div className="design-container1">
        <Head>
          <title>Design - MeloREMedy</title>
          <meta property="og:title" content="Design - MeloREMedy" />
        </Head>
        <header className="design-container2">
          <Navbar
            text={
              <Fragment>
                <span className="design-text10">
                  <span>
                    M E L O
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="design-text12">R E M</span>
                  <span> E D Y </span>
                </span>
              </Fragment>
            }
          ></Navbar>
        </header>
        <Hero9
          content1={
            <Fragment>
              <span className="design-text14">
                Experience the power of music therapy and digital plant care for
                improved sleeping
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="design-text15">Welcome to MeloREMedy</span>
            </Fragment>
          }
        ></Hero9>
        <Features22
          content1={
            <Fragment>
              <span className="design-text16">
                MeloREMedy transforms the way you rest with AI-generated
                playlists, sleep tracking, and mental health check-ins. Earn
                rewards by improving your sleep and grow a virtual garden as you
                build healthier habits. Relax, recharge, and wake up refreshed -
                effortlessly.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="design-text17">Features</span>
            </Fragment>
          }
          features22Id="Features22"
          feature1Title={
            <Fragment>
              <span className="design-text18">Customized Playlists</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="design-text19">Natural Sleep Remedies</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="design-text20">Easy to Use Sleep Tracker</span>
            </Fragment>
          }
          feature2Title1={
            <Fragment>
              <span className="design-text21">Gamified Virtual Garden</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="design-text22">
                <span>
                  Have our AI generate a custom made playlist specific to your
                  personal tastes.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="design-text25">
                Explore a range of natural musical remedies that promote
                relaxation and improve sleep quality.
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="design-text26">
                Track your sleep and view your data on easy-to-understand
                screens.
              </span>
            </Fragment>
          }
          feature2Description1={
            <Fragment>
              <span className="design-text27">
                Keep your plants growing healthy and happy by reporting your own
                healthy sleep.
              </span>
            </Fragment>
          }
        ></Features22>
        <Gallery7
          content1={
            <Fragment>
              <span className="design-text28">
                Explore the various hue packs used in MeloREMedy, along with the
                original lo-fi wireframes and a user flow diagram!
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="design-text29">MeloREMedy Design Pallete</span>
            </Fragment>
          }
        ></Gallery7>
        <Footer
          text={
            <Fragment>
              <span className="design-text30">
                <span>
                  M E L O
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="design-text32">R E M</span>
                <span> E D Y </span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name"
        ></Footer>
      </div>
      <style jsx>
        {`
          .design-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .design-container2 {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .design-text10 {
            display: inline-block;
            font-weight: 700;
          }
          .design-text12 {
            color: #8d8d8d;
          }
          .design-text14 {
            display: inline-block;
          }
          .design-text15 {
            display: inline-block;
          }
          .design-text16 {
            display: inline-block;
          }
          .design-text17 {
            display: inline-block;
          }
          .design-text18 {
            display: inline-block;
          }
          .design-text19 {
            display: inline-block;
          }
          .design-text20 {
            display: inline-block;
          }
          .design-text21 {
            display: inline-block;
          }
          .design-text22 {
            display: inline-block;
          }
          .design-text25 {
            display: inline-block;
          }
          .design-text26 {
            display: inline-block;
          }
          .design-text27 {
            display: inline-block;
          }
          .design-text28 {
            display: inline-block;
          }
          .design-text29 {
            display: inline-block;
          }
          .design-text30 {
            display: inline-block;
            font-weight: 700;
          }
          .design-text32 {
            color: #8d8d8d;
          }
        `}
      </style>
    </>
  )
}

export default Design
