function successHandle(res, todos) {
  const headers = {
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "PATCH, POST, GET, OPTIONS, DELETE",
    "Content-Type": "application/json, charset=utf-8"
  };

  res.writeHead(200, headers);
  res.write(JSON.stringify({
    "status": "success",
    "data": todos
  }));
  res.end();
}

module.exports = successHandle;