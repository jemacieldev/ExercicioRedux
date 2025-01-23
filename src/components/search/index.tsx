import { SearchInput } from "./style";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../store/slices/searchSlice";

const Search = () => {
    const dispatch = useDispatch();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(e.target.value)); 
    };

    return <SearchInput placeholder="Buscar contato" type="search" onChange={handleSearch} />;
};

export default Search;
