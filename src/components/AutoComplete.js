import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';

const LocationSearchInput = (props) => {

  const handleChange = address => {
    props.changeData('address', address)
  };

  return (
    <PlacesAutocomplete
      value={props.address}
      onChange={handleChange}
      // onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <TextField
            {...getInputProps()}
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="address"
          />
          <Paper>
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              return (
                <MenuItem
                  {...getSuggestionItemProps(suggestion)}
                >
                  <span>{suggestion.description}</span>
                </MenuItem>
              );
            })}
          </Paper>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default LocationSearchInput