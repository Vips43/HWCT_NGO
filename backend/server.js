import express from 'express';
import scrapeImpactData from './scrape.js';
import cors from 'cors'

const app = express();

app.use(cors());
app.use('/data', async(req, res)=>{
  const data = await scrapeImpactData();
  return res.status(200).json(data)
})


app.listen(3000, ()=>{
  console.log('app is listening on:- 3000')
})  
