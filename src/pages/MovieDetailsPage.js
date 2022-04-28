import { Link } from 'react-router-dom';
export default function MovieDetailsPage() {
  return (
    <>
      <button type="button">Go Back</button>
      <section>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2>Movie Title</h2>
          <p>Vote</p>
          <h3>Overwiew</h3>
          <p>Overwiew</p>
          <h3>Genres</h3>
        </div>
      </section>
      <div>
        <p>Aditional Information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
