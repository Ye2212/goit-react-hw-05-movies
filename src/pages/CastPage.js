import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import Cast from 'components/Cast/Cast';

export default function CastPage() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId).then(r => {
      const mappedActors = [];
      r.cast.map(({ id, original_name, profile_path }) => {
        const actor = {
          id: id,
          name: original_name,
          photo: profile_path,
        };
        return mappedActors.push(actor);
      });
      setCast(mappedActors);
    });
  }, [movieId]);
  console.log(cast);
  return cast && <Cast cast={cast} />;
}
