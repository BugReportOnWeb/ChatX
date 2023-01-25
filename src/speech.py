import speech_recognition as sr
import inquirer
import re

regex_pattern_1 = "(?=`)(.*)"
regex_pattern_2 = "[0-9]"

r = sr.Recognizer()

def run():
    device = get_microphone_device()
    text = speech_to_text(device)

    return text

def get_microphone_device():
    microphone_list = []
    for index, name in enumerate(sr.Microphone.list_microphone_names()):
        microphone_list.append("Microphone {1} `(device_index={0})`".format(index, name))

    questions = [
    inquirer.List('microphone',
                message = "What Microphone will you use?",
                choices = microphone_list,
            ),
    ]
    answers = inquirer.prompt(questions)
    microphone = answers["microphone"]
    microphone = re.search(regex_pattern_1, microphone).group(0)
    device = re.search(regex_pattern_2, microphone).group()

    return device

def speech_to_text(device):
    try:
        with sr.Microphone(device_index=int(device)) as source2:
			
            r.adjust_for_ambient_noise(source2, duration=0.4)
			
            print("Listening...")
            audio2 = r.listen(source2)

            MyText = r.recognize_google(audio2)
            MyText = MyText.lower()

            return MyText
			
    except sr.RequestError as e:
        print("Could not request results; {0}".format(e))
		
    except sr.UnknownValueError:
        print("unknown error occurred")
