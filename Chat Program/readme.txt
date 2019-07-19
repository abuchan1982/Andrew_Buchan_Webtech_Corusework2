Run the app from this folder using nodemon for automatic restarts during development:

    $ DEBUG=simpleapp:* nodemon --ignore 'data/*' start

NB. This ignores the data folder which might have lots of reading and writing whilst the app is running.
