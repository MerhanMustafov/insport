import { useParams } from "react-router-dom";
import { useGetLeagueInfoByIdQuery } from "@/global/redux/rtkq/leagues";

export default function LeagueInfoPage() {
  const params = useParams();
  const { data, isLoading, isError } = useGetLeagueInfoByIdQuery(params.leagueId as string);

  console.log("LeagueInfoPage: ", data);

  return (
    <div>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}
