import { TiGroup } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
import { MdVideoCameraFront, MdWifiCalling3 } from "react-icons/md";
import { HiEmojiHappy } from "react-icons/hi";
import { FiPaperclip } from "react-icons/fi";
import { AiTwotoneAudio } from "react-icons/ai";

function ChatBox() {
  return (
    <div className="box">
      <div className="contact">
        <div className="contact-head">
          <h3 className="mgs">Messaging</h3>
          <NavLink to="/chat" className="grp">
            <h2>
              <TiGroup />
            </h2>
          </NavLink>
          <NavLink to="/chat" className="dot">
            <h2>
              <HiDotsVertical />
            </h2>
          </NavLink>
        </div>
        <div className="contact-search"></div>
        <div className="contact-con">
          <div className="uchat">
            <div className="usrimage">
              <img src="./image/userpic.jpg" alt="user image" />
            </div>
            <div className="uinfo">
              <h3>user name</h3>
              <p>last message</p>
            </div>
          </div>
        </div>
      </div>
      <div className="chat">
        <div className="chat-head">
          <div className="usrimage">
            <img src="./image/userpic.jpg" alt="user image" />
          </div>
          <NavLink to="/profile" className="usrname">
            <h3>User Name</h3>
          </NavLink>
          <NavLink to="/chat" className="call">
            <h2>
              <MdWifiCalling3 />
            </h2>
          </NavLink>
          <NavLink to="/chat" className="vdcall">
            <h2>
              <MdVideoCameraFront />
            </h2>
          </NavLink>
          <NavLink to="/chat" className="dot">
            <h2>
              <HiDotsVertical />
            </h2>
          </NavLink>
        </div>
        <div className="chat-chat">
          <div className="chatmgs">
            <div className="me">
              <p>Hii</p>
              <p>i am fine and you Bro?</p>
              <p>Hii how are you?</p>
              <p>i am good how is your day</p>
              <p>Hii how are you?</p>
              <p>i am good how is your day</p>
              <p>Hii how are you?</p>
              <p>i am good how is your day</p>
              <p>Hii how are you?</p>
              <p>i am good how is your day</p>
            </div>
            <div className="frnd">
              <p>Hii how are you?</p>
              <p>i am good how is your day</p>
              <p>Hii how are you?</p>
              <p>Hii how are you?</p>
              <p>i am good how is your day</p>
              <p>i am good how is your day</p>
              <p>Hii how are you?</p>
              <p>i am good how is your day</p>
              <p>Hii how are you?</p>
              <p>i am good how is your day</p>
            </div>
          </div>
        </div>
        <div className="chat-input">
          <NavLink to="/chat" className="emoji">
            <h2>
              <HiEmojiHappy />
            </h2>
          </NavLink>
          <NavLink to="/chat" className="doc">
            <h2>
              <FiPaperclip />
            </h2>
          </NavLink>
          <input
            type="text"
            placeholder="Type a Message"
            className="ip"
            autoComplete="off"
            required
          />
          <NavLink to="/chat" className="audio">
            <h2>
              <AiTwotoneAudio />
            </h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
