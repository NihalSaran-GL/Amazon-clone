import random
import json

# Approximate bounding box for Mainz, Germany
min_lat, max_lat = 49.9591, 50.0389
min_lon, max_lon = 8.1500, 8.3278

# Generate 500 random coordinates
coordinates = []
for _ in range(500):
    lat = random.uniform(min_lat, max_lat)
    lon = random.uniform(min_lon, max_lon)
    coordinates.append({"lat": lat, "lon": lon})

# Write the coordinates to a JSON file
with open('mainz_coordinates.json', 'w') as f:
    json.dump(coordinates, f)

print("Coordinates have been saved to mainz_coordinates.json")