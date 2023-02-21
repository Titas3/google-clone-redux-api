import React,{useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
// import {useHistory} from 'react-roter';
import './Search.css'
import { useNavigate } from 'react-router-dom';
import {useStateValue} from './StateProvider.js'
import { actionTypes } from './reducer';

const Search = ({hidebuttons}) => {
  const[{},dispatch] =  useStateValue()
  const[input,setInput] = useState("");
  const navigate = useNavigate();
  const Search=(e)=>{
    e.preventDefault();
    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term:input
    })
    // alert(input);
    navigate('/Search')
  }


  return (
    // <div>Search Component</div>
    <form className='search'>
        <div className="search__input">
          <SearchIcon
            className='searchicon'
          />  
          <input value={input} onChange={e=>setInput(e.target.value)}/>
          <MicIcon/>
        </div>
        {
          !hidebuttons ? ( <div className="search__buttons">
            <button type='submit' onClick={Search} variant="outlined">Google Search</button>
            <button type='submit' variant="outlined">I am feeling lucky</button>
        </div>) : ( <div className="search__buttons" style={{display:'none'}}>
            <button type='submit' onClick={Search} variant="outlined">Google Search</button>
           
        </div>)
        }
       
    </form>
  )
}

export default Search