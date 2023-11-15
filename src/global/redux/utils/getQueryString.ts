export interface QueryParamsType {
  [key: string]: string | undefined;
}

type GetQueryStringReturnType = `?${string}` | "";

export function getQueryString(params: QueryParamsType): GetQueryStringReturnType {
  const hasParams = Object.keys(params).length > 0;

  if (hasParams) {
    const queryArray = getQueryArray(params);
    return `?${queryArray.join("&")}`;
  }

  return "";
}

function getQueryArray(params: QueryParamsType): string[] {
  return Object.entries(params).reduce((acc, [key, value]) => {
    if (key && value) {
      const query = `${key}=${String(value)}`;
      return [...acc, query];
    }
    return acc;
  }, [] as string[]);
}
