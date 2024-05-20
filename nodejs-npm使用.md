# nodejs npm 使用

升级 nodejs

```bash
sudo npm i n -g
sudo n stable 
```

```bash
sudo n list
find: ‘/usr/local/n/versions’: no such file or directory
```

出现错误不要紧，先执行 sudo n stable 下载一个node就好了
如果还不行，就设置

```bash
npm config set prefix /usr/local -g
```

升级 npm

```bash
sudo npm install -g npm@latest
```

查看全局软件包安装在什么地方:

```bash
npm root -g
```

@前缀表示组织里的包，不是registry全局的

```bash
npm i @namesapce/package_name
```

代码里面的

```javascript
require(@abc)

import(@abc)
```

里面的 @ 是一个别名，可以在项目配置里找到解析成什么，例如

```webpack
 @: "src"
```

查看 node npm 配置：

```bash
npm config ls
npm config ls -l

npm config get prefix -g
npm prefix -g
```

设置

```bash
npm config set prefix /usr/local -g
```

prefix

```bash
npm prefix -g
```

默认的 prefix 是 npm 的全路径去除最后的 /bin/
例如：/usr/local/bin/npm，那么默认的prefix -g就是 /usr/local

npm 配置文件的位置：

- Per-project config file: /path/to/my/project/.npmrc
- Per-user config file: ~/.npmrc
- Global config file: $prefix/etc/npmrc
- Build-in config file: /path/to/npm/npmrc
