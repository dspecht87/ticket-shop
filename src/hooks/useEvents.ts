/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";
import dummyData from "./dummyData.json";
import { useState } from "react";

function useEvents(): {
  events: any[];
  searchterm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
} {
  const [searchterm, setSearchTerm] = useState("");

  // data fetching comes here
  const events = dummyData;

  return { events, searchterm, setSearchTerm };
}

export default useEvents;
