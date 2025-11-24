import remarkParse from 'remark-parse'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'
import { AssetOptions } from "../types"
import type { Plugin } from "unified"
import rehypeSanitize from "rehype-sanitize"
import { unified } from "unified"
import remarkRehype from 'remark-rehype'
const asset_substitution: Plugin<[AssetOptions]> = (options) => {
  return (tree) => {
    visit(tree, "image", (node: any) => {
      if (typeof node.url === "string" && node.url.startsWith("asset:")) {
        const assetId = node.url.replace("asset:", "");
        const index = Number(assetId);
        if (!Number.isNaN(index) && options.assets[index]) {
          node.url = options.assets[index];
        }
      }
    });
  };
};
export async function convert_md(md: string, assets: string[]): Promise<string> {
    const result = await unified()
        .use(remarkParse)
        .use(asset_substitution, {assets})
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .process(md)

    return String(result);
}
