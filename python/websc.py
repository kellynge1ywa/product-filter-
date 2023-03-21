from flask import Flask,render_template
app=Flask(__name__)
import requests
from bs4 import BeautifulSoup


phone=request.get('').text

@app.route('/')
def home():
    return render_template('home.html')


if __name__=='_main_':
    app.run(debug=True)
    
    


