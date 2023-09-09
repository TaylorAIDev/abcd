# Setup and dev commands
TESTS_PATH = tests

all: reqs

install:
	python -m venv ./venv
	poetry install

reqs:
	poetry export --without-hashes > requirements.txt

update:
	sh update_code.sh

test:
	poetry run pytest $(TESTS_PATH)/test_create.py

run:
	poetry run uvicorn app:app --workers 1

dev:
	poetry run uvicorn app:app --reload