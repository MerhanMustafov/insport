import { useEffect, useState } from "react";

const MOBILE_SCREEN_WIDTH = 768;

function withScreenSize<T>(WrappedComponent: React.ComponentType<T>) {
  return (props: T) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_SCREEN_WIDTH);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= MOBILE_SCREEN_WIDTH);
      };

      window.addEventListener("resize", handleResize);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    // Pass the isMobile state as a prop to the WrappedComponent
    return <WrappedComponent {...props} isMobile={isMobile} />;
  };
}

export default withScreenSize;
