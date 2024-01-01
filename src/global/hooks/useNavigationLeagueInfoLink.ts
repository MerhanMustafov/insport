import { useEffect, useState } from "react";

interface IActiveLink {
  finished: { selected: boolean; cl: string };
  live: { selected: boolean; cl: string };
  upcoming: { selected: boolean; cl: string };
  table: { selected: boolean; cl: string };
}

const initialState: IActiveLink = {
  finished: { selected: false, cl: "" },
  live: { selected: false, cl: "" },
  upcoming: { selected: false, cl: "" },
  table: { selected: false, cl: "" }
};

export function useNavigationLeagueInfoLink({ section }: { section: string | undefined }) {
  const [activeDayLink, setActiveDayLink] = useState<IActiveLink>(initialState);

  useEffect(() => {
    if (section === "finished") {
      setActiveDayLink({ ...initialState, finished: { selected: true, cl: "finished" } });
    } else if (section === "live") {
      setActiveDayLink({ ...initialState, live: { selected: true, cl: "live" } });
    } else if (section === "upcoming") {
      setActiveDayLink({ ...initialState, upcoming: { selected: true, cl: "upcoming" } });
    } else if (section === "table") {
      setActiveDayLink({ ...initialState, table: { selected: true, cl: "table" } });
    } else {
      setActiveDayLink({ ...initialState, table: { selected: false, cl: "" } });
    }
  }, [section]);

  return activeDayLink;
}
