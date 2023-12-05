import React, {useState} from 'react';

const LikeBtn = () => {
    const [value, setValue] = useState("like"); 
  
    const handleClick = () => {
      setValue((value === "like") ?  'liked' : 'like');
    };
  
    return (
      <button onClick={handleClick}
      className={value}>
       {value}
      </button>
    );
};

export default LikeBtn;