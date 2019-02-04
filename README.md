# Personal Webpage

Over the years, I always tried to maintain a "fancy" website that I would probably never use.
During 2018 I've went through several iterations and still was not happy with whatever results I got. The page went from a really basic HTML/CSS only with my name and only social media links, to having actual content, to using PHP, AngularJS, Vue.JS. The layout itself has been changed several times too.
2019 will be a bit different, I will be focusing strictly on the process I'm going through in order to achieve something nice. I've set up the page as an ASP.NET Core application and I'm deploying it with Docker on my DigitalOcean host

## Dependencies

### Frontend
All dependencies are fetched via npm. If you want to download them just run `npm install`. After running that, you will have to use `gulpjs` in order to move
all the dependencies to their right place. Simply executing the `gulp` command will create copies of all the required files into the /wwwroot/ folder.

### Hosted version

http://alinstefanola.ru

### TODO
* SSL
* Move data from .js to API
