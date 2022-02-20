#!/usr/bin/python3

import requests
import sys

DICT_API = "http://127.0.0.1:8000/api/dictionary/"
try: 
    word = sys.argv[1]
except:
    print("USAGE: means <searched-word>")
    sys.exit(1)

request = requests.get(DICT_API + word) 

if not request.json()["isFound"]:
    print("NOT FOUND: ", end="")
print(request.json()["desc"])

