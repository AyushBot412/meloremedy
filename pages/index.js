import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>MeloREMedy</title>
        </Head>
        <Navbar
          text={
            <Fragment>
              <span className="home-text10">
                <span>
                  M E L O
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text12">R E M</span>
                <span> E D Y </span>
              </span>
            </Fragment>
          }
          link1="Home"
          link2="Features"
          link3="Testimonials"
          link4="Design"
          link5="Research"
          link42="Design"
          link52="Research"
          logoSrc="/logo.svg"
        ></Navbar>
        <Hero
          text2={
            <Fragment>
              <span className="home-text14">
                MeloREMedy is a revolutionary web app that harnesses AI-driven
                music therapy to help you overcome sleep deprivation. With
                intelligent playlist generation, sleep tracking, and mental
                health check-ins, we make improving your well-being effortless.
                Sleep better, feel better—one night at a time.
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text15">
                <span>This is Melo</span>
                <span className="home-text17">REM</span>
                <span>edy.</span>
              </span>
            </Fragment>
          }
          content1="Meloremedy is a revolutionary web app designed to help you overcome sleep deprivation through gamified music therapy. With personalized playlists, sleep tracking, and mental health check-ins, we make improving your well-being effortless. Sleep better, feel better—one night at a time."
        ></Hero>
        <Features1
          feature1Title="Generate Personalized Playlists"
          feature2Title="Large Database of Music"
          feature3Title="Gamified Interactivity"
          feature1Description="Generate a custom made playlist specific to your personal tastes using AI."
          feature3Description="Help your plant to grow by sleeping well!"
        ></Features1>
        <CTA action1="See Designs"></CTA>
        <Features2
          feature1Title1="Add Data"
          feature2Title1="View Your Logs"
          feature1Description1="Effortlessly log your sleep hours and gain insights into your sleep quality, helping you develop healthier sleeping habits."
          feature2Description1="View your data with useful statistics to learn about your listening and sleeping patterns."
          feature3Description1="Each night of restful sleep helps you plant, grow, and nurture a beautiful virtual garden."
        ></Features2>
        <Steps></Steps>
        <Testimonial
          heading1="Testimonials"
          testimonialId="testimonials"
        ></Testimonial>
        <Footer
          text={
            <Fragment>
              <span className="home-text19">
                <span>
                  M E L O
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text21">R E M</span>
                <span> E D Y </span>
              </span>
            </Fragment>
          }
          content3="Frequent this page to see updates soon!."
        ></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
            font-weight: 700;
          }
          .home-text12 {
            color: #8d8d8d;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text17 {
            color: var(--dl-color-theme-primary1);
          }
          .home-text19 {
            display: inline-block;
            font-weight: 700;
          }
          .home-text21 {
            color: #8d8d8d;
          }
        `}
      </style>
    </>
  )
}

export default Home
