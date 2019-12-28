# friend-finder
A dating app, but more platonic, like willingly putting yourself in the friend-zone of everyone around you.

Deployed to heroku: https://damp-atoll-23895.herokuapp.com/

When you complete the survey, your results will be added into the api and the person in the api with the most similar interests to you will show up as your new friend.

Uses express for routing and jquery for appending all the code

Each answer has a value of 1 to 5, when the survey is completed it returns a json of all the answers and their values, this json is then compared to all the other jsons in the database on a loop, each answer's value is subtracted from the answer in the json it is being compared to and the absolute value is taken, when all answers have been taken, if the absolute value (difference) is lower than the current lowest, it then replaces the lowest and sets the current json's name as the friend, until a new lowest is found or it is done looping through all the jsons and returns the one with the lowest absolute value (differences)