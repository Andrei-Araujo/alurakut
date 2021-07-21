import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  if (request.method === "POST") {
    const TOKEN = "f42ffe385b166ecc473b310b99b685";
    const client = new SiteClient(TOKEN);

    const registroCriado = client.items.create({
      itemType: "975674",
      ...request.body,
      /*title: "Comunidade Teste",
      imageUrl: "htp://ithub.com/Andrei-Araujo.png",
      creatorSlug: "andrei",*/
    });

    response.json({
      dados: "Algum dado qualquer",
      registroCriado: registroCriado,
    });
    return;
  }

  response.status(404).json({
    message: "Ainda não temos nada non GET, mas no POST tem",
  });
}
