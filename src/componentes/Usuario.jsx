import React from 'react'

function Usuario(props) {
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={props.imagen} className="card-img-top" alt="Paisaje"/>
                <div className="card-body">
                    <h1>{props.nombre}</h1>
                    <p className="card-text">{props.cargo}</p>
                    <a href="" className='btn btn-color'>{props.conoceme}</a>
                </div>
            </div>
        </div>
    )
}

export default Usuario