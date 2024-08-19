import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
const Sidebar = () => {
  const [extented, setExtented] = useState(false);
  const { prevPromt, onSent, setRecentPrompt } = useContext(Context);
  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => {
            setExtented((prev) => !prev);
          }}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" onClick={() => location.reload()}/>
          {extented ? <p>New Chat</p> : null}
        </div>
        {/* {extented ? (
        //   <div className="recent">
        //     <p className="recent-title">Recent</p>
        //     {prevPromt.map((item) => {
        //       return (
        //         <div className="recent-entry">
        //           <img src={assets.message_icon} alt="" />
        //           <p>{item} ...</p>
        //         </div>
        //       )
        //     })}
        //   </div>
        ) : null} */}
      </div>
      <div className="botom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extented ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extented ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extented ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
