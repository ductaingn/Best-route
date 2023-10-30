import pandas as pd
import math
from sklearn.neighbors import NearestNeighbors
import time
import nearest_point

def a_star(start_point,end_point):
    start_node = nearest_point.find_nearest_node(start_point)
    end_node = nearest_point.find_nearest_node(end_point)

    print(f"start node:{start_node}")
    print(f"end node:{end_node}")

a_star([21.0347047,105.8143796],[21.0370748,105.8151156])