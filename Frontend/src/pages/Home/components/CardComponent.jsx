import React from 'react'
import { Link } from 'react-router-dom'

const CardComponent = (processedData) => {
  const {
    videoUrl,
    formattedUploadDate,
    videoTags,
    videoTitle
  } = processedData

  return (
    <>
      <div className=' gridCard'>
        <Link to={videoUrl}>
          <div className='cardInfo'>
            <div className='containerCardDate'>
              <span className='cardDate'>{formattedUploadDate.split(',', 1).toString()}</span>
            </div>
            <h1 className='cardTitle'>{videoTitle}</h1>
            <div className='cardContainerTags'>
              <ul className='cardListTags'>
                {videoTags.map((tag, idx) => {
                  return (
                    <li key={idx}>
                      <span className='cardTagText'>{tag}</span>
                    </li>
                  )
                })}

              </ul>
            </div>

          </div>
        </Link>
      </div>
    </>
  )
}

export default CardComponent
