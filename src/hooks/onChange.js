import {useState} from "react";

const useChange = (initialState) => {
  const [value, setValue] = useState(initialState);

  const onChange = (e) => {
      setValue(e.target.value)
  };

  return [value, onChange]
};

export default useChange
