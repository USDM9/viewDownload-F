// Import necessary hooks and components from React and react-router-dom
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import EfectLoading from '../../components/loadingEffect/LoadingEffect'

// Define the StreamingOp component
const StreamingOp = ({ handle }) => {
  // Use the useParams hook to get the id parameter from the URL
  const { id } = useParams()

  // Define a state variable for loading status
  const [isLoading, setIsLoading] = useState(true)

  // Create a reference for the iframe
  const iframeRef = useRef(null)

  // Use the useEffect hook to add an event listener to the iframe
  useEffect(() => {
    const iframe = iframeRef.current

    // Define a function to handle the load event
    const handleLoad = () => {
      setIsLoading(false)
    }

    // Add the event listener to the iframe
    if (iframe) iframe.addEventListener('load', handleLoad)

    // Clean up function to remove the event listener
    return () => {
      if (iframe) iframe.removeEventListener('load', handleLoad)
    }
  }, [])

  // Use the useEffect hook to call the handle function
  useEffect(() => {
    handle(false)
    return () => handle(true)
  }, [handle])

  // Return the JSX for the component
  return (
    <div className='containerVideo'>
      {isLoading && <EfectLoading />}
      <iframe ref={iframeRef} style={{ width: '100%', height: '100%', display: isLoading ? 'none' : 'block' }} src={`http://localhost:3080/one-piece/${id}`} frameBorder='0' allowFullScreen />
    </div>
  )
}

// Export the StreamingOp component
export default StreamingOp
