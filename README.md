# 🃏 Mika Poker - 抽鬼牌游戏

一个基于 React + TypeScript + MobX 开发的现代化抽鬼牌游戏。

## ✨ 项目特色

### 🎮 游戏功能
- **经典抽鬼牌玩法**：支持多人游戏，自动配对相同牌面
- **智能AI对手**：电脑玩家具有随机抽牌策略和倒计时机制
- **实时游戏状态**：回合制游戏，支持自动跳过已结束玩家
- **精美UI设计**：使用自定义字体和动画效果

### 🛠 技术架构
- **前端框架**：React 18 + TypeScript
- **状态管理**：MobX 响应式状态管理
- **构建工具**：Rspack 现代化打包工具
- **样式处理**：SCSS + 自定义字体
- **Web Worker**：异步洗牌算法优化性能

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0.0
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```
访问 http://localhost:9000

### 生产构建
```bash
npm run build
```

### 启动服务器
```bash
npm run server
```
访问 http://localhost:8100

## 🎯 游戏规则

1. **游戏开始**：系统自动分发53张牌（去除一张鬼牌）
2. **回合制**：玩家按顺序抽取下一位玩家的牌
3. **配对机制**：抽到相同面值的牌会自动配对并移除
4. **胜利条件**：最后持有鬼牌的玩家失败
5. **AI对手**：电脑玩家具有随机抽牌策略和倒计时

## 📁 项目结构

```
poker-editor/
├── src/
│   ├── components/          # React 组件
│   │   └── pokerPanel/      # 游戏面板组件
│   ├── store/               # MobX 状态管理
│   ├── types/               # TypeScript 类型定义
│   ├── utils/               # 工具函数
│   ├── constants/           # 常量配置
│   └── assets/              # 静态资源
├── public/                  # 公共资源
│   └── assets/              # 游戏素材
├── server/                  # 服务器配置
└── demo/                    # 演示文件
```

## 📝 开发说明

### 代码规范
- TypeScript 严格模式
- ESLint 代码检查
- 组件化开发
- 响应式设计

### 构建配置
- Rspack 现代化打包
- SCSS 样式处理
- 资源优化
- 代码分割


## 📄 许可证

MIT License

## 👨‍💻 作者

**daryl** - 项目开发者

---

