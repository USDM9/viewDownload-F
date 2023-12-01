import React, { useEffect, useState } from 'react'
import CardComponent from './components/CardComponent'
import LoadingEffect from '../../components/loadingEffect/LoadingEffect'
import ErrorPage from '../ErrorPage/ErrorPage'
import processVideoData from '../../utils/processVideoData'

// Home component
const HomePage = () => {
  // State for videoData and errorStatus
  const [videoData, setVideoData] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)

  // Server URL
  const serverUrl = import.meta.env.VITE_ENDPOINT_URL

  // Fetch data on component mount
  useEffect(() => {
    fetch(serverUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Page ${response.statusText} (${response.status.toString()})`
          )
        }
        if (response.status === 200) {
          return response.json()
        }
      })
      .then((data) => {
        setVideoData(data)
      })
      .catch((error) => {
        setErrorStatus(error)
      })
  }, []) // Specify dependencies if any

  return (
    <main>
      {videoData
        ? (videoData
            .map((videoItem) => {
            // Extract data from videoItem
              const processedData = processVideoData(videoItem)
              return (
              // Render CardComponent for each videoItem
                <div key={videoItem._id} className='gridContainerCards'>
                  <CardComponent {...processedData} />
                </div>
              )
            })
          ) : errorStatus
            ? (
              <ErrorPage err={errorStatus} />
              )
            : (
              <LoadingEffect />
              )}
    </main>
  )
}

export default HomePage
