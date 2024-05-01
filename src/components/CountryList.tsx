import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/countriesQueries";
import { Country } from "../types";
import { useEffect, useState } from "react";

export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>();

  const [searchTerm, setSearchTerm] = useState("");

  const { data } = useQuery(GET_COUNTRIES, {
    variables: { searchTerm },
  });

  useEffect(() => {
    if (data) {
      setCountries(data.countries);
    }
  }, [data]);

  return (
    <>
      <div>
        <h2>List of</h2>
        <h1>🌍 Countries 🌐</h1>
        <input
          className="search-bar"
          placeholder="Search for countries"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="card-container">
          {countries.map((country: Country) => (
            <button
              className="card"
              key={country.name}
              onClick={() => setSelectedCountry(country)}
            >
              <h2>
                {country.name} {country.emoji}
              </h2>
              <p>Capital: {country.capital}</p>
              <p>Currency: {country.currency}</p>
              {selectedCountry === country && (
                <>
                  <div className="complete-info">
                    <p>
                      Languages:{" "}
                      {country.languages.map((language, index) => (
                        <>
                          <span>{language.name}</span>
                          {index < country.languages.length - 1 && (
                            <span>, </span>
                          )}
                        </>
                      ))}
                    </p>
                    <p>Continent: {country.continent.name}</p>
                  </div>
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
