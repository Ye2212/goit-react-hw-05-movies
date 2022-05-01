// // import propTypes from 'prop-types';
// import { toast } from 'react-toastify';
// import { fetchMoviesBySearch } from 'services/api';

// import { useState } from 'react';
// import { Form, Button, SearchSvg, Input } from './Searchbar.styled';

// function Searchbar() {
//   // const [query, setQuery] = useState('');
//   const onFormSubmit = e => {
//     e.preventDefault();

//     const searchQuery = e.target.elements.query.value;
//     // console.log(query);
//     // if (searchQuery.trim() === '') {
//     //   toast.error('Your request is not correct.');
//     //   return;
//     // }
//     fetchMoviesBySearch(searchQuery).then(r => console.log(r.results));
//     // resetForm();
//   };

//   // const resetForm = () => {
//   //   setQuery('');
//   // };

//   // const onChangeQuery = e => {
//   //   setQuery(e.target.elements.query.value);
//   // };

//   return (
//     <Form onSubmit={onFormSubmit}>
//       <Button type="submit">
//         {/* <span> */}
//           <SearchSvg />
//         </span>
//       </Button>
//       <Input
//         type="text"
//         name="query"
//         // value={searchQuery}
//         // onChange={onChangeQuery}
//       ></Input>
//     </Form>
//   );
// }

// // Searchbar.propTypes = {
// //   onSubmit: propTypes.func.isRequired,
// // };

// export default Searchbar;
