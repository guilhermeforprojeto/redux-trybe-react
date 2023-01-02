import React from "react";

function Sidebar({ categories }) {
  return (
    <aside className="sidebar-container" >
      {categories.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {category.movie.map((movie) => (
              <li key={movie.id}>
                {movie.title} was released in {movie.released}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}

export default Sidebar;