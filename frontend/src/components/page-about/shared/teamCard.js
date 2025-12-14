import React, { useCallback, useState } from "react";
import Modal from "react-modal";
import { MailIcon, CloseIcon } from "../../svgs";
import Link from "../../Link";

Modal.setAppElement("#___gatsby");
const modalStyles = {
  overlay: {
    backgroundColor: null,
  },
  content: {
    position: null,
    padding: null,
    border: null,
    borderRadius: null,
  },
};

const TeamCardImage = ({ info }) =>
  info?.img ? (
    <img src={info.img} alt={info.name} className="w-full mb-0" />
  ) : (
    <div className="w-full pb-[101.5%] bg-[#5E5E5E]">&nbsp;</div>
  );

const TeamCardInfo = ({ info, customClassName }) => (
  <>
    <h3 className={`font-bold ${customClassName.h3}`}>{info.name}</h3>
    {info.role && <div className="text-m">{info.role}</div>}
    {info.email && (
      <div className="flex items-center gap-x-1 text-sm font-medium">
        {info.emailIcon && (
          <span>
            <MailIcon className="w-[1em] h-[1em]" />
          </span>
        )}
        <Link
          href={`mailto:${info.email}`}
          className="no-underline text-Shades-100 break-all"
        >
          {info.email}
        </Link>
      </div>
    )}
    {info.ministries && (
      <div className="flex flex-col text-sm font-medium">
        {info.ministries.map((item, index) => (
          <div key={index}># {item}</div>
        ))}
      </div>
    )}
  </>
);

const TeamCard = ({ info, customClassName, showModal = false }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [member, setMember] = useState();
  const modalCloseTimeout = 300;
  const closeModal = () => {
    setModalOpen(false);
    setMember(null);
  };
  const handleClick = useCallback(
    memberInfo => {
      setMember(memberInfo);
      setModalOpen(true);
    },
    [setMember, setModalOpen]
  );

  return (
    <>
      <div className="flex flex-col items-start gap-y-3">
        <div className="text-left relative w-full pb-[110%] overflow-hidden">
          <div className="absolute">
            {showModal ? (
              <button
                className="text-left w-full"
                onClick={() => handleClick(info)}
              >
                <TeamCardImage info={info} />
              </button>
            ) : (
              <TeamCardImage info={info} />
            )}
          </div>
        </div>
        <div className={`flex-col flex w-full ${customClassName.container}`}>
          {showModal ? (
            <button className="text-left" onClick={() => handleClick(info)}>
              <TeamCardInfo info={info} customClassName={customClassName} />
            </button>
          ) : (
            <div className="text-left">
              <TeamCardInfo info={info} customClassName={customClassName} />
            </div>
          )}
        </div>
      </div>
      {showModal ? (
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Modal"
          closeTimeoutMS={modalCloseTimeout}
          htmlOpenClassName="ReactModal__Html--open"
        >
          <div className="flex flex-col">
            <div className="flex justify-end  pt-4 pb-6 pl-[1.125rem] pr-4 lg:pt-5 lg:pb-4 lg:px-5">
              <button onClick={closeModal}>
                <CloseIcon className="w-10 h-10 lg:w-[3.75rem] lg:h-[3.75rem]" />
              </button>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 pl-[1.125rem] pr-4 pb-[3.375rem] lg:px-[3.125rem] lg:pb-[6.1875rem]">
              <div className="sm:min-w-[280px] flex justify-center">
                <div>
                  <img src={member?.img} alt={member?.name} className="mb-0" />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-x-1 mb-6">
                      <h3 className="text-2xl font-bold leading-tighter">
                        {member?.name}
                      </h3>
                      <span>({member?.role})</span>
                    </div>
                    {member?.description.map((text, index) => (
                      <p key={`paragraph-${index}`}>{text}</p>
                    ))}
                    <span>{member?.responsibility}</span>
                  </div>
                  {member?.email && (
                    <div className="flex items-center gap-x-1">
                      {member?.emailIcon && (
                        <span>
                          <MailIcon className="w-8 h-8" />
                        </span>
                      )}
                      <Link
                        href={`mailto:${member?.email}`}
                        className="no-underline text-Shades-100 break-all font-normal"
                      >
                        {member?.email}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default TeamCard;
