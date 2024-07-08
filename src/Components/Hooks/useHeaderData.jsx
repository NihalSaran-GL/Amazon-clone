import { useEffect, useState } from 'react';

const useDropdownData = () => {
  const [dropdownData, setDropdownData] = useState([]);

  useEffect(() => {
    fetch("/data/English.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDropdownData(data.header_container.main_header.dropdown_menu);
      })
      .catch((error) => {
        console.error("Error fetching dropdown data:", error);
      });
  }, []);

  return dropdownData;
};

export default useDropdownData;
