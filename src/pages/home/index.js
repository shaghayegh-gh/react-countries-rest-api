import { useState, useEffect, useCallback } from "react";
import { getCountries } from "../../services/countries-service";
import Countries from "../../components/countries";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const countriesList = useCallback(() =>
      getCountries().then((data) => {
        setLoading(false);
        setCountries(data);
      }),
    []
  );

  useEffect(() => {
    countriesList()
  }, [countriesList]);

  return (
    <div className="md:container md:mx-auto px-4">
      <Countries countries={countries} loading={loading} />
    </div>
  );
};

export default Home;
