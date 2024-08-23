import PropTypes from "prop-types";
import React from "react";
import { Attatchment01 } from "./Attatchment01";
import { Microphone01 } from "./Microphone01";
import "./style.css";

export const Input = ({
  dscr = true,
  actionDescr = true,
  description = true,
  state,
  visible = true,
  visible1 = true,
  telegramFill = "telegram-fill.svg",
}) => {
  return (
    <div className="input">
      <div className="input-case">
        <div className="content">
          {visible && <Attatchment01 className="icon-instance-node" />}

          <div className="send-a-message">Send a message</div>
          {visible1 && <Microphone01 className="icon-instance-node" />}

          <img className="icon-instance-node" alt="Telegram fill" src={telegramFill} />
        </div>
      </div>
      {dscr && (
        <div className="dscr">
          {description && <div className="description">Description</div>}

          {actionDescr && <p className="ESC-or-click-to">ESC or Click to cancel</p>}
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  dscr: PropTypes.bool,
  actionDescr: PropTypes.bool,
  description: PropTypes.bool,
  state: PropTypes.oneOf(["default"]),
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  telegramFill: PropTypes.string,
};
