const GOOGLE_API_KEY = 'AIzaSyANxvnmX3wA87vtQXKCCALyL7CsEJ9er3c';

export function getMapPrevew(lat, long) {
  const imagePreivewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=13&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${long}&key=${GOOGLE_API_KEY}`;
  return imagePreivewUrl;
}

export async function getAddress(lat, long) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch address');
  }
  const data = await response.json();
  const address = data.results[0].formatted_address;

  return address;
}