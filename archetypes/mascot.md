+++
title = "{{ replace .TranslationBaseName "-" " " | title }}"
date = {{ .Date }}
description = "An awesome mascot!"
draft = true
tags = [
  "Scouting",
]

# Configure links to this mascot's author:
# [author]
# facebook = "author.name"
# twitter = "AuthorName"

[social]
# See themes/bandarlog/data/social for valid links or to add more.
facebook = "{{ .TranslationBaseName }}"
instagram = "{{ .TranslationBaseName }}"
twitter = "{{ .TranslationBaseName }}"

[[resources]]
src = "avatar.jpg"
title = "Photo of {{ replace .TranslationBaseName "-" " " | title }}."
# Also possible to change the image anchor:
#   [resources.params]
#   anchor = "left"
+++
