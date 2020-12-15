export const toGiftChatMessageBlock = (messageId, messageInfo) => {
  const { sendAt, sender, text } = messageInfo;
  return {
    _id: messageId,
    text: text,
    createdAt: sendAt.toDate(),
    user: {
      _id: sender,
      avatar: "https://placeimg.com/140/140/people",
    },
  };
};
