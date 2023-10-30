function status(request, response) {
  response.status(200).json({ chave: "são cima da média" });
}

export default status;
