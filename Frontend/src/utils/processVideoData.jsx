// Función para procesar los datos del video
const processVideoData = (videoItem) => {
  // Verificar si las propiedades existen antes de acceder a ellas
  const filename = videoItem?.filename?.filename
  const metadata = videoItem?.filename?.metadata
  const uploadDate = videoItem?.uploadDate
  const id = videoItem?._id

  if (filename && metadata && uploadDate && id) {
    const videoName = filename
    const videoTags = metadata.etiquetas
    const videoPart = videoName.split('-').join(' ')
    const videoTitle = videoPart.split('.', 1).toString()
    const formattedUploadDate = new Date(uploadDate).toLocaleDateString()
    const videoUrl = `/one-piece/${videoName}/${id}`

    return { videoUrl, formattedUploadDate, videoTags, videoTitle }
  }

  return null
}

export default processVideoData
