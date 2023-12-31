### 项目名字 GPT_API_aizw

aizw ChatGPT API Key，

#### 支持 **GPT-4** / GPT-3.5-Turbo / GPT-3.5-Turbo-16K / embeddings / DALL·E / whisper / text-davinci

国内动态加速 直连无需代理 ### [QQ群: 640541448]

[项目演示](https://aizw.io/) / 
### 使用教程

登陆后添加gpt4官方APIkey，点击生成私钥即可进行分发授权。
### 后端部署流程
#### docker部署
#### 部署MySQL数据库

##### 拉取mysql-5.7镜像
docker pull mysql:5.7

#### 创建需要挂载的目录（自定义，这里只是举例，不一定要按照例子来）

mkdir -p /docker/mysql/conf
mkdir -p /docker/mysql/data
mkdir -p /docker/mysql/log

#### 启动MySQL容器
docker run -d -p 3306:3306 --privileged=true -v /docker/mysql/conf/my.cnf:/etc/mysql/mysql.conf.d -v /docker/mysql/data:/var/lib/mysql -v /docker/mysql/log:/var/log/ -e MYSQL_ROOT_PASSWORD=123456 --name ai_mysql mysql:5.7

登录MySQL执行 openai.sql 文件的SQL语句


#### 部署java后端项目

#### 拉取服务镜像
docker pull wangsiwei496/aizw-back


#### 启动服务容器
docker run -d -p 8080:8080  --name aizw-back --link ai_mysql:ai_mysql wangsiwei496/aizw-back:latest






## 隐私声明

该项目高度重视隐私，致力于保护其用户的隐私。该项目不会以任何方式收集、记录或存储用户输入的任何文本或由 OpenAI 服务器返回的任何文本。该项目不会向 OpenAI 或任何第三方提供有关 API 调用者的身份的任何信息，包括但不限于 IP 地址和用户代理字符串。

但OpenAI官方会根据其[数据使用政策](https://platform.openai.com/docs/data-usage-policies)保留 30 天的数据。

aizw ChatGPT API Key，封装GPT4API 进行中转分发，免费ChatGPT API，支持GPT4 API（低价），ChatGPT国内可用免费转发API，直连无需代理。可以搭配ChatBox等软件/插件使用，极大降低接口使用成本。国内即可无限制畅快聊天。
