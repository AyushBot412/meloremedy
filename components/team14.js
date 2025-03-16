import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Team14 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="team14-max-width thq-section-max-width">
          <div className="team14-section-title">
            <span className="thq-body-small team14-text10">
              {props.content1 ?? (
                <Fragment>
                  <span className="team14-text71">
                    Our team at Meloremedy is a group of passionate individuals
                    dedicated to enhancing well-being through music therapy and
                    plant care. Get to know the faces behind our mission.
                  </span>
                </Fragment>
              )}
            </span>
            <button className="team14-button thq-button-filled">
              <span className="thq-body-small">
                {props.actionContent ?? (
                  <Fragment>
                    <span className="team14-text89">Open positions</span>
                  </Fragment>
                )}
              </span>
            </button>
            <div className="team14-content10">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="team14-text68">Meet Our Team</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large team14-text13">
                {props.content2 ?? (
                  <Fragment>
                    <span className="team14-text79">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div
            data-thq="slider"
            data-loop="true"
            data-autoplay="true"
            data-navigation="true"
            data-pagination="true"
            className="team14-slider1 swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="team14-slider-slide10 swiper-slide"
              >
                <div className="team14-card10">
                  <img
                    alt={props.member1Alt}
                    src={props.member1Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content11">
                    <div className="team14-title10">
                      <span className="team14-text14 thq-body-small">
                        {props.member1 ?? (
                          <Fragment>
                            <span className="team14-text83">Alice Smith</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team14-text15 thq-body-small">
                        {props.member1Job ?? (
                          <Fragment>
                            <span className="team14-text76">
                              Co-Founder &amp; Music Therapist
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team14-text16 thq-body-small">
                      {props.member1Content ?? (
                        <Fragment>
                          <span className="team14-text85">
                            Alice is a certified music therapist with a deep
                            love for plants. She combines her expertise in music
                            therapy with her passion for gardening to create
                            unique experiences for our users.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team14-social-icons10">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team14-card11">
                  <img
                    alt={props.member2Alt}
                    src={props.member2Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content12">
                    <div className="team14-title11">
                      <span className="team14-text17 thq-body-small">
                        {props.member2 ?? (
                          <Fragment>
                            <span className="team14-text69">Ethan Johnson</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team14-text18 thq-body-small">
                        {props.member2Job ?? (
                          <Fragment>
                            <span className="team14-text95">
                              Head of Product Development
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team14-text19 thq-body-small">
                      {props.member2Content ?? (
                        <Fragment>
                          <span className="team14-text81">
                            Ethan leads our product development team, ensuring
                            that Meloremedy&apos;s offerings are innovative and
                            user-friendly. His background in technology and
                            design brings a fresh perspective to our platform.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team14-social-icons11">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team14-card12">
                  <img
                    alt={props.member3Alt}
                    src={props.member3Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content13">
                    <div className="team14-title12">
                      <span className="team14-text20 thq-body-small">
                        {props.member3 ?? (
                          <Fragment>
                            <span className="team14-text93">Sophia Lee</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team14-text21 thq-body-small">
                        {props.member3Job ?? (
                          <Fragment>
                            <span className="team14-text74">
                              Plant Care Specialist
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team14-text22 thq-body-small">
                      {props.member3Content ?? (
                        <Fragment>
                          <span className="team14-text88">
                            Sophia is our resident plant care expert, providing
                            personalized tips and guidance to help users nurture
                            their green companions. Her knowledge of plants and
                            gardening is invaluable to our community.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team14-social-icons12">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team14-card13">
                  <img
                    alt={props.member4Alt}
                    src={props.member4Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content14">
                    <div className="team14-title13">
                      <span className="team14-text23 thq-body-small">
                        {props.member4 ?? (
                          <Fragment>
                            <span className="team14-text78">Michael Brown</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team14-text24 thq-body-small">
                        {props.member4Job ?? (
                          <Fragment>
                            <span className="team14-text94">
                              Community Manager
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team14-text25 thq-body-small">
                      {props.member4Content ?? (
                        <Fragment>
                          <span className="team14-text77">
                            Michael oversees our community forum, fostering a
                            supportive environment where gardening enthusiasts
                            can connect and share their experiences. His
                            dedication to building a thriving community is
                            evident in the positive interactions among members.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team14-social-icons13">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="team14-slider-slide11 swiper-slide"
              >
                <div className="team14-card14">
                  <img
                    alt={props.member5Alt}
                    src={props.member5Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content15">
                    <div className="team14-title14">
                      <span className="team14-text26 thq-body-small">
                        Full name
                      </span>
                      <span className="team14-text27 thq-body-small">
                        <span>Job title</span>
                        {props.member5Job ?? (
                          <Fragment>
                            <span className="team14-text80">
                              Customer Success Specialist
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team14-text29 thq-body-small">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                      {props.member5Content ?? (
                        <Fragment>
                          <span className="team14-text84">
                            Olivia is committed to ensuring that our users have
                            a seamless experience with Meloremedy. She provides
                            personalized support and assistance, making sure
                            that every user feels valued and supported.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team14-social-icons14">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team14-card15">
                  <img
                    alt={props.member6Alt}
                    src={props.member6Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content16">
                    <div className="team14-title15">
                      <span className="team14-text31 thq-body-small">
                        <span>Full name</span>
                        {props.member6 ?? (
                          <Fragment>
                            <span className="team14-text70">
                              David Martinez
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team14-text33 thq-body-small">
                        Job title
                      </span>
                    </div>
                    <span className="team14-text34 thq-body-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </span>
                  </div>
                  <div className="team14-social-icons15">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team14-card16">
                  <img
                    alt={props.member7Alt}
                    src={props.member7Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content17">
                    <div className="team14-title16">
                      <span className="team14-text35 thq-body-small">
                        <span>Full name</span>
                        {props.member7 ?? (
                          <Fragment>
                            <span className="team14-text90">Emma Wilson</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team14-text37 thq-body-small">
                        Job title
                      </span>
                    </div>
                    <span className="team14-text38 thq-body-small">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                      {props.member7Content ?? (
                        <Fragment>
                          <span className="team14-text82">
                            Emma spearheads our marketing initiatives, spreading
                            the word about Meloremedy&apos;s unique offerings.
                            Her creativity and strategic approach help us reach
                            a wider audience and make a positive impact.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team14-social-icons16">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="team14-card17">
                  <img
                    alt={props.member8Alt}
                    src={props.member8Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content18">
                    <div className="team14-title17">
                      <span className="team14-text40 thq-body-small">
                        {props.member8 ?? (
                          <Fragment>
                            <span className="team14-text75">Daniel Lopez</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team14-text41 thq-body-small">
                        Job title
                      </span>
                    </div>
                    <span className="team14-text42 thq-body-small">
                      {props.member8Content ?? (
                        <Fragment>
                          <span className="team14-text72">
                            Daniel focuses on building strong relationships with
                            our users, gathering feedback, and ensuring that
                            their voices are heard. His dedication to customer
                            satisfaction is reflected in the positive
                            testimonials we receive.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team14-social-icons17">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="team14-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="swiper-button-next"
            ></div>
          </div>
          <div
            data-thq="slider"
            data-navigation="true"
            data-pagination="true"
            className="team14-slider2 swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="team14-slider-slide12 swiper-slide"
              >
                <div className="team14-card18">
                  <img
                    alt={props.member1Alt}
                    src={props.member1Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content19">
                    <div className="team14-title18">
                      <span className="team14-text43 thq-body-small">
                        <span>Full name</span>
                        {props.member1 ?? (
                          <Fragment>
                            <span className="team14-text83">Alice Smith</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team14-text45 thq-body-small">
                        {props.member1Job ?? (
                          <Fragment>
                            <span className="team14-text76">
                              Co-Founder &amp; Music Therapist
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team14-text46 thq-body-small">
                      {props.member1Content ?? (
                        <Fragment>
                          <span className="team14-text85">
                            Alice is a certified music therapist with a deep
                            love for plants. She combines her expertise in music
                            therapy with her passion for gardening to create
                            unique experiences for our users.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team14-social-icons18">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="team14-slider-slide13 swiper-slide"
              >
                <div className="team14-card19">
                  <img
                    alt={props.member2Alt}
                    src={props.member2Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content20">
                    <div className="team14-title19">
                      <span className="team14-text47 thq-body-small">
                        Full name
                      </span>
                      <span className="team14-text48 thq-body-small">
                        {props.member2Job ?? (
                          <Fragment>
                            <span className="team14-text95">
                              Head of Product Development
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team14-text49 thq-body-small">
                      {props.member2Content ?? (
                        <Fragment>
                          <span className="team14-text81">
                            Ethan leads our product development team, ensuring
                            that Meloremedy&apos;s offerings are innovative and
                            user-friendly. His background in technology and
                            design brings a fresh perspective to our platform.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team14-social-icons19">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="team14-slider-slide14 swiper-slide"
              >
                <div className="team14-card20">
                  <img
                    alt={props.member3Alt}
                    src={props.member3Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content21">
                    <div className="team14-title20">
                      <span className="team14-text50 thq-body-small">
                        {props.member3 ?? (
                          <Fragment>
                            <span className="team14-text93">Sophia Lee</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team14-text51 thq-body-small">
                        {props.member3Job ?? (
                          <Fragment>
                            <span className="team14-text74">
                              Plant Care Specialist
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team14-text52 thq-body-small">
                      {props.member3Content ?? (
                        <Fragment>
                          <span className="team14-text88">
                            Sophia is our resident plant care expert, providing
                            personalized tips and guidance to help users nurture
                            their green companions. Her knowledge of plants and
                            gardening is invaluable to our community.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team14-social-icons20">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="team14-slider-slide15 swiper-slide"
              >
                <div className="team14-card21">
                  <img
                    alt={props.member4Alt}
                    src={props.member4Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content22">
                    <div className="team14-title21">
                      <span className="team14-text53 thq-body-small">
                        {props.member4 ?? (
                          <Fragment>
                            <span className="team14-text78">Michael Brown</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team14-text54 thq-body-small">
                        {props.member4Job ?? (
                          <Fragment>
                            <span className="team14-text94">
                              Community Manager
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team14-text55 thq-body-small">
                      {props.member4Content ?? (
                        <Fragment>
                          <span className="team14-text77">
                            Michael oversees our community forum, fostering a
                            supportive environment where gardening enthusiasts
                            can connect and share their experiences. His
                            dedication to building a thriving community is
                            evident in the positive interactions among members.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team14-social-icons21">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="team14-slider-slide16 swiper-slide"
              >
                <div className="team14-card22">
                  <img
                    alt={props.member5Alt}
                    src={props.member5Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content23">
                    <div className="team14-title22">
                      <span className="team14-text56 thq-body-small">
                        {props.member5 ?? (
                          <Fragment>
                            <span className="team14-text86">Olivia Garcia</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team14-text57 thq-body-small">
                        {props.member5Job ?? (
                          <Fragment>
                            <span className="team14-text80">
                              Customer Success Specialist
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team14-text58 thq-body-small">
                      {props.member5Content ?? (
                        <Fragment>
                          <span className="team14-text84">
                            Olivia is committed to ensuring that our users have
                            a seamless experience with Meloremedy. She provides
                            personalized support and assistance, making sure
                            that every user feels valued and supported.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team14-social-icons22">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="team14-slider-slide17 swiper-slide"
              >
                <div className="team14-card23">
                  <img
                    alt={props.member6Alt}
                    src={props.member6Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content24">
                    <div className="team14-title23">
                      <span className="team14-text59 thq-body-small">
                        {props.member6 ?? (
                          <Fragment>
                            <span className="team14-text70">
                              David Martinez
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team14-text60 thq-body-small">
                        {props.member6Job ?? (
                          <Fragment>
                            <span className="team14-text87">
                              Sustainability Coordinator
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team14-text61 thq-body-small">
                      {props.member6Content ?? (
                        <Fragment>
                          <span className="team14-text91">
                            David leads our sustainability efforts, ensuring
                            that Meloremedy&apos;s practices align with
                            eco-friendly principles. His dedication to
                            sustainability extends to our packaging and
                            ingredient sourcing, promoting a greener future.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team14-social-icons23">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="team14-slider-slide18 swiper-slide"
              >
                <div className="team14-card24">
                  <img
                    alt={props.member7Alt}
                    src={props.member7Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content25">
                    <div className="team14-title24">
                      <span className="team14-text62 thq-body-small">
                        {props.member7 ?? (
                          <Fragment>
                            <span className="team14-text90">Emma Wilson</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team14-text63 thq-body-small">
                        Job title
                      </span>
                    </div>
                    <span className="team14-text64 thq-body-small">
                      {props.member7Content ?? (
                        <Fragment>
                          <span className="team14-text82">
                            Emma spearheads our marketing initiatives, spreading
                            the word about Meloremedy&apos;s unique offerings.
                            Her creativity and strategic approach help us reach
                            a wider audience and make a positive impact.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team14-social-icons24">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="team14-slider-slide19 swiper-slide"
              >
                <div className="team14-card25">
                  <img
                    alt={props.member8Alt}
                    src={props.member8Src}
                    className="thq-img-ratio-1-1"
                  />
                  <div className="team14-content26">
                    <div className="team14-title25">
                      <span className="team14-text65 thq-body-small">
                        {props.member8 ?? (
                          <Fragment>
                            <span className="team14-text75">Daniel Lopez</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team14-text66 thq-body-small">
                        {props.member8Job ?? (
                          <Fragment>
                            <span className="team14-text92">
                              Customer Relations Manager
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team14-text67 thq-body-small">
                      {props.member8Content ?? (
                        <Fragment>
                          <span className="team14-text72">
                            Daniel focuses on building strong relationships with
                            our users, gathering feedback, and ensuring that
                            their voices are heard. His dedication to customer
                            satisfaction is reflected in the positive
                            testimonials we receive.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team14-social-icons25">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="team14-slider-pagination2 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="swiper-button-next"
            ></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team14-max-width {
            gap: var(--dl-layout-space-twounits);
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .team14-button {
            width: 100%;
            max-width: 300px;
          }
          .team14-content10 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-slider1 {
            width: 100%;
            height: auto;
            display: inline-block;
            position: relative;
            align-self: center;
          }
          .team14-slider-slide10 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .team14-card10 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-content11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-title10 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-text14 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text15 {
            text-align: center;
          }
          .team14-text16 {
            overflow: auto;
            max-height: var(--dl-layout-size-medium);
            text-align: center;
          }
          .team14-social-icons10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-card11 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-content12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-title11 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-text17 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text18 {
            text-align: center;
          }
          .team14-text19 {
            overflow: auto;
            max-height: var(--dl-layout-size-large);
            text-align: left;
          }
          .team14-social-icons11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-card12 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-content13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-title12 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-text20 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text21 {
            text-align: center;
          }
          .team14-text22 {
            overflow: auto;
            max-height: var(--dl-layout-size-large);
            text-align: left;
          }
          .team14-social-icons12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-card13 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-content14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-title13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-text23 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text24 {
            text-align: center;
          }
          .team14-text25 {
            overflow: auto;
            max-height: var(--dl-layout-size-large);
            text-align: left;
          }
          .team14-social-icons13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-slider-slide11 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .team14-card14 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-content15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-title14 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-text26 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text27 {
            text-align: center;
          }
          .team14-text29 {
            overflow: hidden;
            max-height: var(--dl-layout-size-medium);
            text-align: center;
          }
          .team14-social-icons14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-card15 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-content16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-title15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-text31 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text33 {
            text-align: center;
          }
          .team14-text34 {
            overflow: auto;
            max-height: var(--dl-layout-size-medium);
            text-align: center;
          }
          .team14-social-icons15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-card16 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-content17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-title16 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-text35 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text37 {
            text-align: center;
          }
          .team14-text38 {
            overflow: auto;
            max-height: var(--dl-layout-size-medium);
            text-align: center;
          }
          .team14-social-icons16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-card17 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-content18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-title17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team14-text40 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text41 {
            text-align: center;
          }
          .team14-text42 {
            overflow: auto;
            max-height: var(--dl-layout-size-medium);
            text-align: center;
          }
          .team14-social-icons17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-slider-pagination1 {
            display: block;
          }
          .team14-slider2 {
            width: 100%;
            height: auto;
            display: none;
            position: relative;
          }
          .team14-slider-slide12 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .team14-card18 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-content19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-title18 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-text43 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text45 {
            text-align: center;
          }
          .team14-text46 {
            overflow: auto;
            max-height: var(--dl-layout-size-medium);
            text-align: center;
          }
          .team14-social-icons18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-slider-slide13 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .team14-card19 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-content20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-title19 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-text47 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text48 {
            text-align: center;
          }
          .team14-text49 {
            overflow: auto;
            max-height: var(--dl-layout-size-large);
            text-align: left;
          }
          .team14-social-icons19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-slider-slide14 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .team14-card20 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-content21 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-title20 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-text50 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text51 {
            text-align: center;
          }
          .team14-text52 {
            overflow: auto;
            max-height: var(--dl-layout-size-large);
            text-align: left;
          }
          .team14-social-icons20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-slider-slide15 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .team14-card21 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-content22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-title21 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-text53 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text54 {
            text-align: center;
          }
          .team14-text55 {
            overflow: auto;
            max-height: var(--dl-layout-size-large);
            text-align: left;
          }
          .team14-social-icons21 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-slider-slide16 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .team14-card22 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-content23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-title22 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-text56 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text57 {
            text-align: center;
          }
          .team14-text58 {
            overflow: hidden;
            max-height: var(--dl-layout-size-medium);
            text-align: center;
          }
          .team14-social-icons22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-slider-slide17 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .team14-card23 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-content24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-title23 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-text59 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text60 {
            text-align: center;
          }
          .team14-text61 {
            overflow: auto;
            max-height: var(--dl-layout-size-medium);
            text-align: center;
          }
          .team14-social-icons23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-slider-slide18 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .team14-card24 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-content25 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-title24 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-text62 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text63 {
            text-align: center;
          }
          .team14-text64 {
            overflow: auto;
            max-height: var(--dl-layout-size-medium);
            text-align: center;
          }
          .team14-social-icons24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-slider-slide19 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .team14-card25 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-content26 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-title25 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team14-text65 {
            font-style: normal;
            font-weight: 600;
          }
          .team14-text66 {
            text-align: center;
          }
          .team14-text67 {
            overflow: auto;
            max-height: var(--dl-layout-size-medium);
            text-align: center;
          }
          .team14-social-icons25 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .team14-slider-pagination2 {
            display: block;
          }
          .team14-text68 {
            display: inline-block;
          }
          .team14-text69 {
            display: inline-block;
          }
          .team14-text70 {
            display: inline-block;
          }
          .team14-text71 {
            display: inline-block;
          }
          .team14-text72 {
            display: inline-block;
          }
          .team14-text73 {
            display: inline-block;
          }
          .team14-text74 {
            display: inline-block;
          }
          .team14-text75 {
            display: inline-block;
          }
          .team14-text76 {
            display: inline-block;
          }
          .team14-text77 {
            display: inline-block;
          }
          .team14-text78 {
            display: inline-block;
          }
          .team14-text79 {
            display: inline-block;
          }
          .team14-text80 {
            display: inline-block;
          }
          .team14-text81 {
            display: inline-block;
          }
          .team14-text82 {
            display: inline-block;
          }
          .team14-text83 {
            display: inline-block;
          }
          .team14-text84 {
            display: inline-block;
          }
          .team14-text85 {
            display: inline-block;
          }
          .team14-text86 {
            display: inline-block;
          }
          .team14-text87 {
            display: inline-block;
          }
          .team14-text88 {
            display: inline-block;
          }
          .team14-text89 {
            display: inline-block;
          }
          .team14-text90 {
            display: inline-block;
          }
          .team14-text91 {
            display: inline-block;
          }
          .team14-text92 {
            display: inline-block;
          }
          .team14-text93 {
            display: inline-block;
          }
          .team14-text94 {
            display: inline-block;
          }
          .team14-text95 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .team14-max-width {
              padding: var(--dl-layout-space-threeunits);
            }
            .team14-slider1 {
              display: none;
            }
            .team14-slider2 {
              display: block;
            }
          }
          @media (max-width: 479px) {
            .team14-max-width {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .team14-text10 {
              text-align: center;
            }
            .team14-button {
              width: 100%;
            }
            .team14-text13 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Team14.defaultProps = {
  heading1: undefined,
  member2: undefined,
  member6: undefined,
  content1: undefined,
  member8Content: undefined,
  member7Job: undefined,
  member8Src:
    'https://images.unsplash.com/photo-1620117654333-c125fef82817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTgwOTk2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  member7Alt: 'Image of Emma Wilson, Marketing Specialist',
  member3Job: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1558439749-b53250f4ffb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTgwOTk2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  member8: undefined,
  member3Alt: 'Image of Sophia Lee, Plant Care Specialist',
  member1Job: undefined,
  member2Alt: 'Image of Ethan Johnson, Head of Product Development',
  member4Content: undefined,
  member6Alt: 'Image of David Martinez, Sustainability Coordinator',
  member1Alt: 'Image of Alice Smith, Co-Founder & Music Therapist',
  member1Src:
    'https://images.unsplash.com/photo-1572988276585-71035689a285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTgwOTk1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  member4: undefined,
  member4Src:
    'https://images.unsplash.com/photo-1563584316028-2b70b3a3a8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTgwOTk2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  content2: undefined,
  member5Job: undefined,
  member4Alt: 'Image of Michael Brown, Community Manager',
  member2Content: undefined,
  member7Content: undefined,
  member1: undefined,
  member5Content: undefined,
  member1Content: undefined,
  member5: undefined,
  member6Job: undefined,
  member3Content: undefined,
  actionContent: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTgwOTk1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  member7: undefined,
  member8Alt: 'Image of Daniel Lopez, Customer Relations Manager',
  member6Content: undefined,
  member6Src:
    'https://images.unsplash.com/photo-1613730318018-d7cc6d40207f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTgwOTk2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  member8Job: undefined,
  member7Src:
    'https://images.unsplash.com/photo-1530095829295-3924294a386c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTgwOTk2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  member3: undefined,
  member4Job: undefined,
  member5Alt: 'Image of Olivia Garcia, Customer Success Specialist',
  member2Job: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1563240619-44ec0047592c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTgwOTk1OXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Team14.propTypes = {
  heading1: PropTypes.element,
  member2: PropTypes.element,
  member6: PropTypes.element,
  content1: PropTypes.element,
  member8Content: PropTypes.element,
  member7Job: PropTypes.element,
  member8Src: PropTypes.string,
  member7Alt: PropTypes.string,
  member3Job: PropTypes.element,
  member3Src: PropTypes.string,
  member8: PropTypes.element,
  member3Alt: PropTypes.string,
  member1Job: PropTypes.element,
  member2Alt: PropTypes.string,
  member4Content: PropTypes.element,
  member6Alt: PropTypes.string,
  member1Alt: PropTypes.string,
  member1Src: PropTypes.string,
  member4: PropTypes.element,
  member4Src: PropTypes.string,
  content2: PropTypes.element,
  member5Job: PropTypes.element,
  member4Alt: PropTypes.string,
  member2Content: PropTypes.element,
  member7Content: PropTypes.element,
  member1: PropTypes.element,
  member5Content: PropTypes.element,
  member1Content: PropTypes.element,
  member5: PropTypes.element,
  member6Job: PropTypes.element,
  member3Content: PropTypes.element,
  actionContent: PropTypes.element,
  member5Src: PropTypes.string,
  member7: PropTypes.element,
  member8Alt: PropTypes.string,
  member6Content: PropTypes.element,
  member6Src: PropTypes.string,
  member8Job: PropTypes.element,
  member7Src: PropTypes.string,
  member3: PropTypes.element,
  member4Job: PropTypes.element,
  member5Alt: PropTypes.string,
  member2Job: PropTypes.element,
  member2Src: PropTypes.string,
}

export default Team14
