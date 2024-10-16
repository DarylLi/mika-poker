# mika-poker

<p>
<a href="https://github.com/DarylLi/mika-poker">GitHub</a>
<span>｜</span>
<a href="https://darylli.github.io/mika-poker/demo/index.html">demo</a>
<span>｜</span>
<a href="https://github.com/DarylLi/mika-poker/issues">反馈</a>
</p>

基于`WebRTC/FaceApi`的扑克牌抽鬼牌游戏：

1. 支持三人玩家，可支持两名玩家一起游戏，或和两名电脑玩家进行游戏（wip）
2. 利用 faceApi 表情模型。根据真人玩家事实视频图像获取玩家的感情体现。。电脑玩家会根据你的事实表情对抽牌结果作出实时判断(wip)
3. 开箱即玩无需打包，作为组件引入可用 cdn 外链接入
4. 电脑玩家形象为基于 threejs，mmdLoader 渲染的 mmd 模型人物,对当前卡牌结果作出实时表情切换，玩家也可根据相应结果作出卡牌选择。但也可能会被骗哦（wip）
5. 多人视频通讯基于 webRtc 实时通讯，后续会加入聊天功能（wip）
6. 扑克算法后续迁移至 rust 逻辑，并基于 wasm 引入格式进行重新逻辑优化（wip）

## Development

```bash
$ yarn add mika-poker
$ yarn server
```
