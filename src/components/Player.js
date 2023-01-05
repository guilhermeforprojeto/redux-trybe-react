import { connect } from "react-redux"

function Player({ selectedCategory, selectedMovie }) {
  return (
    <section className="player">
      <h1>Selecione um filme a cima</h1>
      <div className="player-container">
        <h1> Categoria: {selectedCategory.name}</h1>
        <h2> Filme: {selectedMovie.title}</h2>
      </div>

    </section>
  );
}

const mapStateToProps = (store) => ({
  selectedCategory: store.movies.selectedCategory,
  selectedMovie: store.movies.selectedMovie,
})



export default connect(mapStateToProps)(Player);