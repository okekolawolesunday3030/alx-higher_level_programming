#!/usr/bin/python3

"""Python script that takes in a URL"""
import urllib.request
import urllib.parse
from sys import argv

if __name__ == "__main__":
    try:
        with urlib.request.open(argv[1]) as response :
            s =   response.read()
            print(s.decode('utf-8;'))
    except urllib.error.HTTPError as err:
         print('Error code:', err.code)
