interface ITeamsCellProps {
     home: {
          name: string;
          logo: string;
     };
     away: {
          name: string;
          logo: string;
     };
}

export default function TeamsCell(props: ITeamsCellProps) {
     const { away, home } = props;
     return (
          <td
               style={{
                    display: "flex",
                    flexDirection: "column",
                    // border: "2px solid red",
                    padding: "5px",
                    gap: 5,
                    // fontSize: "10px"
                    fontSize: "clamp(0.7rem, 1.5vw, 1.2rem)"
               }}
          >
               <span
                    style={{
                         display: "flex",
                         gap: 20
                    }}
               >
                    <span
                         style={{
                              width: "20px"
                         }}
                    >
                         <img
                              style={{
                                   width: "100%"
                              }}
                              src={home.logo}
                              alt=""
                         />
                    </span>
                    <span>{home.name}</span>
               </span>

               <span
                    style={{
                         display: "flex",
                         gap: 20
                    }}
               >
                    <span
                         style={{
                              width: "20px"
                         }}
                    >
                         <img
                              style={{
                                   width: "100%"
                              }}
                              src={away.logo}
                              alt=""
                         />
                    </span>

                    <span>{away.name}</span>
               </span>
          </td>
     );
}
