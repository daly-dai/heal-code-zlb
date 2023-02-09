import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  scripts: [
    {
      src: '//assets.zjzwfw.gov.cn/assets/ZWJSBridge/1.1.0/zwjsbridge.js'
    },
    {
      src: '//assets.zjzwfw.gov.cn/assets/zwlog/1.0.0/zwlog.js'
    },
    {
      src: 'https://gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.1/alipayjsapi.inc.min.js'
    }
  ],
  outputPath: 'build',
  title: '杭州健康码'
});
