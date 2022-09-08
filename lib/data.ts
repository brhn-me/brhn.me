import { readFileSync } from 'fs';
import { join } from "path";
import { DATA_DIR, POSTS_DIR } from "./constants";
import {MarkDownDataReader} from "../scripts/data-generator.mjs"


const dataDir = join(process.cwd(), DATA_DIR);

export function getAllPosts() {
    const data = readFileSync(dataDir + "/posts.json",
            {encoding:'utf8', flag:'r'});
    let posts = JSON.parse(data);
    return posts;
}