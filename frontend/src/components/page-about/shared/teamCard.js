import * as React from "react";
import { MailIcon } from "../../svgs";

const TeamCard = ({ info, customClassName, type, index, handleClick }) => {
  return (
    <div className="flex flex-col items-start gap-y-3">
      <button className="text-left w-full" onClick={() => handleClick(type, index)}>
        {info?.img ? (
          <img src={info.img} alt={info.name} className="w-full mb-0" />
        ) : (
          <div className="w-full pb-[101.5%] bg-[#5E5E5E]">
            &nbsp;
          </div>
        )}
      </button>
      <div className={`flex-col flex w-full ${customClassName.container}`}>
        <button className="text-left" onClick={() => handleClick(type, index)}>
          <h3 className={`font-bold ${customClassName.h3}`}>{info.name}</h3>
          <div className={customClassName.role}>{info.role}</div>
        </button>
        {info.email && (
          <div className="flex items-center gap-x-1 text-sm font-medium">
            {info.emailIcon && (
              <span>
                <MailIcon className="w-5 h-5" />
              </span>
            )}
            <a
              href={`mailto:${info.email}`}
              className="no-underline text-Shades-100 break-all"
            >
              {info.email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
