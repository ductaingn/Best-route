import pandas as pd
import math
from sklearn.neighbors import NearestNeighbors
import time

def find_nearest_node(point):
    # x_input = input("Enter the coordinates of point X (in the format x,y): ")

    start_time = time.time()
    
    # Read data from the Excel file
    df = pd.read_csv("../data/nodes.csv")
    # x = list(map(float, x_input.split(',')))

    # Fit the KNN model
    X = df[['y', 'x']]
    knn = NearestNeighbors(n_neighbors=1, algorithm='auto').fit(X)

    # Find the nearest point to X
    distances, indices = knn.kneighbors([point])
    nearest_node_id = df.loc[indices[0][0]]['osmid']

    # Output the result
    print(f"The osmid of the nearest point to {point} is {nearest_node_id}.")

    end_time = time.time()
    execution_time = -(start_time - end_time)
    print("Execution time:",execution_time)

    return nearest_node_id

print(find_nearest_node([21.0347047,105.8143797]))