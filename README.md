<p align="center">
    <img alt="mockium-logo" src="https://drive.google.com/uc?export=view&id=1XIatwEA1_4Q2g0S1_-QY4ISbUWsxdeW-">
</p>

This is an example project for learning how to use [Mockium](https://github.com/goncedillo/mockium) mock server.
The goal of this repo is just learn the basis of working with Mockium in a real project and get a starting point.

## How to use this example project

First of all, you need to install Mockim as global dependancy. You can find more information about this checking out the [Mockium installation](https://github.com/goncedillo/mockium#installation) process.

#### Local dependencies

In order to run the project, it is necessary to install local project dependencies:

```bash
npm install
```

#### Mockium server

You can start the Mockium server for testing the sample endpoints:

```bash
mockium -s ./mockium-files
```

**That's it!** At tis point you can see that Mockium is running in your terminal, exposing services at [port 5000](http://localhost:5000) by default.

Now you can test the enpoints manually or using the provided web client in this project [in your browser](http://localhost:3000).

You will notice that nothing is runnig up to now in the client side. In this way, you will need to start the web server for accomplish that:

```bash
npm start
```

At this point, you could select different features in the server, in order to change the responses and extend the server throughout the Mockium CLI running in your terminal.

For more information about managing the CLI you can visit the [Mockium CLI documentation](https://github.com/goncedillo/mockium#getting-started)

#### Configuration

You can set all configuration usign parameters in command or using custom file `.mockiumrc` or even setting it in package.json. For more information about setting config files you can check out [Mockium config documentation](https://github.com/goncedillo/mockium#configuration)

#### Scaffolding

The most important folder in this project is **mockium-files** which contains all the Mockium stuff. aas you can observe, all features are placed in the **features** folder (as default) as well as **mocks** with the mock files.

The rest of files and folders are related with web server (based on [express](https://github.com/expressjs/express) server) and front-end resources.

For more information about the scaffolding in Mockium, you can visit the [Mockium scaffolding documentation](https://github.com/goncedillo/mockium#Scaffolding)
