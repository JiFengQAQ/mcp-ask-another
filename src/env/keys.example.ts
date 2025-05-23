// 请将此文件复制并重命名为 keys.ts
// 然后，将下面的 "your_key_here" 替换为您的实际 OpenAI API 密钥。

export const OPENAI_API_KEY = "your_key_here";

// (可选) 指定要使用的 OpenAI 模型。默认为 "gpt-3.5-turbo" 或 OpenAI 库的默认模型。
// 例如: "gpt-4", "gpt-4-turbo-preview"
export const OPENAI_MODEL = "gpt-3.5-turbo"; // 或者留空使用默认值

// (可选) 指定自定义的 OpenAI API 端点。
// 如果您使用 Azure OpenAI 服务或兼容的第三方服务，请设置此项。
// 默认为 OpenAI 官方 API 端点。
// 例如: "https://api.openai.com/v1"
export const OPENAI_API_BASE_URL = ""; // 或者留空使用默认值