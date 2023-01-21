# cohere_rest.py
# https://docs.cohere.ai/reference/generate

# Setting up cohere and flask
import cohere
from flask import Flask

app = Flask(__name__)

co = cohere.Client('bPnEkiW2KeYyupinU83dcN1wKVp4w1Lo1zXx28dC')

# Skill = 'skill learning'
# fitness = fitness, academic = academic, wellness = wellness
prompt = f"""  
Give four unique wellness goals for me to do today, in a list.""" 
# not sure if we need to finish with a -- here
# change category fitness to be {selection}

model = "command-medium-nightly" 
max_tokens = 50
temperature = 1.3 # this is the randomness, 0 is predictable, 5 is creative
 # this indicates the end of the prompt

# We need to do it four times based on the selection choice
# for i in range(4):

response = co.generate(
    model = model,
    prompt = prompt,
    max_tokens = max_tokens,
    temperature = temperature,
)

tasks = response.generations[0].text
task_list = [task.strip()[2:] for task in tasks.split("\n")]
print(task_list[1:])

@app.route("/")
def hello():
    return "Hello world!"

if __name__ == '__main__':
    app.run(debug = True)
