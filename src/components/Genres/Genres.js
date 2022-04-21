import axios from "axios";
import React, { useEffect } from "react";

// MUI
import { Chip } from "@material-ui/core";

const Genres = ({
  type,
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  setPage,
}) => {
  // Adding Genres
  const handleAdd = genre => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter(g => g.id !== genre.id));
    setPage(1);
  };

  // Removing Genres
  const handleRemove = genre => {
    setSelectedGenres(
      selectedGenres.filter(selected => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres([]);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0", marginLeft: "10px" }}>
      {selectedGenres &&
        selectedGenres.map(genre => (
          <Chip
            key={genre.id}
            label={genre.name}
            style={{ margin: 5 }}
            color="primary"
            clickable
            onDelete={() => handleRemove(genre)}
          />
        ))}

      {genres &&
        genres.map(genre => (
          <Chip
            key={genre.id}
            label={genre.name}
            style={{ margin: 5 }}
            clickable
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
