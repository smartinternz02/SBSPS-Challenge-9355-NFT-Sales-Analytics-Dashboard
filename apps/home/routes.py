from apps.home import blueprint
from flask import render_template, request
from flask_login import login_required
from jinja2 import TemplateNotFound
from bs4 import BeautifulSoup
import requests



page=requests.get("https://www.bitdegree.org/crypto-tracker/top-dapps/marketplaces")
soup=BeautifulSoup(page.content,"lxml")
print(page.status_code)
data1=soup.find("div",class_="col-md-12 dapp-rankings-analysis")
data2=data1.findAll("p")
data3=data2[2]
data4=data3.find_all("strong")
data41=data4[1].text
data42=data4[3].text
data43=data4[4].text
data44=data4[5].text
data45=data4[6].text
data46=data4[7].text
data47=data4[8].text
data48=data4[9].text
page2=requests.get('https://www.nft-stats.com/')
soup2=BeautifulSoup(page2.content,"lxml")
print(page2.status_code)
data5=soup2.find_all("p",class_="card-text font-content text-nowrap")
data51=data5[0].text
data52=data5[1].text

# 1
page3=requests.get('https://www.nft-stats.com/collection/renga')
soup3=BeautifulSoup(page3.content,"lxml")
data6=soup3.find('p',class_='lead fw-normal')
data61=data6.text
data7=soup3.find('div',class_='col-md-12 mx-auto')
data8=data7.find('div',class_='d-flex flex-row flex-wrap gap-1')
data9=data8.find_all('div',class_='badge summary-info rounded-pill')
rem="Twitter"
data81=data9[5].text.replace(rem,'').strip()
data1a=soup3.find_all('div',class_='row justify-content-md-center')
data2a=data1a[0].find_all('p')

data1c=soup3.find('table',class_='table table-sm')
row_list=data1c.find_all("tr")
images=[]
for i in range(2,12):
    td=row_list[i].find("div",class_="preview-container d-inline-block")
    img=td.find("img",class_="preview rounded")
    images.append(img["src"])
sold_price=[]
for j in range(2,12):
    td1=row_list[j].find_all("td",class_="text-end align-middle")
    sold_price.append(td1[1].text)

# 2
page4=requests.get('https://www.nft-stats.com/collection/boredapeyachtclub')
soup4=BeautifulSoup(page4.content,"lxml")
data6s=soup4.find('p',class_='lead fw-normal')
data61s=data6s.text
data7s=soup4.find('div',class_='col-md-12 mx-auto')
data8s=data7s.find('div',class_='d-flex flex-row flex-wrap gap-1')
data9s=data8s.find_all('div',class_='badge summary-info rounded-pill')
rem="Twitter"
data81s=data9s[5].text.replace(rem,'').strip()
data1as=soup4.find_all('div',class_='row justify-content-md-center')
data2as=data1as[0].find_all('p')

data1cs=soup4.find('table',class_='table table-sm')
row_lists=data1cs.find_all("tr")
imagess=[]
for i in range(2,12):
    tds=row_lists[i].find("div",class_="preview-container d-inline-block")
    imgs=tds.find("img",class_="preview rounded")
    imagess.append(imgs["src"])
sold_prices=[]
for j in range(2,12):
    td1s=row_lists[j].find_all("td",class_="text-end align-middle")
    sold_prices.append(td1s[1].text)


# 3
page5=requests.get('https://www.nft-stats.com/collection/azuki')
soup5=BeautifulSoup(page5.content,"lxml")
data6d=soup5.find('p',class_='lead fw-normal')
data61d=data6d.text
data7d=soup5.find('div',class_='col-md-12 mx-auto')
data8d=data7d.find('div',class_='d-flex flex-row flex-wrap gap-1')
data9d=data8d.find_all('div',class_='badge summary-info rounded-pill')
rem="Twitter"
data81d=data9d[5].text.replace(rem,'').strip()
data1ad=soup5.find_all('div',class_='row justify-content-md-center')
data2ad=data1ad[0].find_all('p')

data1cd=soup5.find('table',class_='table table-sm')
row_listd=data1cd.find_all("tr")
imagesd=[]
for i in range(2,12):
    tdd=row_listd[i].find("div",class_="preview-container d-inline-block")
    imgd=tdd.find("img",class_="preview rounded")
    imagesd.append(imgd["src"])
sold_priced=[]
for j in range(2,12):
    td1d=row_listd[j].find_all("td",class_="text-end align-middle")
    sold_priced.append(td1d[1].text)

# 4

page6=requests.get('https://www.nft-stats.com/collection/otherdeed')
soup6=BeautifulSoup(page6.content,"lxml")
data6f=soup6.find('p',class_='lead fw-normal')
data61f=data6f.text
data7f=soup6.find('div',class_='col-md-12 mx-auto')
data8f=data7f.find('div',class_='d-flex flex-row flex-wrap gap-1')
data9f=data8f.find_all('div',class_='badge summary-info rounded-pill')
rem="Twitter"
data81f=data9f[5].text.replace(rem,'').strip()
data1af=soup6.find_all('div',class_='row justify-content-md-center')
data2af=data1af[0].find_all('p')

data1cf=soup6.find('table',class_='table table-sm')
row_listf=data1cf.find_all("tr")
imagesf=[]
for i in range(2,12):
    tdf=row_listf[i].find("div",class_="preview-container d-inline-block")
    imgf=tdf.find("img",class_="preview rounded")
    imagesf.append(imgf["src"])
sold_pricef=[]
for j in range(2,12):
    td1f=row_listf[j].find_all("td",class_="text-end align-middle")
    sold_pricef.append(td1f[1].text)


# 5
page7=requests.get('https://www.nft-stats.com/collection/cryptopunks')
soup7=BeautifulSoup(page7.content,"lxml")
data6g=soup7.find('p',class_='lead fw-normal')
data61g=data6g.text
data7g=soup7.find('div',class_='col-md-12 mx-auto')
data8g=data7g.find('div',class_='d-flex flex-row flex-wrap gap-1')
data9g=data8g.find_all('div',class_='badge summary-info rounded-pill')
rem="Twitter"
data81g=data9g[5].text.replace(rem,'').strip()
data1ag=soup7.find_all('div',class_='row justify-content-md-center')
data2ag=data1ag[0].find_all('p')

data1cg=soup7.find('table',class_='table table-sm')
row_listg=data1cg.find_all("tr")
imagesg=[]
for i in range(2,12):
    tdg=row_listg[i].find("div",class_="preview-container d-inline-block")
    imgg=tdg.find("img",class_="preview rounded")
    imagesg.append(imgg["src"])
sold_priceg=[]
for j in range(2,12):
    td1g=row_listg[j].find_all("td",class_="text-end align-middle")
    sold_priceg.append(td1g[1].text)


# 6
page8=requests.get('https://www.nft-stats.com/collection/clonex')
soup8=BeautifulSoup(page8.content,"lxml")
data6h=soup8.find('p',class_='lead fw-normal')
data61h=data6h.text
data7h=soup8.find('div',class_='col-md-12 mx-auto')
data8h=data7h.find('div',class_='d-flex flex-row flex-wrap gap-1')
data9h=data8h.find_all('div',class_='badge summary-info rounded-pill')
rem="Twitter"
data81h=data9h[5].text.replace(rem,'').strip()
data1ah=soup8.find_all('div',class_='row justify-content-md-center')
data2ah=data1ah[0].find_all('p')

data1ch=soup8.find('table',class_='table table-sm')
row_listh=data1ch.find_all("tr")
imagesh=[]
for i in range(2,12):
    tdh=row_listh[i].find("div",class_="preview-container d-inline-block")
    imgh=tdh.find("img",class_="preview rounded")
    imagesh.append(imgh["src"])
sold_priceh=[]
for j in range(2,12):
    td1h=row_listh[j].find_all("td",class_="text-end align-middle")
    sold_priceh.append(td1[1].text)

# 7

page9=requests.get('https://www.nft-stats.com/collection/kitaroworldofficial')
soup9=BeautifulSoup(page9.content,"lxml")
data6j=soup9.find('p',class_='lead fw-normal')
data61j=data6j.text
data7j=soup9.find('div',class_='col-md-12 mx-auto')
data8j=data7j.find('div',class_='d-flex flex-row flex-wrap gap-1')
data9j=data8j.find_all('div',class_='badge summary-info rounded-pill')
rem="Twitter"
data81j=data9j[5].text.replace(rem,'').strip()
data1aj=soup9.find_all('div',class_='row justify-content-md-center')
data2aj=data1aj[0].find_all('p')

data1cj=soup9.find('table',class_='table table-sm')
row_listj=data1cj.find_all("tr")
imagesj=[]
for i in range(2,12):
    tdj=row_listj[i].find("div",class_="preview-container d-inline-block")
    imgj=tdj.find("img",class_="preview rounded")
    imagesj.append(imgj["src"])
sold_pricej=[]
for j in range(2,12):
    td1j=row_listj[j].find_all("td",class_="text-end align-middle")
    sold_pricej.append(td1[1].text)


# 8
pagex=requests.get('https://www.nft-stats.com/collection/doodles-official')
soupx=BeautifulSoup(pagex.content,"lxml")
data6k=soupx.find('p',class_='lead fw-normal')
data61k=data6k.text
data7k=soupx.find('div',class_='col-md-12 mx-auto')
data8k=data7k.find('div',class_='d-flex flex-row flex-wrap gap-1')
data9k=data8k.find_all('div',class_='badge summary-info rounded-pill')
rem="Twitter"
data81k=data9k[5].text.replace(rem,'').strip()
data1ak=soupx.find_all('div',class_='row justify-content-md-center')
data2ak=data1ak[0].find_all('p')

data1ck=soupx.find('table',class_='table table-sm')
row_listk=data1ck.find_all("tr")
imagesk=[]
for i in range(2,12):
    tdk=row_listk[i].find("div",class_="preview-container d-inline-block")
    imgk=tdk.find("img",class_="preview rounded")
    imagesk.append(imgk["src"])
sold_pricek=[]
for j in range(2,12):
    td1k=row_listk[j].find_all("td",class_="text-end align-middle")
    sold_pricek.append(td1k[1].text)



# 9
pagey=requests.get('https://www.nft-stats.com/collection/cool-cats-nft')
soupy=BeautifulSoup(pagey.content,"lxml")
data6l=soupy.find('p',class_='lead fw-normal')
data61l=data6l.text
data7l=soupy.find('div',class_='col-md-12 mx-auto')
data8l=data7l.find('div',class_='d-flex flex-row flex-wrap gap-1')
data9l=data8l.find_all('div',class_='badge summary-info rounded-pill')
rem="Twitter"
data81l=data9l[5].text.replace(rem,'').strip()
data1al=soupy.find_all('div',class_='row justify-content-md-center')
data2al=data1al[0].find_all('p')

data1cl=soupy.find('table',class_='table table-sm')
row_listl=data1cl.find_all("tr")
imagesl=[]
for i in range(2,12):
    td=row_listl[i].find("div",class_="preview-container d-inline-block")
    imgl=td.find("img",class_="preview rounded")
    imagesl.append(imgl["src"])
sold_pricel=[]
for j in range(2,12):
    td1l=row_listl[j].find_all("td",class_="text-end align-middle")
    sold_pricel.append(td1l[1].text)







@blueprint.route('/index') 
@login_required
def index():

    return render_template('home/index.html', segment='index',data41=data41,data42=data42,data43=data43,data44=data44,data45=data45,data46=data46,data47=data47,data48=data48,data51=data51,data52=data52)

# @blueprint.route('/index') 
# def sample():
#     return render_template('/home/sample-page.html',segment='sample-page',data41=data41)
@blueprint.route('/<template>')
@login_required
def route_template(template):

    try:

        if not template.endswith('.html'):
            template += '.html'

        # Detect the current page
        segment = get_segment(request)

        # Serve the file (if exists) from app/templates/home/FILE.html
        return render_template("home/" + template, segment=segment,data61=data61,data81=data81,data2a=data2a,images=images,sold_price=sold_price,data61s=data61s,data81s=data81s,data2as=data2as,imagess=imagess,sold_prices=sold_prices,data61d=data61d,data81d=data81d,data2ad=data2ad,imagesd=imagesd,sold_priced=sold_priced,data61f=data61f,data81f=data81f,data2af=data2af,imagesf=imagesf,sold_pricef=sold_pricef,data61g=data61g,data81g=data81g,data2ag=data2ag,imagesg=imagesg,sold_priceg=sold_priceg,data61h=data61h,data81h=data81h,data2ah=data2ah,imagesh=imagesh,sold_priceh=sold_priceh,data61j=data61j,data81j=data81j,data2aj=data2aj,imagesj=imagesj,sold_pricej=sold_pricej,data61k=data61k,data81k=data81k,data2ak=data2ak,imagesk=imagesk,sold_pricek=sold_pricek,data61l=data61l,data81l=data81l,data2al=data2al,imagesl=imagesl,sold_pricel=sold_pricel)

    except TemplateNotFound:
        return render_template('home/page-404.html'), 404

    except:
        return render_template('home/page-500.html'), 500


# Helper - Extract current page name from request
def get_segment(request):

    try:

        segment = request.path.split('/')[-1]

        if segment == '':
            segment = 'index'

        return segment

    except:
        return None

