import React, {useState} from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import TextField from '@material-ui/core/TextField';
import './AddressInput.css';

function AddressInput() {
  const [address, setAddress] = useState('');
  const handleChange = (address) => {
    setAddress(address);
  };
 
  const handleSelect = (address) => {
    setAddress(address);
  };

  return (
    <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              {...getInputProps({
                placeholder: 'Address',
                fullWidth: true,
                size: 'small',
                required: true,
              })}
            />
            {suggestions.length > 0 && <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, ind) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#DFEDF0', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div key={'key'+ind+suggestion}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>}
          </div>
        )}
      </PlacesAutocomplete>
  );
}

export default AddressInput;