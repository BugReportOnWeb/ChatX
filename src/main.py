import nltk
from nltk.stem import WordNetLemmatizer
lemmatizer = WordNetLemmatizer()

import numpy as np
import tflearn
import tensorflow as tf
import pickle

import json
import random

with open("../data/intents.json") as json_file:
    data = json.load(json_file)

try:
    x
    with open("../data/prev_data.pickle", "rb") as pickle_file:
        training_pattern, training_classes, words = pickle.load(pickle_file) 
except:
    words = []
    classes = []
    document = []
    ignored_character = ["?", "*", "/", ",", "."]

    for intent in data["intents"]:
        for pattern in intent["patterns"]:
            tokenized_words_list = nltk.word_tokenize(pattern)
            words.extend(tokenized_words_list)
            document.append((tokenized_words_list, intent["tag"]))
            
            if intent["tag"] not in classes:
                classes.append(intent["tag"])

    words = [lemmatizer.lemmatize(ele.lower(), pos='n') for ele in words if ele not in ignored_character]
    words = sorted(list(set(words)))
    classes = sorted(list(set(classes)))

    training = []
    output = []
    output_empty = [0 for _ in range(len(classes))]

    for doc in document:
        bag = []
        pattern_words_list = doc[0]
        pattern_words_list = [lemmatizer.lemmatize(ele.lower()) for ele in pattern_words_list]

        for one_word in words:
            bag.append(1) if one_word in pattern_words_list else bag.append(0)

        output_row = list(output_empty)
        output_row[classes.index(doc[1])] = 1

        training.append([bag, output_row])

    random.shuffle(training)
    training = np.array(training, dtype=object)
    training_pattern = list(training[:,0])
    training_classes = list(training[:,1])

    with open("../data/prev_data.pickle", "wb") as pickle_file:
        pickle.dump((training_classes, training_pattern, words), pickle_file)

tf.compat.v1.reset_default_graph()
net = tflearn.input_data(shape=[None, len(training_pattern[0])])
net = tflearn.fully_connected(net, 8)
net = tflearn.fully_connected(net, 8)
net = tflearn.fully_connected(net, 8)
net = tflearn.fully_connected(net, len(training_classes[1]), activation="softmax")
net = tflearn.regression(net)

model = tflearn.DNN(net, tensorboard_dir="tflearn_logs")

# try:
#     model.load("mode.tflearn")
# except:
model.fit(training_pattern, training_classes, n_epoch=10000, batch_size=8, show_metric=True)
model.save("model.tflearn")

def bag_of_words(user_input, words):
    bag = []

    tokenized_input = nltk.word_tokenize(user_input)
    input_words_list = [lemmatizer.lemmatize(word.lower(), pos='v') for word in tokenized_input]

    for ele in words:
        bag.append(1) if ele in input_words_list else bag.append(0)

    return bag


def chatbot(user_input):
    result = model.predict([bag_of_words(user_input, words)])
    tag = classes[np.argmax(result)]

    for intent in data["intents"]:
        if intent["tag"] == tag:
            response = intent["responses"]
            return random.choice(response)

