export const mapper = data => {
  // console.log(data);
  return data.map(({ poster_path, id, original_title, vote_average }) => ({
    poster_path,
    id,
    original_title,
    vote_average,
  }));
};
