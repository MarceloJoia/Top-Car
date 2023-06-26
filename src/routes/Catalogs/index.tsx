import './style.css';

import Product from '../../componets/Product';
import SearchBar from '../../componets/SearchBar';

export default function Catalog() {
    return (
        <>
            <main>
                <div className="ct-container mt-30">
                    <SearchBar />
                    <section className="pt-20">

                        <div className="grid-container">
                            <div className="grid-element">
                                <Product />
                            </div>
                            <div className="grid-element">
                                <Product />
                            </div>
                            <div className="grid-element">
                                <Product />
                            </div>
                            <div className="grid-element">
                                <Product />
                            </div>
                            <div className="grid-element">
                                <Product />
                            </div>
                            <div className="grid-element">
                                <Product />
                            </div>
                            <div className="grid-element">
                                <Product />
                            </div>
                            <div className="grid-element">
                                <Product />
                            </div>
                            <div className="grid-element">
                                <Product />
                            </div>

                        </div>

                    </section>
                </div>
            </main>
        </>
    );
}