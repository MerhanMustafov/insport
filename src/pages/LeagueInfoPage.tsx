import { useParams } from "react-router-dom";

export default function LeagueInfoPage() {
  const params = useParams();
  return (
    <div>
      <div>{params?.leagueId}</div>
    </div>
  );
}
