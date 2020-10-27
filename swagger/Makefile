image = swaggerapi/swagger-codegen-cli:latest
lang = 
cmd = 
outdir = $(shell pwd)/local
jar_image = swagger-codegen:jar
jar_container = swagger_codegen_jar
models_outdir = $(shell pwd)/models_only

.PHONY: all codegen

all:

codegen:
	docker container run --rm -v $(outdir):/local $(image) generate \
		-i https://petstore.swagger.io/v2/swagger.json \
		-l $(lang) \
		-o /local/out/$(lang)

meta:
	docker container run --rm -v $(outdir):/local $(image) meta \
		-o /local/out/meta

help:
	docker container run --rm $(image) help

command:
	docker container run --rm $(image) $(cmd)

jar_build:
	docker image build -t $(jar_image) .

models-codegen:
	docker container run --rm -v $(models_outdir):/local $(jar_image) java \
		-jar -Dmodels modules/swagger-codegen-cli/target/swagger-codegen-cli.jar generate \
		-i https://petstore.swagger.io/v2/swagger.json \
		-l $(lang) \
		-o /local/out/$(lang)
