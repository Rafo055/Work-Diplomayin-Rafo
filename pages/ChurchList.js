import React from 'react';

export default function ChurchList({ churchResponse }) {
  return (
    <div>
      {churchResponse.map((country, countryIndex) => (
        <div key={countryIndex}>
          <h2>{country.country}</h2>
          {country.regions.map((region, regionIndex) => (
            <div key={regionIndex}>
              <h3>{region.name}</h3>
              <ul>
                {region.churches.map((church, churchIndex) => (
                  <li key={churchIndex}>
                    <h4>{church.name}</h4>
                    {church.imgSrc && <img src={church.imgSrc} alt={church.name} />}
                    <p><strong>Address:</strong> {church.address}</p>
                    <p><strong>Description:</strong> {church.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}