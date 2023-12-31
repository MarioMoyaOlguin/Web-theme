interface videoProps {
    embedUrl:string
}

export const Video = ({embedUrl}:videoProps) => {

  return (

    <div className="relative overflow-hidden h-80 md:h-auto md:w-7/12 lg:w-2/3">
        <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${embedUrl}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute overflow-hidden 0 border-0 self-center top-0 left-0"
            allowFullScreen
        >
        </iframe>
    </div>
  )
}