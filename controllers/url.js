const {shortid} = require("shortid");
const URL  = require('../models/url');
async function handlegenerateNewShortURL(req,res){
    const body = req.body; 
    if(!body.url) return  res.status(400).json({error:'url is required'})
    const shortID = shortid();
    await URL.create({
        shortID : shortID,
        redirectURL:body.url,
        visitHistory:[],
    });
    return re.json({id:shortID});
}
module.exports = {
    handlegenerateNewShortURL
}