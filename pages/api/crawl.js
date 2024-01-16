import axios from "axios";
import cheerio, { Element } from "cheerio";

const getHtml = async () => {
  try {
    let menus = [];

    let html = await axios.get("https://www.hanyang.ac.kr/web/www/re2");    
    let ulList = [];
    let $ = cheerio.load(html.data);
    let bodyList = $("ul.thumbnails li.span3");
    bodyList.map((i, element) => {
      ulList[i] = {
        id: i + 1,
        img: $(element).find("a img").attr("src"),
        menu: $(element).find("a h3").text().replace(/[\n\t]/g, "")
      };
    });
    menus.push({
      name: "생과대",
      ulList
    })

    html = await axios.get("https://www.hanyang.ac.kr/web/www/re4");
    ulList = [];
    $ = cheerio.load(html.data);
    bodyList = $("ul.thumbnails li.span3");
    bodyList.map((i, element) => {
      ulList[i] = {
        id: i + 1,
        img: $(element).find("a img").attr("src"),
        menu: $(element).find("a h3").text().replace(/[\n\t]/g, "")
      };
    });
    menus.push({
      name: "신소재",
      ulList
    })
    return menus

  } catch (error) {
    console.error(error);
  }
};

const article = getHtml();

export default async function handler(req, res) {
  res.status(200).json(await article); // 크롤링한 결과값 json 형식으로 send
}
