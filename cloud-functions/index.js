/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.tts = async (req, res) => {
  const message = req.query.message || req.body.message || 'Hello World!';
  const lang = req.query.lang || req.body.lang || 'en';
  const callback = req.query.callback || req.body.callback || '';
  const mp3 = req.query.mp3 || req.body.mp3 || '';

  const url = await require('google-tts-api')(message,lang);
  const resp = `{ "url": "${url}" }`;
  
  res
    .set('Access-Control-Allow-Origin', '*')
    .set('Content-Type', mp3 ? 'audio/mpeg' : callback ? 'text/javascript' : 'application/json')
    .status(200)
    .send(mp3 ?  await (await fetch(url)).buffer() : callback ? `${callback} && ${callback}(${resp});` : resp);
};