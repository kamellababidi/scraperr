from flask import Flask, render_template, request, json
import urllib
app = Flask(__name__, static_url_path='', static_folder='build')
app.add_url_rule('/', 'root', lambda: app.send_static_file('index.html'))


#read url data 
link = " http://www.purplemath.com/ "
f = urllib.urlopen(link)
myfile = f.read()
print (myfile)

#handel signup request 
@app.route('/signup', methods=['POST']) 
def foo():
    print('Hello world!')
    return json.dumps(request.json)

if __name__ == '__main__':
    app.run()
