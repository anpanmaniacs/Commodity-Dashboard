from flask import Flask
app = Flask(__name__)

@app.route('/')
def homepage():
    return """
    <h1>Hello world!</h1>

    <iframe src="/static/financial.html" width="853" height="480" frameborder="0" ></iframe>
    <iframe src="/static/import_export.html" width="853" height="480" frameborder="0" ></iframe>
    """

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)