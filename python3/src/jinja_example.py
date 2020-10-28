from jinja2 import Template

matches = ['1', '2', '3']
times = ['19:00', '21:00', '23:00']
teams = ['Team1-Team2', 'Team3-Team4', 'Team5-Team6']

template = Template('''
    "matches": {
    {% for key, team, time in matches %}
        "{{key}}": {
          "teams": "{{team}}",
          "time": "{{time}}"
        },
    {% endfor %}
    }
''')

result = template.render(matches=zip(matches, times, teams))
print(result)
