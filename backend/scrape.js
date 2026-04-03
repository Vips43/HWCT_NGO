import axios from "axios";
import * as cheerio from "cheerio";

async function scrapeImpactData() {
  const url = axios.get(`https://human-welfare.org/about-us/`);
  const url1 = axios.get(`https://human-welfare.org`);
  try {
    const [resp1, resp2] = await Promise.all([url, url1]);
    const $about = cheerio.load(resp1.data);
    const $home = cheerio.load(resp2.data);

    const impactData = {
      "Childrens Supported": null,
      "Food Relief": null,
      "Support to PwDs": null,
      "Animals Rescued": null,
      "Students Reached": null,
      "Schools Supported": null,
      "Meals Served": null,
    };

    $home(".wpb_wrapper").each((index, element) => {
      const number = $home(element)
        .find("[data-bears-counterup]")
        .text()
        .trim();
      const label = $home(element).find(".vc_custom_heading").text().trim();

      if (label.includes("Students Reached")) {
        impactData["Students Reached"] = number;
      } else if (label.includes("Schools Supported")) {
        impactData["Schools Supported"] = number;
      } else if (label.includes("Meals Served"))
        impactData["Meals Served"] = number;
    });
    $about(".wpb_wrapper").each((index, element) => {
      const number = $about(element)
        .find("[data-bears-counterup]")
        .text()
        .trim();
      const label = $about(element).find(".vc_custom_heading").text().trim();

      if (label.includes("Childrens Supported")) {
        impactData["Childrens Supported"] = number;
      } else if (label.includes("Food Relief")) {
        impactData["Food Relief"] = number;
      } else if (label.includes("Support to PwDs"))
        impactData["Support to PwDs"] = number;
      else if (label.includes("Animals Rescued"))
        impactData["Animals Rescued"] = number;
    });
    console.log("\n--- Data extracted successfully ---");
    console.log(impactData);

    return impactData;
  } catch (error) {
    console.error("Error in extracting data", error);
  }
}

export default scrapeImpactData;
