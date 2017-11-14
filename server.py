from flask import Flask, render_template,json,request
import requests
from flask.ext.mysql import MySQL
#import lxml.html
import re


app = Flask(__name__, static_folder='build')
app.add_url_rule('/', 'root', lambda: app.send_static_file('index.html'))


mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = '1234'
app.config['MYSQL_DATABASE_DB'] = 'math'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)



#create collections table
 # cursor.execute('''CREATE TABLE collections (units varchar(255), chapters varchar(255), links_name varchar(200) ,links varchar(200))''')

#create users table
# cursor.execute('''CREATE TABLE user (name varchar(255), password varchar(255), email varchar(200))''')


# data = cursor.fetchall()
# print(data)


#fetchhhhhh data
url=requests.get("http://www.mathhelp.com/intermediate-algebra-help/")
#url=url.text
units=re.findall(r'<h5>Unit [0-9]: (.*?)</h5>',str(url.text))
chapters=re.findall(r'<h5 class="et_pb_toggle_title">CHAPTER [0-9]: (.*?)</h5>',str(url.text))
urls_name=re.findall(r'<a href="[.*?]">(.*?)</a>',str(url.text))
urls=re.findall(r'<a href=(.*?)>',str(url.text))

# print(urls)
# for unit in url:
	#unit=re.findall(r'Unit [1-9]: (.*)',str(unit))
	# print(unit)
	# print("----------")
#tree=lxml.html.fromstring(url.text)
#req=urllib.request.Request(url)
#units=urllib.request.urlopen(req).read()
#units=tree.xpath('//a')
#for unit in units:
    #unit=unit.text_content()
    #unit=re.findall(r'Unit [1-9]: (.*)',str(unit))
#    print(unit)
#    print("-------------------------------")

#handel signup request 
@app.route('/signup', methods=['POST']) 
def foo():
   print(request.form['username'])
   print(request.form['password'])
   print(request.form['email'])
   conn = mysql.connect()
   cursor = conn.cursor()
   cursor.execute(
    """INSERT INTO 
        user (
            name,
            password,
            email)
    VALUES (%s,%s,%s)""", (request.form['username'], request.form['password'], request.form['email']))
   data = cursor.fetchall()
   # print(data)
   # cursor.execute('''SELECT name FROM user''')
   # rv = cursor.fetchall()
   # print(rv)
   # cursor.execute('''insert into user (username,password,email) values (request.form['username'],request.form['password'],request.form['email'])''')
   return json.dumps("done")

if __name__ == '__main__':
   app.run(debug=True)