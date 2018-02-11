SHELL = /bin/sh
target = public

all : $(target) ;

$(target) :
	hugo --i18n-warnings --gc -d $@

.PHONY : clean
clean :
	-rm -r $(target)

.PHONY : serve
serve :
	HUGO_GOOGLE_ANALYTICS=off hugo serve --buildDrafts --navigateToChanged --i18n-warnings --watch
