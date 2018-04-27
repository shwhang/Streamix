'use strict';

var AWS = require('aws-sdk');

var elasticTranscoder = new AWS.ElasticTranscoder({
    apiVersion: '2012-09-25',
    region: 'us-east-1'
});

function removeExtension(fileName) {
    console.log(fileName);
    let fileWithoutExt = fileName.replace('.mp4', '');
    return fileWithoutExt;
}

exports.handler = (event, context, callback) => {
    let fileName = event.Records[0].s3.object.key;
    console.log('New video add to development bucket: ', fileName);

    elasticTranscoder.createJob( {
        PipelineId: process.env.PIPELINE_ID,

        Input: {
            Key: fileName,
            FrameRate: 'auto',
            Resolution: 'auto',
            AspectRatio: 'auto',
            Interlaced: 'auto',
            Container: 'auto'
        },

        Output: {
            Key: `videos/${fileName}`,
            ThumbnailPattern: `thumbnails/${removeExtension(fileName)}/{count}`,
            PresetId: '1351620000001-100070', //preset_id for web formatted video
            Rotate: 'auto'
        }
    }, function(err, data) {
            if (err) {
                console.log('Job failed', fileName);
                console.log(err.stack);
                console.log(data);
            } else {
                console.log(data);
                console.log('Video was successfully transcoded.', fileName);
            }

            //What does callback do? you use the callback to explicitly return info back to caller
            callback(err, data);
        }
    );


};
