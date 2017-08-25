import _ from 'lodash'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { GenericCard } from './../components/GenericCard'
import { posterData } from '../data/posterData'
import '../styles/posters.css'

class Posters extends Component {
  constructor (props) {
    super(props)
    this.state = {
      topCoord: null
    }
  }

  componentDidMount () {
    this.setState({
      topCoord: this.refs.pageContainer.offsetTop
    })
  }

  render () {
    return (
      <div
        ref='pageContainer'
        className='container valign-wrapper'
        style={{
          marginBottom: 0,
          minHeight: `calc(100vh - ${this.state.topCoord || '64'}px)`,
          width: '100%'
        }}
      >
        <Helmet>
          <title>Posters | Resource Center</title>
        </Helmet>
        <div
          className='row flow-text'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <h2 style={{ flex: '1 100%' }}>Poster Resources</h2>

          {_.map(
            posterData,
            ({ hoverable, link, cardTitle, description, contactInfo }, key) => {
              return (
                <div key={key} className='col s12 m6 flex-div'>
                  <GenericCard
                    hoverable={hoverable}
                    link={link}
                    cardTitle={cardTitle}
                  >
                    {description}
                    {contactInfo !== undefined
                      ? <div style={{ marginBottom: '0' }}>
                        <br />
                        {_.map(contactInfo, ({ link, linkText }, key) => {
                          return (
                            <p
                              style={{
                                margin: '0 10px'
                              }}
                              key={key}
                              >
                              <Link to={link}>
                                {linkText}
                              </Link>
                            </p>
                          )
                        })}
                      </div>
                      : null}
                  </GenericCard>
                </div>
              )
            }
          )}
        </div>
      </div>
    )
  }
}

export default Posters
