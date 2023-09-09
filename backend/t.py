from app.gpt import call_gpt


res = call_gpt(
    "What do turtles eat?",
    topic="turles",
    context="We are talking about turtles"
)
print(res)