import * as React from "react";
import { MailIcon } from "../../svgs";

const TeamCard = ({ info, customClassName }) => (
  <div
    className={`flex flex-col items-start gap-y-3 ${
      customClassName.boxContainer || ""
    }`}
  >
    {info?.img ? (
      <img src={info.img} alt={info.name} className="w-full mb-0" />
    ) : (
      <div className="w-full max-w-[17.5rem] max-h-[19.25rem] h-full bg-[#5E5E5E]">
        &nbsp;
      </div>
    )}
    <div className={`flex-col flex w-full ${customClassName.container}`}>
      <h3 className={`font-bold ${customClassName.h3}`}>{info.name}</h3>
      <div className={customClassName.role}>{info.role}</div>
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

export default TeamCard;
