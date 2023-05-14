import moment from 'moment'
import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

function Track({tracks}) {
        return tracks && tracks.length ?
        tracks.map((track)=>{
          return(
            <div className="col-auto">
          <div className="card p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="ms-2 c-details">
                  <h6 className="mb-0">{track.artist.name}</h6>
                  <span>{moment(track.release_date).format("MMMM Do YYYY")}</span>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h4 className="heading">{track.title}</h4>
              <div className="container mt-2">
                <ReactAudioPlayer src={`${track.preview}`} controls  />
              </div>
            </div>
          </div>
        </div>
    
          )
        }):null
      }


export default Track