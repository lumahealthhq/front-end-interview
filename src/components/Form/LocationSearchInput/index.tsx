import React, { useState, useCallback } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

interface Location {
  address: string;
}

interface LocationProps {
  value?: string;
}

const initialData = {
  address: '',
};

const LocationSearchInput: React.FC<LocationProps> = () => {
  const [location, setLocation] = useState<Location>(initialData);

  const handleChange = useCallback((data: Location) => {
    setLocation(data);
  }, []);

  const handleSelect = useCallback(data => {
    geocodeByAddress(data)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  }, []);
  return (
    <PlacesAutocomplete
      value={location.address}
      onChange={() => handleChange}
      onSelect={() => handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationSearchInput;
