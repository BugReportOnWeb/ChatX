import speech_recognition as sr

r = sr.Recognizer()

def speech_to_text():
    try:
        with sr.Microphone() as source2:
			
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
