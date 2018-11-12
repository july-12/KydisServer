## 技术栈

  express + PostgreSQL + sequelize

## 安装


    1. git clone git@git.uyunsoft.cn:tanyb/kydisServer.git

    2. npm install

    3. 设置环境变量 cp example.env .env

    4. 初始化数据库


        *  sequelize db:create --env production

        *  sequelize db:migrate --env production
