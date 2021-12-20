import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xBbf0892320C5c6500454167EA95B6977ac889953",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Potato peeler",
        description: "This NFT will give you access to PotatoDAO!",
        image: readFileSync("scripts/assets/Eplucheur.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()