+++
title = "New Mascot"
date = 2018-03-18T16:36:11Z
url = "new-mascot"
icon = "fas fa-plus-circle"
menu = "main"
draft = true

[form]
name = "new-mascot"

[[form.sections]]
label = "About You"

[[form.sections.fields]]
name = "name"
label = "What do people call you?"
type = "string"
required = true
[[form.sections.fields]]
name = "summary"
label = "Describe yourself in one sentence:"
type = "string"
required = true
[[form.sections.fields]]
name = "story"
label = "Tell me more about yourself, what's your story?"
type = "text"
required = true
[[form.sections.fields]]
name = "organisation"
label = "Are you with any particular organisation or section?"
type = "string"
list = "organisations"
placeholder = "Organisation"
[[form.sections.fields]]
name = "section"
type = "string"
list = "sections"
placeholder = "Section"
[[form.sections.fields]]
label = "What are 3 of your interests?"
list = "tags"
name = "interests[]"
placeholder = "e.g., Adventure"
type = "string"
[[form.sections.fields]]
list = "tags"
name = "interests[]"
placeholder = "e.g., Camping"
type = "string"
[[form.sections.fields]]
list = "tags"
name = "interests[]"
placeholder = "e.g., Journalism"
type = "string"

[[form.sections]]
label = "Where can we find you or your group online?"

[[form.sections.fields]]
label = "Geocaching"
name = "social-geocaching"
type = "string"
pre = "https://coord.info/"
class = " "

[[form.sections.fields]]
label = "Facebook"
name = "social-facebook"
type = "string"
pre = "https://facebook.com/"
class = " "

[[form.sections.fields]]
label = "Instagram"
name = "social-instagram"
type = "string"
pre = "https://instagram.com/"
class = " "

[[form.sections.fields]]
label = "Twitter"
name = "social-twitter"
type = "string"
pre = "https://twitter.com/"
class = " "

[[form.sections.fields]]
label = "Website"
name = "social-homepage"
type = "string"
placeholder = "https://"

[[form.sections]]
label = "If your owner is on Facebook or Twitter, where can I find them?"

[[form.sections.fields]]
label = "Facebook"
name = "author-facebook"
type = "string"
pre = "https://facebook.com/"
class = " "

[[form.sections.fields]]
label = "Twitter"
name = "author-twitter"
type = "string"
pre = "https://twitter.com/"
class = " "

[[form.sections]]

[[form.sections.fields]]
value = "Submit"
type = "submit"

[[form.datalists]]
id = "organisations"
options = [
    "Girlguiding",
    "Scouting",
    "SSAGO",
]
[[form.datalists]]
id = "sections"
options = [
    "Beaver Scouts",
    "Brownies",
    "Cub Scouts",
    "Explorer Scouts",
    "Guides",
    "Rainbows",
    "Scout Active Support",
    "Scout Network",
    "Scouts",
]
[[form.datalists]]
id = "tags"
taxonomy = "tags"

+++