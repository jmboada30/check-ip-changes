import fs from "fs";

const path = "./data/data.json";

export const saveDB = (data) => {
  const ipServer = data;
  fs.writeFileSync(path, JSON.stringify({ipServer}));
};

export const readDB = () => {
  if (!fs.existsSync(path)) return null;
  const info = fs.readFileSync(path, { encoding: "utf-8" });

  if(!info) return;

  return JSON.parse(info);
};

export const removeDB = () => {
  fs.writeFileSync(path, '');
}