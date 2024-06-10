import React from 'react'

type GitItemProps = {
    title: string,
    url: string
}

export const GifItem = ({title, url}: GitItemProps) => {

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
