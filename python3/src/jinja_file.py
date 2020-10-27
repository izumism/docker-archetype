from jinja2 import Template, Environment, FileSystemLoader

template_path = '/app/data/'

env = Environment(loader=FileSystemLoader(template_path))
template = env.get_template('elastic_query.txt.j2')

data = {
  "field": "author",
  "query": "Martin"
}

result = template.render(data)

print(result)
