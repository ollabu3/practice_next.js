import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestconfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${requestconfig.url}`, {
        method: requestconfig.method ? requestconfig.method : "GET",
        headers: requestconfig.headers ? requestconfig.headers : {},
        body: requestconfig.body ? JSON.stringify(requestconfig.body) : null,
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
};

export default useHttp;
