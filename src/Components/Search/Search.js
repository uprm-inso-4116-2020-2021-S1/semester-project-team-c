import React from "react";
import "./Search.css";
import { FormGroup, FormControl, Placeholder } from "react-bootstrap";

class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      term : '',
    };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(event){
    this.setState({term : event.target.value});
  }

  search(){
    this.props.search(this.state.term)
  }

  render() {
    return (
      <div className="SearchBox">
      <FormGroup id="searchForm">
        <FormControl as="select" size="lg" onChange={this.handleTermChange}>
          <option>Select By Municipality...</option>
          <option>Adjuntas</option>
          <option>Aguada</option>
          <option>Aguadilla</option>
          <option>Aguas Buenas</option>
          <option>Aibonito</option>
          <option>Arecibo</option>
          <option>Arroyo</option>
          <option>Anasco</option>
          <option>Barceloneta</option>
          <option>Barranquitas</option>
          <option>Bayamon</option>
          <option>Cabo Rojo</option>
          <option>Caguas</option>
          <option>Camuy</option>
          <option>Canovanas</option>
          <option>Carolina</option>
          <option>Catano</option>
          <option>Cayey</option>
          <option>Ceiba</option>
          <option>Ciales</option>
          <option>Cidra</option>
          <option>Coamo</option>
          <option>Comerio</option>
          <option>Corozal</option>
          <option>Culebra</option>
          <option>Dorado</option>
          <option>Fajardo</option>
          <option>Florida</option>
          <option>Guayama</option>
          <option>Guayanilla</option>
          <option>Guaynabo</option>
          <option>Gurabo</option>
          <option>Guanica</option>
          <option>Hatillo</option>
          <option>Hormigueros</option>
          <option>Humacao</option>
          <option>Isabela</option>
          <option>Jayuya</option>
          <option>Juana Diaz</option>
          <option>Juncos</option>
          <option>Lajas</option>
          <option>Lares</option>
          <option>Las Marias</option>
          <option>Las Piedras</option>
          <option>Loiza</option>
          <option>Luquillo</option>
          <option>Manati</option>
          <option>Maricao</option>
          <option>Maunabo</option>
          <option>Mayaguez</option>
          <option>Moca</option>
          <option>Morovis</option>
          <option>Naguabo</option>
          <option>Naranjito</option>
          <option>Orocovis</option>
          <option>Patillas</option>
          <option>Penuelas</option>
          <option>Ponce</option>
          <option>Quebradillas</option>
          <option>Rincon</option>
          <option>Rio Grande</option>
          <option>Sabana Grande</option>
          <option>Salinas</option>
          <option>San German</option>
          <option>San Juan</option>
          <option>San Lorenzo</option>
          <option>San Sebastian</option>
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
          onClick={this.search}
        >
          Enter
      </button>
      </div>
    );
  }
}

export default Search;
