###
# Instructions: 
# 	To initialize the virtual environment, just run `make`
#	Then, enter the venv with `source venv/bin/activate`
# 	and run `flask run` to start the server
###

create: initiate install
initiate:
	python3 -m venv ./venv
install:
	( \
       source ./venv/bin/activate; \
       pip install -r requirements.txt \
    )
clean:
	rm -rf ./venv