import math
import os

input_file = open("test.md", "r")
data = input_file.read()
input_file.close()

maximum_repeats= input("The number of times the file should be repeated: ")

for file_no in range(0, maximum_repeats + 1):
    file_path = "test_" + str(file_no) + ".md"
    new_file = open(file_path, "w")
    new_file_data = data * file_no
    new_file.write(new_file_data)
    new_file.close()
