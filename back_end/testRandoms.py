import random
import pandas as pd
from a_star import a_star 
# Read the CSV file into a DataFrame
node_df = pd.read_csv("./data/nodes.csv")

# Define a function to get a random node from the DataFrame
def get_random_node():
    # Get a random row index
    random_index = random.randint(0, len(node_df) - 1)

    # Get the row at the random index
    random_node = node_df.loc[random_index, ['y', 'x']].tolist()

    return random_node

# Define a function to compare results
def compare_results(a_star_result, other_program_result):
    return a_star_result == other_program_result

# Generate 1000 random test cases
test_cases = []
for _ in range(1000):
    start_node = get_random_node()
    end_node = get_random_node()
    test_cases.append((start_node, end_node))

# Compare results for each test case
same_results = 0
different_results = []
for start_node, end_node in test_cases:
    print(start_node, end_node)
    # Run a_star.py and get the result
    a_star_result = a_star(start_node, end_node)

    # Run the other program and get the result
    
    # TODO ORTHER PROGRAM
    other_program_result = a_star(start_node, end_node)

    # Compare the results
    if compare_results(a_star_result, other_program_result):
        same_results += 1
    else:
        different_results.append((start_node, end_node, a_star_result, other_program_result))

# Calculate accuracy
accuracy = same_results / 1000

# Print accuracy
print("Accuracy:", accuracy)

# Print wrong cases
if accuracy < 1:
    print("Wrong cases:")
    for case in different_results:
        start_node, end_node, a_star_result, other_program_result = case
        print("Case's input:", start_node, end_node)
        print("Case's output of a_star.py:", a_star_result)
        print("Case's output of the other program:", other_program_result)
        print()
