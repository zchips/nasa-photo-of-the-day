import React from 'react';

const dummyD = {
    date: "2023-03-30",
    explanation: "The delightful Dark Doodad Nebula drifts through southern skies, a tantalizing target for binoculars toward the small constellation Musca, The Fly. The dusty cosmic cloud is seen against rich starfields just south of the Coalsack Nebula and the Southern Cross. Stretching for about 3 degrees across the center of this telephoto field of view, the Dark Doodad is punctuated near its southern tip (upper right) by yellowish globular star cluster NGC 4372. Of course NGC 4372 roams the halo of our Milky Way Galaxy, a background object some 20,000 light-years away and only by chance along our line-of-sight to the Dark Doodad. The Dark Doodad's well defined silhouette belongs to the Musca molecular cloud, but its better known alliterative moniker was first coined by astro-imager and writer Dennis di Cicco in 1986 while observing Comet Halley from the Australian outback. The Dark Doodad is around 700 light-years distant and over 30 light-years long.",
    hdurl: "https://apod.nasa.gov/apod/image/2303/Doodad200mmAPOD.jpg",
    title: "NGC 4372 and the Dark Doodad"
    }

const NasaPhoto = (props) =>{

    return (
        <div className='nasa-photo-wrapper'>
            <h2>{props.photo.title}</h2>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} alt=""/>
            <p>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto