import React from 'react';

const YoutubeEmbed = () => {
    const embedUrl = `https://www.youtube.com/embed/-IpGYKPtPP4?si=ToCtVpfRE-zhFSH3`; // last code to be changed only not the whole URL
    return (
        <>
            <iframe
                className='size-full'
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                title="YouTube Video"
            ></iframe>
        </>
    )
}

export default YoutubeEmbed;
