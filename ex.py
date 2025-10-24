import os
from cerebras.cloud.sdk import Cerebras

client = Cerebras(
    # This is the default and can be omitted
    api_key="csk-kpfe88nd3jt4h38fj29jvwd2nvtw2xj2fjffxfh5fc2dx9jd"
)

stream = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": "What is life?"
        }
    ],
    model="qwen-3-235b-a22b-instruct-2507",
    stream=True,
    max_completion_tokens=20000,
    temperature=0.7,
    top_p=0.8
)

for chunk in stream:
  print(chunk.choices[0].delta.content or "", end="")