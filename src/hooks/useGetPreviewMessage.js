import { useState, useEffect } from "react";
import { toGiftChatMessageBlock } from "../util/giftChatHelper";

const idToName = {
  Zk18OTDq8N1Ly9YtEle3: "John",
  "06p7GZJ3hIqb6Bv8h27j": "Taipei City Animal Protection Office",
  EpXW3zdl3S3tKp9gFKe4: "Banqiao Public Shelter",
};

const useGetPreviewMessage = (firebase, id) => {
  const [userId, setUserId] = useState(id);
  const [groupData, setGroupData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let didCancel = false;
    const fetchChatHistory = async () => {
      setIsError(false);
      setIsLoading(true);

      // get Documents
      try {
        const groups = await firebase
          .firestore()
          .collection("groups")
          .where("members", "array-contains", userId)
          .get()
          .then((querySanpShot) => {
            let response = [];
            querySanpShot.forEach((doc) => {
              const { members } = doc.data();
              const others = members.filter((member) => member != userId);
              response.push({
                groupId: doc.id,
                member: others[0],
              });
            });
            return response;
          });

        const groupMsg = await Promise.all(
          groups.map(async ({ groupId, member }) => {
            const response = await firebase
              .firestore()
              .collection("messages")
              .doc(groupId)
              .get()
              .then((doc) => {
                const { previewMsg } = doc.data();
                return {
                  groupId: groupId,
                  name: idToName[member],
                  message: previewMsg,
                };
              });
            return response;
          })
        );

        if (!didCancel) {
          setGroupData(groupMsg);
        }
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
  }, [userId]);

  return [{ groupData, isLoading, isError }, setUserId];
};

export default useGetPreviewMessage;
