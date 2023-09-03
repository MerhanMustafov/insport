import { createUrlBuilderWith } from "ts-url-builder";

import { P1 } from "./p1";
import { P2 } from "./p2";
import { P3 } from "./p3";

const config = {
     1: P1,
     2: P2,
     3: P3
};

export const urlBuilder = createUrlBuilderWith(config);
