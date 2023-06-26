import './style.css';

import carImg from '../../assets/car.png';
import BtnComprar from '../BtnComprar';

export default function Product() {
    return (
        <>
            <div className="card-catalog-content">
                <img src={carImg} alt="Carro" />
                <h2 className="mb-20">Audi Supra TT</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>

                <BtnComprar />

            </div>
        </>
    );
}