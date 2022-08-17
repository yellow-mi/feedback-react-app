import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback data
  const fetchFeedback = async () => {
    /* const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc")
    // const data = await response.json()

    // setFeedback(data)
    setIsLoading(false) */
    fetch("http://localhost:5000/feedback?_sort=id&_order=desc")
      .then((response) =>
        response.json().catch(console.log("Error cathing data"))
      )
      .then((data) => {
        setFeedback(data);
        setIsLoading(false);
      });
  };

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Update feedback item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updatedItem,
            }
          : item
      )
    );
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        addFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEdit,
        feedback,
        isLoading,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
