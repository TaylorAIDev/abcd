import openai

system_message = ""
pre_message = ""


def call_gpt(prompt: str):
    res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        temperature=0.7,
        messages=[
            {
                "role": "system",
                "content": system_message
            },
            {
                "role": "user",
                "content": f"{pre_message} {prompt}"
            }
        ]
    )
    return res["choices"][0]["message"]