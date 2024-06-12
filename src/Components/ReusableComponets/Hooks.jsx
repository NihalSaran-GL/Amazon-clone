import { useState, useEffect } from "react";

export const useLogoData = (initialData) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  return data;
};

export const useLocationIconData = (initialData) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  return data;
};
