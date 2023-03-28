import math

input_file = open("test.md", "r")
data = input_file.read()
input_file.close()


maximum_repeats= input("The number of times the file should be repeated: ")
no_of_files = int(math.log(maximum_repeats, 2)) 


for file_no in range(no_of_files):
    file_path = "test_" + str(file_no+1) + ".md"
    new_file = open(file_path, "w")
    new_file.write("data" * (file_no+1))
    new_file.close()

print(data)