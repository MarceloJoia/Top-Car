import './style.css';

export default function SearchBar() {
    return (
        <form className="search-bar form-control">
            <input className="form-control"  type="text" placeholder="Nome do produto" />
            <button className="search-barsubmit" type="submit">Buscar</button>
        </form>
    );
}