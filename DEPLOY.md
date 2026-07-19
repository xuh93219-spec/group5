# 部署说明（GitHub Pages）

本仓库托管「高光圆桌会」H5 互动页面，使用 GitHub Pages 实现「推送即更新」，链接固定不变。

## 首次上线

1. 在 GitHub 新建一个 **空的 public 仓库**（不要勾选 README / .gitignore / License，保持完全空）。
2. 本地添加远程地址（将下方 URL 替换为你的仓库地址）：
   ```bash
   git remote add origin https://github.com/xuh93219/<仓库名>.git
   ```
3. 推送主分支：
   ```bash
   git push -u origin main
   ```
4. 在仓库 **Settings → Pages** 中，Source 选择 `Deploy from a branch`，Branch 选 `main`、目录选 `/(root)`，保存。
5. 等待数分钟后，访问 `https://xuh93219.github.io/<仓库名>/` 即可。

## 后续更新

修改 `index.html` / `css/` / `js/` 后，提交并推送：

```bash
git add -A
git commit -m "更新说明"
git push
```

GitHub Pages 会自动从 `main` 分支重新构建，页面与链接固定不变，无需重新部署或重新上传。

## 注意事项

- 仓库为 **public**，源码（含成员数据、文案）对所有人可见。
- 页面中 Chart.js 通过公网 CDN（jsdelivr）加载，国内访问可能偏慢；如需离线自包含，请将 Chart.js 下载至本地 `js/` 并修改引用（见方案 C）。
- 飞书云空间里的 `高光圆桌会H5.zip` 为独立快照，源码更新后需重新打包上传才会同步。
