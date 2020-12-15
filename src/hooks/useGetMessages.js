import { useState, useEffect } from "react";
import { toGiftChatMessageBlock } from "../util/giftChatHelper";

const useGetMessage = (firebase, groupId) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let didCancel = false;
    const fetchChatHistory = async () => {
      setIsError(false);
      setIsLoading(true);

      // get Documents
      try {
        firebase
          .firestore()
          .collection("messages")
          .doc(groupId)
          .collection("chat")
          .orderBy("sendAt", "desc")
          .onSnapshot((querySnapshot) => {
            const response = querySnapshot.docs.map((doc) => {
              const message = toGiftChatMessageBlock(doc.id, doc.data());
              return message;
            });
            if (!didCancel) {
              setMessages(response);
            }
          });
      } catch (error) {
        console.log(error);
        if (!didCancel) {
          setIsError(true);
        }
      }

      setIsLoading(false);
    };

    fetchChatHistory();
    return () => {
      didCancel = true;
    };
  }, []);

  return [{ messages, isLoading, isError }, setMessages];
};

export default useGetMessage;
