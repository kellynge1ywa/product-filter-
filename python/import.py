from requests_html import HTMLSession

url="https://www.jumia.co.ke/smartphones/"

s= HTMLSession ()
r=s.get(url)

r.html.render(sleep=1)

products=r.html.xpath('//*[@id="ctlg', first=True)

print(products)

for item in products.absolute_links:
    r=s.get(item)
    print(r.html.find('div.itm col', first=True))




