//function that imports audio features from spotify and filters for the properties

function ExtractAudioFeatures(inputArray) {
  return inputArray.map(({ energy, valence }) => ({
    energy,
    valence
  }));
}

export default ExtractAudioFeatures;