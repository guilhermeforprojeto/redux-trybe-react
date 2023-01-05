import { connect } from "react-redux"

function Player({ selectedCategory, selectedMovie }) {
  return (
    <section className="player">
      <h1> {selectedCategory.name}</h1>
      <h2> {selectedMovie.title}</h2>
    </section>
  );
}

const mapStateToProps = (store) => ({
  selectedCategory: store.movies.selectedCategory,
  selectedMovie: store.movies.selectedMovie,
})



export default connect(mapStateToProps)(Player);