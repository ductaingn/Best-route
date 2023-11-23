import pandas as pd
import numpy as np
import re

def parse_linestring(linestring):
    # Extract the coordinates from the linestring using regular expression
    matches = re.findall(r'(\d+\.\d+) (\d+\.\d+)', linestring)

    # Convert the coordinates to float and create a list of coordinate pairs
    coordinates = [[float(lat), float(lon)] for lon, lat in matches]

    return coordinates

def id_to_latlon(osmid_list):
    edges_df = pd.read_csv('../data/edges.csv')
    latlon_list=[]
    osmid_list = np.flip(osmid_list)
    if(len(osmid_list)<=1):
        return id_to_latlon(osmid_list)
    for i in range(len(osmid_list)-1):
        polyline = edges_df.loc[(edges_df['u'] == osmid_list[i]) & (edges_df['v']== osmid_list[i+1]),['geometry']].to_numpy()
        polyline = parse_linestring(str(polyline))
        for j in polyline:
            latlon_list.append(j)
    return latlon_list

print(id_to_latlon([10302026134,98042452]))