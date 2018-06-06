A Personal Resume Template is powered by Vue,Node.js & Webpack, and it also is a small project for learning vue in practice.

Online Address: [Vue Resume](http://resume.ido321.com/).

### How to run

You can run it in your browser for generating owner resume, and follows following steps:

```
git clone https://github.com/dwqs/vue-resume.git && cd vue-resume

//in current terminal
npm i

//start node service
npm run dev

//open another terminal and cd pwd
cd ./client

// npm >= 5.2.0
npx gulp dev

//for production, cd the root directory of project
npm run prod:build
```

Make sure Node.js is installed in your computer.

And then, open browser(using chrome for best experience) and visit `http://localhost:9002/`.

### Generate owner resume

The default data of resume is my, if you want to generate your resume, just modify the `resume.json` file.

You can find it in `./server/json/` . If you modify it, you must restart the node service(retype `npm run dev` in your terminal).

### Others

I used Font Awesome in my project, so, if you want to change the icon, visit [FontAwesome CheatsSheet](http://fontawesome.io/cheatsheet/) 
to find the icon you like.

Besides, you should change the sites logo and replace the avatar, there are in `./client/static/images/`.
You can put your corresponding resources in it. Meanwhile, you should change the static resource path,
and rerun the command `npm run dev` and `gulp dev`. 

Rerun `gulp clean && gulp dev` when images were loaded error.

### License

MIT