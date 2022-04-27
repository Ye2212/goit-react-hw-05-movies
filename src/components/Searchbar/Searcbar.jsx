// import propTypes from 'prop-types';
import { toast } from 'react-toastify';

import { useState } from 'react';
import { Form, Button, SearchSvg, Input } from './Searchbar.styled';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Your request is not correct.');
      return;
    }
    onSubmit(query);
    resetForm();
  };

  const resetForm = () => {
    setQuery('');
  };

  const onChangeQuery = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Button type="submit">
        <span>
          <SearchSvg />
        </span>
      </Button>
      <Input
        type="text"
        name="query"
        value={query}
        onChange={onChangeQuery}
      ></Input>
    </Form>
  );
}

// Searchbar.propTypes = {
//   onSubmit: propTypes.func.isRequired,
// };

export default Searchbar;
