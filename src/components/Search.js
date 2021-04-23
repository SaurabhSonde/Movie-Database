import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Search = ({ search }) => {
  //for search
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const callSearch = (e) => {
    e.preventDefault();
    search(searchValue);
  };

  return (
    <div>
      <InputGroup className="mt-5 p-5">
        <FormControl
          placeholder="Search Movie,Series here"
          onChange={handleChange}
          value={searchValue}
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            onClick={callSearch}
            type="submit"
          >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Search;
