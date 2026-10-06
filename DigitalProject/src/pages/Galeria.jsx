import image from '../assets/galeria/image.png';
import imageCopy from '../assets/galeria/imageCopy.png';
import imageCopy2 from '../assets/galeria/imageCopy2.png';
import imageCopy3 from '../assets/galeria/imageCopy3.png';
import imageCopy4 from '../assets/galeria/imageCopy4.png';
import imageCopy5 from '../assets/galeria/imageCopy5.png';
import imageCopy6 from '../assets/galeria/imageCopy6.png';
import imageCopy7 from '../assets/galeria/imageCopy7.png';

function Galeria() {
    return (
        <section className="gallery">
            <div className="gallery-item">
               <img src={image} />
            </div>
            <div className="gallery-item">
               <img src={imageCopy} />
            </div>
            <div className="gallery-item">
               <img src={imageCopy2} />
            </div>
            <div className="gallery-item">
               <img src={imageCopy3} />
            </div>
            <div className="gallery-item">
               <img src={imageCopy4} />
            </div>
            <div className="gallery-item">
               <img src={imageCopy5} />
            </div>
            <div className="gallery-item">
               <img src={imageCopy6} />
            </div>
            <div className="gallery-item">
               <img src={imageCopy7} />
            </div>
        </section>
    );
}

export default Galeria;