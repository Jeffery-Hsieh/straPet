const images = [
  {
    id: "Zk18OTDq8N1Ly9YtEle3",
    image: require("../assets/images/Zk18OTDq8N1Ly9YtEle3.jpg"),
  },
  {
    id: "06p7GZJ3hIqb6Bv8h27j",
    image: require("../assets/images/06p7GZJ3hIqb6Bv8h27j.png"),
  },
  {
    id: "EpXW3zdl3S3tKp9gFKe4",
    image: require("../assets/images/EpXW3zdl3S3tKp9gFKe4.jpg"),
  },
];

export const toGiftChatMessageBlock = (messageId, messageInfo) => {
  const { sendAt, sender, text } = messageInfo;
  const image = images.filter((image) => image.id == sender);
  return {
    _id: messageId,
    text: text,
    createdAt: sendAt.toDate(),
    user: {
      _id: sender,
      avatar: image[0].image,
    },
  };
};
