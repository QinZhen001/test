import { useState } from "react";
import { M3U8Video } from "../../components/video";
import "./index.css";

// 9aae5035764dbcb398106188c6d145e1
const defaultSid = "";

export const DefaultPageComponent = () => {
  const [sid, setSid] = useState(defaultSid);

  const onClickSid = () => {
    const ele = document.getElementById("input-sid") as HTMLInputElement;
    setSid(ele.value);
  };

  return (
    <div>
      <input id="input-sid" className="input-sid" type="text" />
      <button className="btn-sid" onClick={onClickSid}>
        设置sid
      </button>
      {sid ? <M3U8Video sid={sid}></M3U8Video> : null}
    </div>
  );
};
