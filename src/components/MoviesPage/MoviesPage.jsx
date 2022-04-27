// import { useState } from 'react';
// import { Form, Button, SearchSvg, Input } from './MoviesPage.styled';
// import { toast } from 'react-toastify';

// function MoviesPage() {
//   const [query, setQuery] = useState('');
//   const onFormSubmit = e => {
//     e.preventDefault();
//     if (query.trim() === '') {
//       toast.error('Nothing found');
//       return;
//     }
//   };

//   const resetForm = () => {
//     setQuery('');
//   };

//   const onChangeQuery = e => {
//     setQuery(e.currentTarget.value.toLowerCase());
//   };

//   return (
//     <Form onSubmit={onFormSubmit}>
//       <Button type="submit">
//         <span>
//           <SearchSvg />
//         </span>
//       </Button>
//       <Input type="text" name="query" value={query} onChange={onChangeQuery} />
//     </Form>
//   );
// }

// export default MoviesPage;
