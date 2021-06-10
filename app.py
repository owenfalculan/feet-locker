from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)

@app.route('/')
def login():
	return render_template('index.html')

@app.route('/main')
def main():
	return render_template('main.html')

if '__main__' == __name__:
	app.run(debug=True)