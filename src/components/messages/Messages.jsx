import React from 'react';
import { useSelector } from 'react-redux';

const Message = () => {
  const activeId = useSelector((state) => state.channelsInfo.currentChannelId);
  const messages = useSelector((state) => state.messagesInfo.messages.filter(
    ({ currentChannelId }) => currentChannelId === activeId,
  ));

  const renderMessage = () => (
    <>
      {messages.map((message) => (
        <div key={message.id} className="text-break">
          <b>
            {message.nickname}
            {': '}
          </b>
          {message.body}
        </div>
      ))}
    </>
  );

  return (
    <div id="message-box" className="chat-messages overflow-auto mb-3">{renderMessage()}</div>
  );
};

export default Message;
