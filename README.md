# Streamix

[Live Demo](https://watch-streamix.herokuapp.com)

### Overview
Streamix is a single page application inspired by the popular cross-platform streaming app, Netflix.


### Features
- Sign in/Sign up
- Profile Management
- Library of all Medias
- Browse by Genre
- Modal for Medium Details
- Video Player

### Technical Details

##### Using AWS Elastic Transcoder and Lambda Function
Used the AWS Elastic Transcoder pipeline to transcode all videos to web-safe formats and to collect thumbnail images from each video. Elastic Transcoder only allows for one video to be transcoded at a time. To automate this process, a trigger event was attached to the S3 bucket where videos would be uploaded to. When the event is triggered, an AWS Lambda function will take the video and trigger the Elastic Transcoder's pipeline to automatically transcode any videos and upload them to the production S3 bucket.

Check out the [AWS Lambda Function](docs/elastic_transcoder_lambda.js).

##### Reusable Components
Navigation Bar
The same navigation bar is used across all pages, but will render something different based on the current path that the user is on.

- ![Home](docs/images/home_navbar.png)
- ![Profile](docs/images/library_navbar.png)
