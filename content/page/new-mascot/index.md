+++
title = "New Mascot"
date = 2018-03-18T16:36:11Z
slug = "new-mascot"
icon = "fas fa-plus-circle"
menu = "main"

[[resources]]
src = "monkey-coding.jpg"
title = "Monkey Phill writing code for the Bandar-log website."
    [resources.params]
    show = false

# Form appears below title and page content.
[form]
name = "new-mascot"
action = "/new-mascot-success/"

[[form.sections]]
label = "Mascot Details"

    [[form.sections.fields]]
    name = "name"
    label = "What do people call you?"
    type = "string"
    class = "pure-u-1 pure-u-md-1-2"
    id = "new-mascot-name"
    required = true

    [[form.sections.fields]]
    name = "username"
    label = "Mascot username"
    type = "string"
    pre = "https://bandarlog.co.uk/"
    inputClass = "pure-input pure-u-1 pure-u-sm-1-2"
    class = "username"
    data = "data-input=\"new-mascot-name\""
    required = true

    [[form.sections.fields]]
    name = "summary"
    label = "Describe yourself in one sentence:"
    type = "string"
    class = "pure-u-1"
    required = true

    [[form.sections.fields]]
    name = "story"
    label = "Tell me more about yourself, what's your story?"
    type = "text"
    class = "pure-u-1"
    required = true

[[form.sections]]
    label = "Mascot Photo"

    [[form.sections.fields]]
    name = "photo"
    label = "A photo of you in action"
    type = "file"
    accept = "image/*"
    required = true

    [[form.sections.fields]]
    name = "photo-description"
    label = "Describe your photo"
    type = "string"
    class = "pure-u-1"

[[form.sections]]
    label = "Mascot Sorting"

    [[form.sections.fields]]
    name = "organisation"
    label = "Are you with any particular organisation or section?"
    type = "string"
    list = "organisations"
    placeholder = "Organisation"
    class = "pure-u-1 pure-u-md-1-2"

    [[form.sections.fields]]
    name = "section"
    type = "string"
    list = "sections"
    placeholder = "Section"
    class = "pure-u-1 pure-u-md-1-2"

    [[form.sections.fields]]
    label = "What are 3 of your interests?"
    list = "tags"
    name = "interests[]"
    placeholder = "e.g., Adventure"
    type = "string"
    class = "pure-u-1 pure-u-md-1-2"

    [[form.sections.fields]]
    list = "tags"
    name = "interests[]"
    placeholder = "e.g., Camping"
    type = "string"
    class = "pure-u-1 pure-u-md-1-2"

    [[form.sections.fields]]
    list = "tags"
    name = "interests[]"
    placeholder = "e.g., Journalism"
    type = "string"
    class = "pure-u-1 pure-u-md-1-2"

[[form.sections]]
label = "Mascot Links"
description = "Where can we find you or your group online?"

    [[form.sections.fields]]
    label = "Geocaching"
    name = "social-geocaching"
    type = "string"
    pre = "https://coord.info/"
    inputClass = "pure-input pure-u-1 pure-u-sm-1-2"

    [[form.sections.fields]]
    label = "Facebook"
    name = "social-facebook"
    type = "string"
    pre = "https://facebook.com/"
    inputClass = "pure-input pure-u-1 pure-u-sm-1-2"

    [[form.sections.fields]]
    label = "Instagram"
    name = "social-instagram"
    type = "string"
    pre = "https://instagram.com/"
    inputClass = "pure-input pure-u-1 pure-u-sm-1-2"

    [[form.sections.fields]]
    label = "Twitter"
    name = "social-twitter"
    type = "string"
    pre = "https://twitter.com/"
    inputClass = "pure-input pure-u-1 pure-u-sm-1-2"

    [[form.sections.fields]]
    label = "Website"
    name = "social-homepage"
    type = "string"
    placeholder = "https://"
    class = "pure-u-1 pure-u-md-1-2"

[[form.sections]]
label = "Mascot Owner"
description = "We will not publish your name or email address, we will use them only to contact you about your mascot listing."

    [[form.sections.fields]]
    label = "Owner Name"
    name = "author-name"
    type = "string"
    class = "pure-u-1 pure-u-md-1-2"

    [[form.sections.fields]]
    label = "Owner E-mail"
    name = "author-email"
    type = "email"
    class = "pure-u-1 pure-u-md-1-2"

[[form.sections]]
description = "Owner Facebook and Twitter are added to the hidden information about your mascot, social networks sometimes use this information when people link to the mascot to context about the author."

    [[form.sections.fields]]
    label = "Facebook"
    name = "author-facebook"
    type = "string"
    pre = "https://facebook.com/"
    inputClass = "pure-input pure-u-1 pure-u-sm-1-2"

    [[form.sections.fields]]
    label = "Twitter"
    name = "author-twitter"
    type = "string"
    pre = "https://twitter.com/"
    inputClass = "pure-input pure-u-1 pure-u-sm-1-2"

[[form.sections]]

    [[form.sections.fields]]
    value = "Submit"
    type = "submit"
    class = "pure-button-primary"

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
Each mascot is added to the website by [Monkey Phill](/monkey-phill/) personally.  Please complete the questionaire below, the results will be emailed to Phill and he'll draft a preview for you when he next gets a chance.