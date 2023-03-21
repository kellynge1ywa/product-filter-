from importlib.resources import contents
from urllib import request
import pandas as pd
import requests
from bs4 import BeautifulSoup as bs

all_phones= []

url="https://jiji.co.ke/"
page=requests.get(url).content
soup= bs(page, "lxml")

# get all phones links

links= []
listings=soup.find_all(class_="product_pod")
for listing in listings:
    phone_link=listing.find("h3").a.get("href")
    base_url="https://jiji.co.ke/mobile-phones-tablets"
    cmplt_link=base_url + phone_link
    print(cmplt_link)
    
    
# extract info from links
for link in links:
    re=requests.get(link).content
    phone_soup=bs(page,"lxml")
     

