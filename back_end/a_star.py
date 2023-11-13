import numpy as np
import pandas as pd
from sklearn.neighbors import NearestNeighbors
import time
import nearest_point
from haversine import haversine


def a_star(start_point, end_point):
    start_node_id = nearest_point.find_nearest_node(start_point)
    end_node_id = nearest_point.find_nearest_node(end_point)

    node_df = pd.read_csv("data/nodes.csv")
    edge_df = pd.read_csv("data/edges.csv")

    # start_node_data = [osmid,x,y]
    start_node_data = node_df.loc[node_df['osmid'] ==
                                  start_node_id, ['osmid', 'y', 'x']].to_numpy()[0]
    end_node_data = node_df.loc[node_df['osmid'] ==
                                end_node_id, ['osmid', 'y', 'x']].to_numpy()[0]

    # Euclidian distance from this node to end node
    def heuristic(node_data):
        return haversine(node_data[1:3], end_node_data[1:3], unit='m')

    # boundary_nodes is a dictionary in which key is the node data and value is its ESTIMATED COST
    boundary_nodes = {}
    boundary_nodes.update({tuple(start_node_data): np.inf})

    # distance is a dictionary in which key is the node osmid and value is the DISTANCE TRAVELED TO REACH THIS NODE
    distance = {}
    distance.update({start_node_data[0]: 0})

    # came_from is a dictionary in which key is the node osmid and value is its parent osmid
    came_from = {}
    came_from.update({start_node_data[0]: 0})

    def reconstruct_path():
        path = []
        path.append(end_node_id)
        previous_id = came_from.get(end_node_id)
        while (came_from.get(previous_id) != 0):
            previous_id = came_from.get(path[len(path)-1])
            came_from.pop(path[len(path)-1])
            path.append(int(previous_id))
        return np.array(path).tolist()

    while (len(boundary_nodes) > 0):
        current_node_data = np.array(
            min(boundary_nodes, key=boundary_nodes.get))
        if (current_node_data[0] == end_node_data[0]):
            return reconstruct_path()

        boundary_nodes.pop(tuple(current_node_data))

        # Adjacent edge of current node
        adjacent_edge_data = edge_df.loc[edge_df['u'] == current_node_data[0], [
            'osmid', 'u', 'v', 'length', 'geometry']].to_numpy()

        for num_of_adj in range(adjacent_edge_data.shape[0]):
            node_data = node_df.loc[node_df['osmid'] == adjacent_edge_data[num_of_adj][2], [
                'osmid', 'y', 'x']].to_numpy()[0]
            h = heuristic(node_data)

            # Distance from start node to THIS node = Distance from start node CURRENT node + Distance from current node to THIS node(CURRENT node's adjacent)
            g = distance.get(
                current_node_data[0]) + adjacent_edge_data[num_of_adj][3]

            if ((distance.get(node_data[0]) == None) or (distance.get(node_data[0]) > g)):
                came_from.update({node_data[0]: current_node_data[0]})
                distance.update({node_data[0]: g})
                boundary_nodes.update({tuple(node_data): (g+h)})
    return []


print(a_star([21.0347047, 105.8143796], [21.0346086, 105.8147965]))
