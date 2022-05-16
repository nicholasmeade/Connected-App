const apiKey = "ZGE1YTMwYTItM2NiZS00ZjM3LWExNDQtYTY5ZjVkODYzMDg3"

const m3o = require("m3o")(process.env.ZGE1YTMwYTItM2NiZS00ZjM3LWExNDQtYTY5ZjVkODYzMDg3);

async function main() {
  let rsp = await m3o.weather.now({
    location: "london",
  });
  console.log(rsp);
}

main();