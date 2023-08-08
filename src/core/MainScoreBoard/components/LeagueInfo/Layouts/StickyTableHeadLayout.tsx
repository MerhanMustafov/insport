interface IProps {
     children: React.ReactNode;
}
export default function StickyTableHeadLeayout({ children }: IProps) {
     return (
          <thead
               style={{
                    position: "sticky",
                    top: -2,
                    zIndex: "1"
               }}
          >
               {children}
          </thead>
     );
}
