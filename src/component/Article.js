import React from 'react'

function Article({children,prix,nom}) {
    if (children) {
        return (
            <div>
                <h1>Marque :{children}</h1>
                <span>Prix :{prix}</span>
            </div>
        )
    } else {
        return(
            <div>
                <h1>Marque :{nom}</h1>
                <span>Prix :{prix}</span>
            </div>
        )
    }
}

export default Article
