import { useLazyGetCountriesQuery } from "@/global/redux/rtkq/countries";

export default function Countries() {
  const [trigger, { data, isLoading, isError }] = useLazyGetCountriesQuery();

  function getCountries() {
    trigger()
      .then((res) => console.log(res.data?.response))
      .catch((err) => console.log(err));
  }

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (isError) {
    return <h1>error...</h1>;
  }

  return (
    <div>
      {data &&
        data.response.map((country) => (
          <div
            style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
            key={`${country.code}-${country.name}`}
          >
            <div>
              {country.name}: {country.code}
            </div>
            <div style={{ width: "30px", height: "30px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={country.flag}
                alt="Country Flag"
              />
            </div>
          </div>
        ))}
      <h1 onClick={getCountries}>Countries</h1>
    </div>
  );
}
