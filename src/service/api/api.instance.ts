import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_LEARN_WORDS,
  headers: {},
});

export const getWord = async (page: number, pageLength: number) => {
  try {
    const res = await instance.get(
      `translations/words?page=${page}&pageSize=${pageLength}`
    );
    return res.data;
  } catch (e) {
    console.error(e);
    return Promise.reject(e);
  }
};
// export const getWordInfo = async (words: string[]) => {
//   try {
//     const results = [];
//     for (const [idx] of words.entries()) {
//       const newWord = await axios.post(
//         "https://api.reverso.net/translate/v1/translation",
//         {
//           format: "text",
//           from: "eng",
//           input: words[idx],
//           options: {
//             contextResults: true,
//             languageDetection: true,
//             origin: "reversomobile",
//             sentenceSplitter: false,
//           },
//           to: "rus",
//         }
//       );
//       results.push(newWord.data);
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//     }
//     return results;
//   } catch (e) {
//     console.log("ERROR: ", e);
//     return Promise.reject(e);
//   }
// };
// export const test = async () => {
//   // const t = await getWordInfo(["test", "new"]);
//   // console.log(t);
//   return 1;
// };
