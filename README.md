# SafeLinks Site

Test out a link to see if it redirects before you click on it.

Visit the site: https://www.isthislinklegit.com

## Details

This is a web application built with Next.js and deployed to AWS Lambda. This uses the [SafeLinks API](https://github.com/billearly/safe-links) to get link information.

## Retrospective

I'm pretty happy with how this turned out. I kept the scope of the project as small as possible and was able to hit my goals.

Goals:
* Build a small, focused, useful website
* Separate the web app from the [link lookup service](https://github.com/billearly/safe-links)
* Deploy to AWS to get a little more familiar with that cloud service

If I had more time, things I would add:
* Automated deployments. Right now its a manual zip and upload

If I could do it over again, things I would change:
* I would use Typescript from the beginning.
* Look into an alternate trigger for the Lambda. Right now its using an API Gateway which means http requests are not accepted (must be https). I would like to be able to redirect (ha) http requests, but as is thats not even possible
* Next.js is a great framework but I did have a few headaches with needing to do major version upgrades for security patches. I would _consider_ looking at other options