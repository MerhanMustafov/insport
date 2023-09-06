interface IProps {
    homeTeamScore: number;
    awayTeamScore: number;
}

export default function ResultsCell(props: IProps) {
    const { homeTeamScore, awayTeamScore } = props;

    return (
        <td
            style={{
                textAlign: "center"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 10
                }}
            >
                <span>{homeTeamScore}</span>
                <span>{awayTeamScore}</span>
            </div>
        </td>
    );
}
