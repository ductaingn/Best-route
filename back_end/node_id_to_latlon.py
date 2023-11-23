import pandas as pd
import numpy as np

def id_to_latlon(osmid_list):
    df = pd.read_csv('../data/nodes.csv')
    latlon_list=[]
    for i in range(len(osmid_list)):
        latlon = df.loc[df['osmid']==osmid_list[i],['y','x']].to_numpy()[0]
        latlon_list.append(latlon)
    return np.array(latlon_list).tolist()

print(id_to_latlon([98042452]))