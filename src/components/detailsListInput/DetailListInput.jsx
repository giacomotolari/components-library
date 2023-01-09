import { Fragment, useState } from "react";

function DetailListInput({ placeholder, list, uniqueId }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <Fragment>
      <input
        placeholder={placeholder || "select item"}
        list="opts"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <datalist id="opts">
        {list &&
          list.map((item, index) => (
            <option key={item.id || uniqueId || index} value={item}>
              {item}
            </option>
          ))}
      </datalist>
    </Fragment>
  );
}

export default DetailListInput;
