# 东部智脑看板 GitHub Pages 发布说明

这是一个纯静态前端工程，可以直接发布到 GitHub Pages。

## 本版本内容

- 数字化星级调度驾驶舱
- 星级目标栏，包含大区合计与 20 个区域公司的当月现状、2026 年目标、2027 年目标、2028 年目标
- 大区整体情况、区域整体情况、项目整体情况、年度任务
- 任务血缘关系索引页面

## 发布方式

1. 登录 GitHub。
2. 新建仓库，例如 `east-brain-dispatch-platform`。
3. 将本工程包解压后的全部文件上传到仓库根目录。
4. 打开仓库 `Settings`。
5. 进入 `Pages`。
6. 在 `Build and deployment` 中选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. 点击 `Save`。

发布后的访问地址通常是：

```text
https://你的GitHub用户名.github.io/east-brain-dispatch-platform/
```

如果仓库名设置为 `你的GitHub用户名.github.io`，则访问地址通常是：

```text
https://你的GitHub用户名.github.io/
```

## 文件说明

- `index.html`：页面入口。
- `styles.css`：页面样式。
- `app.js`：主看板逻辑。
- `star-task-dispatch.html`：任务血缘关系索引页面。
- `intensive-tasks-data.js`、`intensive-review-data.js`：集约化模块数据。
- `.nojekyll`：让 GitHub Pages 按普通静态资源发布。

## 修改后刷新

如果修改后网页仍显示旧内容，请更新 `index.html` 中 `app.js?v=...` 或 `styles.css?v=...` 的版本号，然后重新提交到 GitHub。
