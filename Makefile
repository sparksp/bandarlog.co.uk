SHELL = /bin/sh
target = public

all : $(target) ;

$(target) :
	hugo --i18n-warnings -d $@

.PHONY : clean
clean :
	-rm -r $(target)

.PHONY : serve
serve :
	HUGO_GOOGLE_ANALYTICS=dev hugo serve --buildDrafts --navigateToChanged --i18n-warnings --watch
