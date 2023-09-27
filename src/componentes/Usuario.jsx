import React from 'react';
import './usuario.css'; 
import html2canvas from 'html2canvas';

function Usuario(props) {

    const descargarCV = () => {
        html2canvas(document.querySelector("#exportar")).then(function (canvas) {
            let img = canvas.toDataURL("image/png"); 
            let link = document.createElement("a");
            link.download = "cv.png"; 
            link.href = img;
            link.click();
        });
    }

    return (
        <div>
            <div id='exportar' className="card" style={{width: '18rem'}}>
                <img src={props.imagen} className="card-img-top" alt="Paisaje"/>
                <div className="card-body">
                    <h1>{props.nombre}</h1>
                    <p className="card-text">{props.cargo}</p>
                    <button onClick={descargarCV} className='btn-color'>Descargar CV</button>
                </div>
            </div>
        </div>
    )
}

export default Usuario;
