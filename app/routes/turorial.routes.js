module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);


  router.get("/download", tutorials.download);


  router.get("/downloaddefesas", tutorials.downloaddefesas);

  
  router.get("/downloadfolhapagamento", tutorials.downloadfolhapagamento);
  

  router.get("/downloadreceita", tutorials.downloadreceita);


  router.get("/downloaddespesa", tutorials.downloaddespesa);
  

  router.get("/downloadacidente", tutorials.downloadacidente);


  router.get("/downloadpib", tutorials.downloadpib);


  router.get("/downloadagrifamiliar", tutorials.downloadagrifamiliar);


  router.get("/downloadocarmentarios", tutorials.downloadocarmentarios);


  router.get("/downloadempregospormunicipio", tutorials.downloadempregospormunicipio);


  router.get("/downloadempregosporsetor", tutorials.downloadempregosporsetor);


  router.get("/downloadempregosporsexo", tutorials.downloadempregosporsexo);


  router.get("/downloadproducaoagricola", tutorials.downloadproducaoagricola);

  router.get("/downloadproducaoanimal", tutorials.downloadproducaoanimal);


  router.get("/downloadimportacao", tutorials.downloadimportacao);


  router.get("/downloadexportacao", tutorials.downloadexportacao);


  router.get("/downloadsaldo", tutorials.downloadsaldo);

  
  router.get("/downloadescolasealunos", tutorials.downloadescolasealunos);


  router.get("/downloadnotaideb", tutorials.downloadnotaideb);


  router.get("/downloadaves", tutorials.downloadaves);


  router.get("/downloadiluminacao", tutorials.downloadiluminacao);


  router.get("/downloadagua", tutorials.downloadagua);


  router.get("/downloadesgoto", tutorials.downloadesgoto);


  router.get("/downloadlixo", tutorials.downloadlixo);


  router.get("/downloadbovinos", tutorials.downloadbovinos);


  router.get("/downloadpequenoporte", tutorials.downloadpequenoporte);


  router.get("/downloadmedioporte", tutorials.downloadmedioporte);

  router.get("/downloadmicroempresa", tutorials.downloadmicroempresa);


  router.get("/downloaddemais", tutorials.downloaddemais);


  router.get("/downloadnaoinformado", tutorials.downloadnaoinformado);

  
  router.get("/downloadgrandeporte", tutorials.downloadgrandeporte);


  router.get("/downloadprodutoscap", tutorials.downloadprodutoscap);

  
  router.get("/downloaddespesaspessoal", tutorials.downloaddespesaspessoal);


  router.get("/downloadrebanhomunicipal", tutorials.downloadrebanhomunicipal);


  router.get("/downloadqueimadas", tutorials.downloadqueimadas);

  
  router.get("/downloadefetivados", tutorials.downloadefetivados);

  
  router.get("/downloadcomissionados", tutorials.downloadcomissionados);


  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);
  // Update a Tutorial with id

  router.put("/:id", tutorials.update);
  // Delete a Tutorial with id

  router.delete("/:id", tutorials.delete);
  // Delete all Tutorials

  router.delete("/", tutorials.deleteAll);


  app.use('/api/tutorials', router);
};
