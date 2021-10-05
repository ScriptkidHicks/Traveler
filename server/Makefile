create: initiate install

initiate:
	python3 -m venv ./venv

install:
	( \
       source ./venv/bin/activate; \
       pip install -r requirements.txt \
    )

run: 
	flask run

clean:
	rm -rf ./venv