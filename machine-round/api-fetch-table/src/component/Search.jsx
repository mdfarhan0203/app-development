
const Search = ({ onSearch  }) => {
  return (
    <div>
      <input type="text" placeholder="Search by name, email, or phone" 
      style={{padding:"10px",width:"20rem"}}
      onChange={(e)=>onSearch(e)}
      />
    </div>
  );
};

export default Search;
