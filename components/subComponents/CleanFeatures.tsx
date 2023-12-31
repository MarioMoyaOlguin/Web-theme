import { SpecialtyCard } from "./Specialties";

export const CleanFeatures = ( {styles, path, title, extraPath }: SpecialtyCard ) => {


  return (

    <div className="flex flex-col items-center p-1 md:items-start">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
        className={`${styles} fill-orange-600 mb-3`} viewBox="0 0 16 16">
            <path d={`${path}`} />
        </svg>
        <h3 className="uppercase font-bold text-sm text-center">{`${title}`}</h3>
        <p className="hidden md:block font-light leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beata
            vitae dicta sunt explicabo.
        </p>
    </div>
  )
}

