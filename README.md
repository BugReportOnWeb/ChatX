<h1 id="header" align="center">Scatty</h1>

## Installation
Install the dependencies and run the local app server.
```bash
$ python3 -m pip install -U ScattyBackend/ScattyBackend/requirements.txt
$ npm install -g expo, react-native
$ python3 ScattyBackend/ScattyBackend/app.py
```

Start ngrok server.
```bash
$ ngrok http <port>
```

Edit the API base URL received from ngrok server.
```javascript
$ vim ScattyFrontend/App.js
-----------------------------------------------------------------
consts response = fetch(`<URL>/api?input=${newMessages[0].text}`);
```

Start expo server.
```bash
$ npm expo start
```


## Dependencies
* [nltk](https://pypi.org/project/nltk/) (Natural Language Toolkit)
* [tflearn](https://pypi.org/project/tflearn/) (Deep Learning Library featuring a higher-level API for TensorFlow)
* [tensorflow](https://pypi.org/project/tensorflow/) (TensorFlow is an open source machine learning framework for everyone.)
* [pickle5](https://pypi.org/project/pickle5/) (Backport of the pickle 5 protocol (PEP 574) and other pickle changes)
* [expo](https://expo.dev/) (Add fast refresh, true native capabilities)
* [react-native](https://reactnative.dev/) (A popular open source library for building user interfaces with JavaScript)

