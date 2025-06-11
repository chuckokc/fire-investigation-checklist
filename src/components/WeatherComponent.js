// WeatherComponent.js
// This component handles fetching and displaying current weather conditions
import React, { useState } from 'react';

function WeatherComponent() {
    // Store weather data and loading state
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to get current weather based on location
    const getWeather = async () => {
        setLoading(true);
        setError(null);
        
        try {
            // First, get the user's location using their device's GPS
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                
                // Use OpenWeather API to get current conditions
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=8fd8ec3095db4ce0a7570c8fc4707c4a`
                );
                
                if (!response.ok) {
                    throw new Error('Weather data not available');
                }
                
                const data = await response.json();
                
                // Format the weather information for display
                setWeatherData({
                    temperature: `${Math.round(data.main.temp)}°F`,
                    humidity: `${data.main.humidity}%`,
                    windSpeed: `${Math.round(data.wind.speed)} mph`,
                    windDirection: getWindDirection(data.wind.deg),
                    conditions: data.weather[0].description,
                    pressure: `${data.main.pressure} hPa`
                });
            });
        } catch (error) {
            setError('Unable to fetch weather data');
            console.error('Weather fetch error:', error);
        }
        setLoading(false);
    };

    // Helper function to convert wind degrees to compass direction
    const getWindDirection = (degrees) => {
        const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
                          'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        const index = Math.round(((degrees % 360) / 22.5));
        return directions[index % 16];
    };

    // The visual part of our weather component
    return (
        <div className="weather-section p-4 bg-gray-50 rounded-lg">
            <button
                onClick={getWeather}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                disabled={loading}
            >
                {loading ? 'Getting Weather...' : 'Get Current Weather'}
            </button>
            
            {error && (
                <div className="text-red-500 mt-2">{error}</div>
            )}
            
            {weatherData && (
                <div className="weather-data mt-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Temperature: {weatherData.temperature}</div>
                        <div>Humidity: {weatherData.humidity}</div>
                        <div>Wind: {weatherData.windSpeed} from {weatherData.windDirection}</div>
                        <div>Conditions: {weatherData.conditions}</div>
                        <div>Pressure: {weatherData.pressure}</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WeatherComponent;