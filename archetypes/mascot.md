+++
title = "{{ replace .TranslationBaseName "-" " " | title }}"
date = {{ .Date }}
draft = true
tags = [
  "Scouting",
]

[menu.main]
parent = "Mascots"

[social]
facebook = "{{ .TranslationBaseName }}"
instagram = "https://instagram.com/{{ .TranslationBaseName }}"
twitter = "https://twitter.com/{{ .TranslationBaseName }}"

[[resources]]
src = "avatar.jpg"
title = "Photo of {{ replace .TranslationBaseName "-" " " | title }}."
+++
