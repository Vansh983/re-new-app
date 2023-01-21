# cohere.py
# https://docs.cohere.ai/reference/generate

# Setting up cohere
import cohere
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

print(response.generations[0].text)