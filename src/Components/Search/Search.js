import "./Search.css";
// import { FaSearch } from "react-icons/fa";
import { FormGroup, FormControl, Placeholder } from "react-bootstrap";

class Search extends React.Component {
  render() {
    return (
      <div className="SearchBox">
      <FormGroup id="searchForm">
        <FormControl as="select" size="lg">
          <option>Select By Municipality...</option>
          <option>Adjuntas</option>
          <option>Aguada</option>
          <option>Aguadilla</option>
          <option>Aguas Buenas</option>
          <option>Aibonito</option>
          <option>Arecibo</option>
          <option>Arroyo</option>
          <option>Añasco</option>
          <option>Barceloneta</option>
          <option>Barranquitas</option>
          <option>Bayamón</option>
          <option>Cabo Rojo</option>
          <option>Caguas</option>
          <option>Camuy</option>
          <option>Canóvanas</option>
          <option>Carolina</option>
          <option>Cataño</option>
          <option>Cayey</option>
          <option>Ceiba</option>
          <option>Ciales</option>
          <option>Cidra</option>
          <option>Coamo</option>
          <option>Comerío</option>
          <option>Corozal</option>
          <option>Culebra</option>
          <option>Dorado</option>
          <option>Fajardo</option>
          <option>Florida</option>
          <option>Guayama</option>
          <option>Guayanilla</option>
          <option>Guaynabo</option>
          <option>Gurabo</option>
          <option>Guánica</option>
          <option>Hatillo</option>
          <option>Hormigueros</option>
          <option>Humacao</option>
          <option>Isabela</option>
          <option>Jayuya</option>
          <option>Juana Díaz</option>
          <option>Juncos</option>
          <option>Lajas</option>
          <option>Lares</option>
          <option>Las Marías</option>
          <option>Las Piedras</option>
          <option>Loiza</option>
          <option>Luquillo</option>
          <option>Manatí</option>
          <option>Maricao</option>
          <option>Maunabo</option>
          <option>Mayagüez</option>
          <option>Moca</option>
          <option>Morovis</option>
          <option>Naguabo</option>
          <option>Naranjito</option>
          <option>Orocovis</option>
          <option>Patillas</option>
          <option>Peñuelas</option>
          <option>Ponce</option>
          <option>Quebradillas</option>
          <option>Rincón</option>
          <option>Rio Grande</option>
          <option>Sabana Grande</option>
          <option>Salinas</option>
          <option>San Germán</option>
          <option>San Juan</option>
          <option>San Lorenzo</option>
          <option>San Sebastián</option>
          <option>Santa Isabel</option>
          <option>Toa Alta</option>
          <option>Toa Baja</option>
          <option>Trujillo Alto</option>
          <option>Utuado</option>
          <option>Vega Alta</option>
          <option>Vega Baja</option>
          <option>Vieques</option>
          <option>Villalba</option>
          <option>Yabucoa</option>
          <option>Yauco</option>
        </FormControl>
      </FormGroup>
      <button
          type="button"
          className="searchButton"
          onClick={this.props.search}
        >
          Enter
      </button>
      </div>
    );
  }
}

export default Search;
