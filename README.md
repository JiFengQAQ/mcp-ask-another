# 🤖 AI Development Assistant MCP Server / AI 开发助手 MCP 服务器

Welcome to your AI-powered development toolkit, designed as a Model Context Protocol (MCP) server for Cursor! This project provides intelligent coding assistance through custom AI tools.
**Note:** This is primarily a tutorial demo and not a production-ready tool.

欢迎使用您的 AI 驱动的开发工具包，它被设计为 Cursor 的模型上下文协议 (MCP) 服务器！本项目通过自定义 AI 工具提供智能编码辅助。
**请注意：** 这主要是一个教程演示项目，并非生产就绪的工具。

## ✨ Features / 功能

### 🎨 Code Architect / 代码架构师

- Call advanced reasoning LLMs to generate plans and instructions for coding agents.
- **Configurable Model & Endpoint**: You can specify the OpenAI model and a custom API endpoint (e.g., for Azure OpenAI) via environment configuration.
- 调用高级推理语言模型 (LLM) 为编码代理生成计划和指令。
- **可配置的模型和端点**：您可以通过环境配置指定 OpenAI 模型和自定义 API 端点（例如，用于 Azure OpenAI）。

### 📸 Screenshot Buddy / 截图伙伴

Take UI design screenshots and use them with the composer agent.
拍摄 UI 设计截图并将其与 composer agent 一起使用。

### 🔍 Code Review / 代码审查

Use git diffs to trigger code reviews.
使用 git diffs 触发代码审查。

## 🚀 Getting Started / 快速上手

### 1. Environment Setup / 环境设置

First, you'''ll need to set up your environment variables.
首先，您需要设置您的环境变量。

1.  **Copy the example configuration file**:
    In the `src/env/` directory, you will find a file named `keys.example.ts`. Make a copy of this file and rename it to `keys.ts`.
    **复制示例配置文件**：
    在 `src/env/` 目录下，您会找到一个名为 `keys.example.ts` 的文件。复制此文件并将其重命名为 `keys.ts`。

2.  **Edit `src/env/keys.ts`**:
    Open the newly created `src/env/keys.ts` and fill in your details:
    **编辑 `src/env/keys.ts`**：
    打开新创建的 `src/env/keys.ts` 文件并填写您的详细信息：

    ```typescript
    // src/env/keys.ts

    // Required: Your OpenAI API Key
    // 必需：您的 OpenAI API 密钥
    export const OPENAI_API_KEY = "your_openai_api_key_here";

    // Optional: Specify the OpenAI model to use for the Architect tool.
    // Defaults to "gpt-3.5-turbo" or the OpenAI library'''s default if left empty or commented out.
    // Example: "gpt-4", "gpt-4-turbo-preview"
    // 可选：指定 Architect 工具要使用的 OpenAI 模型。
    // 如果留空或注释掉，则默认为 "gpt-3.5-turbo" 或 OpenAI 库的默认模型。
    // 例如："gpt-4", "gpt-4-turbo-preview"
    export const OPENAI_MODEL = "gpt-3.5-turbo";

    // Optional: Specify a custom OpenAI API base URL.
    // Useful if you are using Azure OpenAI service or a compatible third-party service.
    // Defaults to the official OpenAI API endpoint if left empty or commented out.
    // Example: "https://your-azure-resource.openai.azure.com/"
    // 可选：指定自定义的 OpenAI API 基础 URL。
    // 如果您正在使用 Azure OpenAI 服务或兼容的第三方服务，此选项非常有用。
    // 如果留空或注释掉，则默认为 OpenAI 官方 API 端点。
    // 例如："https://your-azure-resource.openai.azure.com/"
    export const OPENAI_API_BASE_URL = "";

    // Add any other keys you need
    // 添加您需要的任何其他密钥
    // export const ANOTHER_SERVICE_API_KEY = "your_other_key_here";
    ```

> ⚠️ **Security Note**: Storing API keys directly in source code is not recommended for production environments. This is for local development and learning purposes. You can also set environment variables inline in the Cursor MCP interface if preferred.
> ⚠️ **安全提示**：不建议在生产环境中将 API 密钥直接存储在源代码中。此方法仅适用于本地开发和学习目的。如果需要，您也可以在 Cursor MCP 界面中内联设置环境变量。

### 2. Installation / 安装

```bash
npm install
# or / 或
yarn install
```

### 3. Build the Server / 构建服务器

```bash
npm run build
```

### 4. Adding to Cursor / 添加到 Cursor

This project is designed to be used as an MCP server in Cursor. The recommended way to add it is by directly editing your `mcp.json` file.
本项目设计为在 Cursor 中用作 MCP 服务器。推荐的添加方式是直接编辑您的 `mcp.json` 文件。

1.  **Locate your `mcp.json` file / 找到您的 `mcp.json` 文件**:
    It's typically found in the following locations:
    它通常位于以下位置：
    *   **Windows**: `%USERPROFILE%\.cursor\mcp.json` (e.g., `C:\Users\YourUserName\.cursor\mcp.json`)
    *   **macOS**: `~/.cursor/mcp.json`
    *   **Linux**: `~/.config/.cursor/mcp.json` or `~/.cursor/mcp.json`

2.  **Edit `mcp.json` / 编辑 `mcp.json`**:
    Open the file and add the following configuration объекt for this server within the `mcpServers` object. If you already have other servers configured, ensure they are separated by commas.
    打开文件，并在 `mcpServers` 对象内为此服务器添加以下配置对象。如果您已配置其他服务器，请确保它们之间用逗号分隔。

    ```json
    {
      "mcpServers": {
        "ai-development-assistant-mcp": {
          "name": "mcp-ask-another",
          "type": "stdio",
          "command": "node",
          "args": [
            "/ABSOLUTE/PATH/TO/YOUR/PROJECT/mcp-ask-another/build/index.js"
          ]
        }
      }
    }
    ```

    **Key points / 关键点**:
    *   Replace `"/ABSOLUTE/PATH/TO/YOUR/PROJECT/mcp-ask-another/build/index.js"` with the **actual absolute path** to the `build/index.js` file in *this* project (`mcp-ask-another`).
        将 `"/ABSOLUTE/PATH/TO/YOUR/PROJECT/mcp-ask-another/build/index.js"` 替换为此项目 (`mcp-ask-another`) 中 `build/index.js` 文件的**实际绝对路径**。
    *   The key `"ai-development-assistant-mcp"` is a unique identifier for this server configuration within `mcp.json`. You can change it if needed, but it must be unique.
        键 `"ai-development-assistant-mcp"` 是此服务器配置在 `mcp.json` 中的唯一标识符。如果需要，您可以更改它，但它必须是唯一的。
    *   The `"name"` field is what will be displayed in the Cursor UI. I've included `(mcp-ask-another)` to help identify it if you have multiple assistants.
        `"name"` 字段将显示在 Cursor 用户界面中。我加入了 `(mcp-ask-another)` 以便在您有多个助手时帮助识别。

3.  **Restart Cursor / 重启 Cursor**:
    After saving changes to `mcp.json`, you may need to restart Cursor for the new MCP server configuration to be loaded.
    保存对 `mcp.json` 的更改后，您可能需要重新启动 Cursor才能加载新的 MCP 服务器配置。

After these steps, you should see your tools listed under "Available Tools" in Cursor's MCP settings (you might need to click the refresh button there).
完成这些步骤后，您应该会在 Cursor 的 MCP 设置中的"可用工具"下看到列出的工具（您可能需要点击那里的刷新按钮）。

For more general details about MCP setup, check out the [Cursor MCP Documentation](https://docs.cursor.com/advanced/model-context-protocol).
有关 MCP 设置的更多常规详细信息，请参阅 [Cursor MCP 文档](https://docs.cursor.com/advanced/model-context-protocol)。

## 🛠️ Using the Tools / 使用工具

Once configured, you can use these tools directly in Cursor'''s Composer. The AI will automatically suggest using relevant tools, or you can explicitly request them by name or description.
配置完成后，您可以直接在 Cursor 的 Composer 中使用这些工具。AI 会自动建议使用相关工具，或者您可以按名称或描述明确请求它们。

For example, try typing in Composer: / 例如，尝试在 Composer 中输入：

- "Review this code for best practices" / "审查此代码以获取最佳实践"
- "Help me architect a new feature for this Go service" / "帮我为此 Go 服务设计一个新功能" (The `Code Architect` tool will use your configured model / `代码架构师`工具将使用您配置的模型)
- "Analyze this UI screenshot" / "分析此 UI 截图"

The agent will ask for your approval before making any tool calls.
代理在进行任何工具调用之前会请求您的批准。

> 📘 **Pro Tip**: You can update your `.cursorrules` file with instructions on how to use the tools for certain scenarios, and the agent will use the tools automatically.
> 📘 **专业提示**：您可以使用有关如何在特定场景中使用工具的说明来更新您的 `.cursorrules` 文件，代理将自动使用这些工具。

## 📁 Project Structure / 项目结构

```
src/
├── tools/
│   ├── architect.ts    # Code structure generator (uses OpenAI API) / 代码结构生成器 (使用 OpenAI API)
│   ├── screenshot.ts   # Screenshot analysis tool / 截图分析工具
│   └── codeReview.ts   # Code review tool / 代码审查工具
├── env/
│   ├── keys.example.ts # Example environment configuration / 示例环境配置
│   └── keys.ts         # Your environment configuration (Create this from keys.example.ts) / 您的环境配置 (从此文件创建 keys.example.ts)
└── index.ts            # Main entry point / 主入口点
```

## 🤝 Contributing / 贡献

Contributions welcome! Please feel free to submit a Pull Request.
欢迎贡献！请随时提交拉取请求。

## 📝 License / 许可证

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
本项目根据 MIT 许可证授权 - 有关详细信息，请参阅 [LICENSE](LICENSE) 文件。

## 🐛 Issues & Support / 问题与支持

Found a bug or need help? Open an issue with:
发现错误或需要帮助？请提交一个 issue 并包含以下内容：

1.  What you were trying to do / 您尝试做什么
2.  What happened instead / 实际发生了什么
3.  Steps to reproduce / 重现步骤
4.  Your environment details / 您的环境详细信息

---

I'''ll be honest though, this is a tutorial demo, and not a production-ready tool so I likely won'''t be fixing issues. But feel free to fork it and make it your own!
不过说实话，这只是一个教程演示，并非生产就绪的工具，因此我可能不会修复问题。但欢迎您 fork 并根据自己的需求进行修改！

Made with ❤️ by developers, for developers
由开发者为开发者用心制作 ❤️
