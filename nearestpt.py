import pandas as pd
import math
from sklearn.neighbors import NearestNeighbors
import time

# Input the random point X from the user
x_input = input("Enter the coordinates of point X (in the format x,y): ")

# Read data from the Excel file
start_time = time.time()
df = pd.read_csv("C:\\Users\\docto\\Downloads\\nodes.csv")
x = list(map(float, x_input.split(',')))

# Fit the KNN model
X = df[['x', 'y']]
knn = NearestNeighbors(n_neighbors=1, algorithm='auto').fit(X)

# Find the nearest point to X
distances, indices = knn.kneighbors([x])
nearest_point_id = df.loc[indices[0][0]]['osmid']

# Output the result
print(f"The osmid of the nearest point to {x} is {nearest_point_id}.")

end_time = time.time()
execution_time = -(start_time - end_time)
print("Execution time:",execution_time)

