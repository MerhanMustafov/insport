import { useRef, useState } from "react";

import styled from "styled-components";

import AppLogo from "@/components/AppLogo";
import { TAppNavLinks } from "@/models/links/IAppNavLinks";
import { activeLinkObserver } from "@/observers/ActiveLinkObserver";
import { urlPaths } from "@/routes/urlPaths";

import AppSingleNavLink from "./AppSingleNavLink";

const StyledNavigationContainer = styled("div")`
    background: var(--nav-bg);
`;
const StyledNavigationMainContentContainer = styled("nav")`
    /* border: 2px solid red; */
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: max-content 30px auto;
    grid-template-areas: "App_Navigation_Logo . App_Navigation_LeftNavContent";
    align-items: center;
    max-width: var(--max-width-app-content);
    margin: 0 auto;
    background: transparent;
`;

const StyledAppNavigationLogo = styled("ul")`
    grid-area: App_Navigation_Logo;
`;

const StyledAppNavigationLeftNavLinks = styled("ul")`
    grid-area: App_Navigation_LeftNavContent;
    display: flex;
    flex-direction: row;
`;

export default function AppNavigation() {
    const [activeLink, setActiveLink] = useState<TAppNavLinks | null>(null);

    const initialMount = useRef(true);

    if (initialMount.current) {
        activeLinkObserver.appNav.subscribe(subscriber);
        initialMount.current = false;
    }

    function subscriber(activeLink: TAppNavLinks) {
        setActiveLink(activeLink);
    }

    return (
        <StyledNavigationContainer>
            <StyledNavigationMainContentContainer>
                <StyledAppNavigationLogo>
                    <AppLogo />
                </StyledAppNavigationLogo>
                <StyledAppNavigationLeftNavLinks>
                    <AppSingleNavLink
                        navPath={urlPaths.SCORES}
                        labelTxt={"Scores"}
                        isActive={("Scores" as TAppNavLinks) === activeLink}
                    />
                    <AppSingleNavLink
                        navPath={urlPaths.NEWS}
                        labelTxt={"News"}
                        isActive={("News" as TAppNavLinks) === activeLink}
                    />
                </StyledAppNavigationLeftNavLinks>
            </StyledNavigationMainContentContainer>
        </StyledNavigationContainer>
    );
}
