import React, {useContext, useState} from 'react'
import Links from './Links';
import { ResultContext } from "../context/Result.context";
function Search() {
  const {setSearchTerm} = useContext(ResultContext);
  const [text, setText] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSearchTerm(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             value={text}
             className=" sm:w-24 md:w-80 h-8 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
             onChange={(evt)=>setText(evt.target.value)}
      />
      <Links />
    </form>
  )
}

export default Search;