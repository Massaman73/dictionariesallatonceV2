const express = require('express')
const app = express()
const path = require('path');
//const bodyParser = require('body-parser');
const playwright = require('playwright');
const { JSDOM } = require('jsdom');
const res = require('express/lib/response');
const port = process.env.PORT || 3001
const axios = require('axios');
const { error } = require('console');
const { getElementsByTagName } = require('domutils');


app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
/*
app.get("/api", (req, res) => {
  
  //Reverso
  let result;
  async function reverso(word) {
    result = await axios.get(`https://mobile-dictionary.reverso.net/fr/portugais-anglais/${word}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36'
      }
    })
      .then((res) => {
        const dom = new JSDOM(res.data).window.document;
        const item = dom.querySelector('#divCLR').outerHTML;
        console.log(item);
        return item;
      }
      );
    return result;
  }

  let resultFromReverso = reverso(req.body.postData)
  resultFromReverso.then((response) => {

   
    console.log(response);
    res.write(response);
    
  }
  ).catch((error) => {
    console.log(error);
  }
  )

  //Infopedia
  let result2;
  async function infopedia(word) {
    result2 = await axios.get(`https://www.infopedia.pt/dicionarios/portugues-ingles/${word}`)
      .then((res) => {
        const dom = new JSDOM(res.data).window.document;
        const item = dom.querySelector('.dolEntradaVverbete').outerHTML;
        console.log(item);
        return item;
      }
      );
    return result2;
  }

  let resultFromInfopedia = infopedia(req.body.postData)
  resultFromInfopedia.then((response) => {

  
    console.log(response);
    res.write(response);
  }
  )

  //Michaelis

  let result3;
  async function michaelis(word) {
    result3 = await axios.get(`https://michaelis.uol.com.br/escolar-ingles/busca/portugues-ingles-escolar/${word}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36'
      }
    })
      .then((res) => {
        const dom = new JSDOM(res.data).window.document;
        const item = dom.querySelector('.verbete.bs-component').outerHTML;
        console.log(item);
        return item;
      }
      );
    return result3;
  }

  let resultFromMichaelis = michaelis(req.body.postData)
  resultFromMichaelis.then((response) => {

   
    console.log(response);
    res.write(response);
  }
  ).catch((error) => {
    console.log(error);
  }
  )
  res.end();







 
});
*/



app.post("/apiCollins", (req, res) => {


  async function allLists(postData) {
    const browser = await playwright.webkit.launch({
      headless: true
    });

    const page = await browser.newPage();
    await page.goto(`https://www.collinsdictionary.com/dictionary/portuguese-english/${postData}`);

    const allList = await page.$eval('.he', selected => {
      // let data = [];
      let sense = selected.querySelector('.cB.cB-def.dictionary.biling').innerHTML;
      return sense;
    });
    return allList;
  };


  let resultFromCollins = allLists(req.body.postData);

  resultFromCollins.then((response) => {
    res.send(response);
  })

})
app.post("/apiInfopedia", function (req, res) {
  let result;

  async function infopedia(word, lang) {
    if (lang == '1') {
      result = await axios.get(`https://www.infopedia.pt/dicionarios/portugues-ingles/${word}`)
        .then((res) => {
          const dom = new JSDOM(res.data).window.document;
          dom.querySelector('.favorites').remove();
          dom.querySelector('.dolPronunciaInfo').remove();
          const item = dom.querySelector('.dolEntradaVverbete').outerHTML;
          console.log(item);
          return item;
        }
        );
      return result;
    } else if(lang == '2'){
      result = await axios.get(`https://www.infopedia.pt/dicionarios/ingles-portugues/${word}`)
        .then((res) => {
          const dom = new JSDOM(res.data).window.document;
          dom.querySelector('.favorites').remove();
          dom.querySelector('.dolPronunciaInfo').remove();
          const item = dom.querySelector('.dolEntradaVverbete').outerHTML;
          console.log(item);
          return item;
        }
        );
      return result;
    }
  }

  let resultFromInfopedia = infopedia(req.body.postData, req.body.postLang);

  resultFromInfopedia.then((response) => {
    res.send(response);
  }
  )



})
app.post("/apiReverso", function (req, res) {
  let result;
  async function reverso(word, lang) {
    result = await axios.get(`https://mobile-dictionary.reverso.net/fr/portugais-anglais/${word}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36'
      }
    })
      .then((res) => {
        const dom = new JSDOM(res.data).window.document;
        dom.querySelector('.logocorner').remove();
        const item = dom.querySelector('#divCLR').outerHTML;

        return item;
      }
      );
    return result;
  }

  let resultFromReverso = reverso(req.body.postData, req.body.postLang);

  resultFromReverso.then((response) => {
    res.send(response);
  }
  ).catch((error) => {
    console.log(error);
  }
  )



})
app.post("/apiMichaelis", function (req, res) {
  let result;
  async function michaelis(word, lang) {
    result = await axios.get(`https://michaelis.uol.com.br/escolar-ingles/busca/portugues-ingles-escolar/${word}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36'
      }
    })
      .then((res) => {
        const dom = new JSDOM(res.data).window.document;
        const item = dom.querySelector('.verbete.bs-component').outerHTML;
        console.log(item);
        return item;
      }
      );
    return result;
  }


  let resultFromMichaelis = michaelis(req.body.postData, req.body.postLang);
  resultFromMichaelis.then((response) => {


    res.send(response);
  }
  ).catch((error) => {
    console.log(error);
  }
  )



})


app.listen(port, () => {
  console.log(`listening on *:${port}`);
})


