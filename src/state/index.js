import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const StateProvider = ({ children }) => {
  const [descriptionSearchQuery, setDescriptionSearchQuery] = useState("");
  const [locationSearchQuery, setLocationSearchQuery] = useState("");
  const [fulltimeQuery, setFulltimeQuery] = useState("");

  const [page, setPage] = useState(0);
  const [numOfPages, setNumOfPages] = useState(1);

  const [numOfJobsPerPage, setNumOfJobsPerPage] = useState(5);
  const [jobs, setJobs] = useState([]);

  const [loadingData, setLoadingData] = useState(false);

  const descriptionQuery = (val) => {
    var q = val != "" ? "description=" + val.trim() : "";
    setDescriptionSearchQuery(q);
  };

  const locationQuery = (val) => {
    var q = val != "" ? "location=" + val.trim() : "";
    setLocationSearchQuery(q);
  };

  const setFullTime = (val) => {
    setFulltimeQuery(val);
  };

  const searchJobs = async () => {
    console.log(11111);
    setPage(0);
    setLoadingData(true);
    let description =
      descriptionSearchQuery != "" ? descriptionSearchQuery + `&` : "";

    let isFullTime = fulltimeQuery ? `full_time=true&` : "";

    let location = locationSearchQuery != "" ? locationSearchQuery : "";

    try {
      const req = await fetch(
        `https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json?${description}${isFullTime}${location}`
      );
      const res = await req.json();
      setJobs(res);
      setNumOfPages(res.length / numOfJobsPerPage);
      setLoadingData(false);
    } catch (err) {
      setLoadingData(false);
      console.log(err);
    }
  };

  useEffect(() => {
    searchJobs();
  }, []);

  useEffect(() => {
    searchJobs();
  }, [descriptionSearchQuery, locationSearchQuery, fulltimeQuery]);

  return (
    <AppContext.Provider
      value={{
        jobs,
        numOfJobsPerPage,
        descriptionQuery,
        locationQuery,
        page,
        numOfPages,
        setLocationSearchQuery,
        setFullTime,
        loadingData,
        setLoadingData,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default StateProvider;
