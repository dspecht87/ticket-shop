/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";
import dummyData from "./dummyData.json";
import { useState } from "react";
import { deepStringMatch } from "@/util/util";

function useEvents(): {
  events: any[];
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
} {
  const [searchTerm, setSearchTerm] = useState("");

  // data fetching comes here
  const allEvents = dummyData;
  const events = allEvents
    .filter((item) => deepStringMatch(item, searchTerm))
    .slice(0, 8);

  return { events, searchTerm: searchTerm, setSearchTerm };
}

export default useEvents;
