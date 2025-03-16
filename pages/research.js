import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import Features10 from '../components/features10'
import ContentList4 from '../components/content-list4'
import Footer from '../components/footer'

const Research = (props) => {
  return (
    <>
      <div className="research-container">
        <Head>
          <title>Research - MeloREMedy</title>
          <meta property="og:title" content="Research - MeloREMedy" />
        </Head>
        <Navbar
          text={
            <Fragment>
              <span className="research-text10">
                <span>
                  M E L O
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="research-text12">R E M</span>
                <span> E D Y </span>
              </span>
            </Fragment>
          }
          rootClassName="navbarroot-class-name"
        ></Navbar>
        <Features10
          sectionTitle={
            <Fragment>
              <span className="research-text14">Initial Survey Results</span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="research-text15">Important Features</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="research-text16">Calming Music</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="research-text17">
                <span>Listening Environments</span>
                <br></br>
              </span>
            </Fragment>
          }
          feature1Title1={
            <Fragment>
              <span className="research-text20">
                <span>Sleeping Hours</span>
                <br></br>
              </span>
            </Fragment>
          }
          feature3Title1={
            <Fragment>
              <span className="research-text23">Sleep Tracker Usage</span>
            </Fragment>
          }
          feature3Title2={
            <Fragment>
              <span className="research-text24">Sleep Tracker Improvement</span>
            </Fragment>
          }
          feature3Title3={
            <Fragment>
              <span className="research-text25">
                <span>Listening Music</span>
                <br></br>
              </span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="research-text28">
                Discover the research that went into creating MeloREMedy into
                the unique and effective tool for improving sleep quality that
                it is today.
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="research-text29">
                Most users mentioned that the most important feature for them is
                getting good music recommendations, which is why we used AI.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="research-text30">
                <span>
                  The majority of users also mentioned that they use music as a
                  way to help regulate their emotions.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="research-text33">
                <span>
                  When given multiple options, around 22 out of 26 respondents
                  mentioned they listen to music while commuting or just for
                  pleasure.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          feature1Description1={
            <Fragment>
              <span className="research-text36">
                Most respondents answered that they were getting around the
                recommend hours of sleep, 65.4% got 6-7 hours and 23.1% got 8 or
                more hours.
              </span>
            </Fragment>
          }
          feature3Description1={
            <Fragment>
              <span className="research-text37">
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
          }
          feature3Description2={
            <Fragment>
              <span className="research-text40">
                The results on this didn&apos;t seem to favor the sleep tracker,
                as only 7.7% of users said a sleep tracker benefited them.
              </span>
            </Fragment>
          }
          feature3Description3={
            <Fragment>
              <span className="research-text41">
                <span>
                  Our respondents tend to listen to music varyingly, however,
                  nearly 40% of them listen to around 2-4 hours per day.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
            </Fragment>
          }
        ></Features10>
        <ContentList4
          content1={
            <Fragment>
              <span className="research-text44">
                <span>
                  View the competitive analysis done on existing solutions in
                  the market.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="research-text47">
                This has been a long-standing, non-invasive, and inexpensive
                method for treating individuals with insomnia. Given that sleep
                is a critical part of everyday life, approximately 30 to 40
                percent of adults in the United States struggle with some form
                of irregular sleep, and 8.4% consistently take sleep medications
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="research-text48">
                The AI Playlist on Spotify generates a radio after analyzing
                your music preference/categorizes by genre/mood.
              </span>
            </Fragment>
          }
          content4={
            <Fragment>
              <span className="research-text49">
                A study conducted in the Wiley Online Library compared classical
                music, audiobooks, and no music on improving student sleep
                quality - they found that classical music showed positive
                results.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          content5={
            <Fragment>
              <span className="research-text50">
                The AMTA is a nonprofit association who aims to bring awareness
                to the advantages of music therapy and help increase
                accessibility to high quality music therapy;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          content6={
            <Fragment>
              <span className="research-text51">
                They provide a variety of different music therapy treatments
                such as &quot;neonatal intensive care unit (NICU) music therapy,
                neurologic music therapy and rehabilitative music therapy.”
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          content7={
            <Fragment>
              <span className="research-text52">
                Read through some of the background research that inspired
                MeloREMedy to be what it is today.
              </span>
            </Fragment>
          }
          content9={
            <Fragment>
              <span className="research-text53">
                Within the pivotal years 18-25-year-olds experience, the typical
                emerging and exiting college student needs adequate sleep for
                productive brain functioning. Although busy schedules often
                interfere with prioritizing quality sleep, researchers have
                continuously shown that disruptive sleep routines can seriously
                affect school, work, and physical and mental health.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="research-text54">
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
          }
          heading3={
            <Fragment>
              <span className="research-text57">Spotify</span>
            </Fragment>
          }
          heading4={
            <Fragment>
              <span className="research-text58">Nursing Study</span>
            </Fragment>
          }
          heading5={
            <Fragment>
              <span className="research-text59">
                American Music Therapy Association
              </span>
            </Fragment>
          }
          heading6={
            <Fragment>
              <span className="research-text60">UCLA Health</span>
            </Fragment>
          }
          heading7={
            <Fragment>
              <span className="research-text61">Background Research</span>
            </Fragment>
          }
          heading8={
            <Fragment>
              <span className="research-text62">Music as Medicine</span>
            </Fragment>
          }
          heading9={
            <Fragment>
              <span className="research-text63">
                <span>Sleep Requirements</span>
                <br></br>
              </span>
            </Fragment>
          }
          content91={
            <Fragment>
              <span className="research-text66">
                many students get far less than recommended, with 70 to 96
                percent of college students receiving less than eight hours of
                sleep per night and over 50 percent sleeping less than seven.
                Through the use of music as medicine, a personalized approach to
                enhance sleep quality can assist students across the nation.
              </span>
            </Fragment>
          }
          heading91={
            <Fragment>
              <span className="research-text67">
                <span>Reality of College Students</span>
                <br></br>
              </span>
            </Fragment>
          }
        ></ContentList4>
        <Footer
          text={
            <Fragment>
              <span className="research-text70">
                <span>
                  M E L O
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="research-text72">R E M</span>
                <span> E D Y </span>
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name1"
        ></Footer>
      </div>
      <style jsx>
        {`
          .research-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .research-text10 {
            display: inline-block;
            font-weight: 700;
          }
          .research-text12 {
            color: #8d8d8d;
          }
          .research-text14 {
            display: inline-block;
          }
          .research-text15 {
            display: inline-block;
          }
          .research-text16 {
            display: inline-block;
          }
          .research-text17 {
            display: inline-block;
          }
          .research-text20 {
            display: inline-block;
          }
          .research-text23 {
            display: inline-block;
          }
          .research-text24 {
            display: inline-block;
          }
          .research-text25 {
            display: inline-block;
          }
          .research-text28 {
            display: inline-block;
          }
          .research-text29 {
            display: inline-block;
          }
          .research-text30 {
            display: inline-block;
          }
          .research-text33 {
            display: inline-block;
          }
          .research-text36 {
            display: inline-block;
          }
          .research-text37 {
            display: inline-block;
          }
          .research-text40 {
            display: inline-block;
          }
          .research-text41 {
            display: inline-block;
          }
          .research-text44 {
            display: inline-block;
          }
          .research-text47 {
            display: inline-block;
          }
          .research-text48 {
            display: inline-block;
          }
          .research-text49 {
            display: inline-block;
          }
          .research-text50 {
            display: inline-block;
          }
          .research-text51 {
            display: inline-block;
          }
          .research-text52 {
            display: inline-block;
          }
          .research-text53 {
            display: inline-block;
          }
          .research-text54 {
            display: inline-block;
          }
          .research-text57 {
            display: inline-block;
          }
          .research-text58 {
            display: inline-block;
          }
          .research-text59 {
            display: inline-block;
          }
          .research-text60 {
            display: inline-block;
          }
          .research-text61 {
            display: inline-block;
          }
          .research-text62 {
            display: inline-block;
          }
          .research-text63 {
            display: inline-block;
          }
          .research-text66 {
            display: inline-block;
          }
          .research-text67 {
            display: inline-block;
          }
          .research-text70 {
            display: inline-block;
            font-weight: 700;
          }
          .research-text72 {
            color: #8d8d8d;
          }
        `}
      </style>
    </>
  )
}

export default Research
