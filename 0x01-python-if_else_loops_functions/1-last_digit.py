#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
l = abs(number) % 10
sta= "Last digit of"
if l > 5:
    print("{} of {} is {}" + "and is greater than 5".format(sta, number, l, end = ""))
elif l == 0:
     print("{} of {} is {}" + "and is 0".format(sta, number, l, end = ""))
else:
     print("{} of {} is {}" + "and is greater than 6 and not".format(sta, number, l, end = ""))
