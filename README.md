~~~
- openproject/community:11

$ podman run --name openproject --rm -it -p 8000:80 -v $(pwd)/theme:/app/theme openproject/community:11
~~~

~~~
- REF: https://github.com/ruby/rake

	/app/lib/open_project/assets.rake
	/app/lib/tasks/assets.rake
~~~

~~~
- BUILD FRONTEND

$ bundle exec rake assets:precompile assets:clean
 \_	
   \
   \---> /app/frontend/scripts/link_plugin_placeholder.js
   |
   \---> node /app/frontend/node_modules/\@angular/cli/bin/ng build --prod --named-chunks --extract-css --source-map
   |
   \---> bundle exec rake assets:rebuild_manifest
~~~

~~~
- /app/config/frontend_assets.manifest.json                     [ map  ]
- /app/public/assets/frontend/                                  [ dist ]

- /app/frontend/                                                [ src  ]
- /app/frontend/anguler.json                                    [ conf ]
- /app/frontend/package.json                                    [ node ]
- /app/frontend/src/global_styles/openproject/_settings.scss  
- /app/frontend/src/global_styles/openproject/_variables.scss  
~~~

~~~
- COPY DIST

$ cd /app/frontend/
$ npm install
$ cd /app
$ bundle exec rake assets:precompile assets:clean
$
$ cp -r /app/public/assets/frontend/               /app/theme
$ cp /app/config/frontend_assets.manifest.json     /app/theme
~~~

~~~
$ podman run --name openproject --rm -it -p 8000:80 \
	-v $(pwd)/theme/frontend:/app/public/assets/frontend \
	-v $(pwd)/theme/frontend_assets.manifest.json:/app/config/frontend_assets.manifest.json \
	openproject/community:11
~~~
