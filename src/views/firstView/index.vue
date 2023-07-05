<template>
  <div class="container">
    <!-- PC端 -->
    <div v-if="!isPhone" class="pc-container">
      <header class="b-header">
        <div class="tabs-bar">
          <div v-for="(item, index) in dataList" :key="index" :class="['tabs-item', currentIndex === item.type ? 'active-tab' : '']"
            @click="ChangeAtTabs(item.type)"
          >
            <span class="item-text">{{item.name}}</span>
          </div>
          <div class="tabs-item_line" :style="leftStyle"></div>
        </div>
        <div class="login-box">
          <span v-if="!token" class="login-item" @click="handleLogin">登录</span>
          <span v-else class="login-item" @click="handleLogOut">退出</span>
          <el-divider direction="vertical"></el-divider>
          <span class="login-item" @click="handleRegist">注册</span>
        </div>
      </header>
      <section class="b-main" v-if="currentIndex === '1'">
        <div class="main-left">
          <div class="left-title">大语言模型应用平台</div>
          <div class="left-center1">
            <div class="center-text">AI</div>
            <div class="center-text">ZW</div>
          </div>
          <div class="left-center2">在全球高速、稳定，安全的使用AI服务，构建AI应用。</div>
          <div class="left-center3">现已支持</div>
          <img class="icon-box" src="../../assets/img/logo.png" alt="">
        </div>
        <div class="main-right">
          <div class="right-top">
            <div class="right-top1">
              <div class="top1-text">AI</div>
              <div class="top1-text">ZW</div>
            </div>
            <div class="right-top2">为什么选择</div>
            <div class="right-top3">
              <div class="top3-text">AI</div>
              <div class="top3-text">ZW?</div>
            </div>
          </div>
          <div class="right-bottom">
            <div class="box-item">
              <img class="item-icon" src="../../assets/img/service.png" alt="">
              <div class="item-name">服务可靠</div>
              <div class="item-detail">本平台对接OPenAI的付费账号采用 新加坡合法付款通道支付，均为有 GPT4权限，消费额度不封顶的账 号，保证不风控，稳定可用。</div>
            </div>
            <div class="box-item">
              <img class="item-icon" src="../../assets/img/billing.png" alt="">
              <div class="item-name">多账户精准计费</div>
              <div class="item-detail">采用分布式集群，支持高并发 助力企业成长。</div>
            </div>
            <div class="box-item">
              <img class="item-icon" src="../../assets/img/lock.png" alt="">
              <div class="item-name">稳定安全</div>
              <div class="item-detail">使用阿里云机房分布式部署API保证高可用 使用AuthingIDaaS保障用户信息安全。 账户余额等数据每日5份全球备份，确保 故障无数据丢失。您的请求数据仅用于计 费统计，无任何备份。</div>
            </div>
          </div>
        </div>
      </section>
      <section class="b-main2" v-if="currentIndex === '2'">
        <ApiDocs />
      </section>
      <section class="b-main4" v-if="currentIndex === '4' && token">
        <RentApi v-if="!detailId" @change="handleChange" />
        <PrivateKey v-else :merchantKeyId="detailId" @change="handleChange" />
      </section>
      <section class="b-main4" v-if="currentIndex === '5'">
        <LimitSearch />
      </section>
    </div>
    <!-- 移动端 -->
    <div class="phone-container" v-else>
      <header class="phone-header">
        <div class="phone-tabs-bar">
          <div v-for="(item, index) in dataList" :key="index" :class="['phone-tabs-item', currentIndex === item.type ? 'phone-active-tab' : '']"
            @click="ChangeAtTabs(item.type)"
          >
            <img class="phone-tab-icon" :src="currentIndex === item.type ? item.activeImg : item.img" alt="">
            <div class="phone-item-text">{{item.name}}</div>
          </div>
        </div>
      </header>
      <div class="phone-main">
        <div class="phone-left-title">大语言模型应用平台</div>
        <div class="phone-left-center1">
          <div class="phone-center-text">AI</div>
          <div class="phone-center-text">ZW</div>
        </div>
        <div class="phone-left-center2">在全球高速、稳定，安全的使用AI服务，构建AI应用。</div>
        <div class="phone-left-center3">现已支持</div>
        <img class="phone-icon-box" src="../../assets/img/logo.png" alt="">
        
        <div class="phone-right-top1">
          <div class="phone-top1-text">AI</div>
          <div class="phone-top1-text">ZW</div>
        </div>
        <div class="phone-right-top2">为什么选择</div>
        <div class="phone-right-top3">
          <div class="phone-top3-text">AI</div>
          <div class="phone-top3-text">ZW?</div>
        </div>
        <div class="phone-right-bottom">
          <div class="phone-box-item">
            <div class="phone-item-top">
              <img class="phone-item-icon" src="../../assets/img/service.png" alt="">
              <div class="phone-item-name">服务可靠</div>
            </div>
            <div class="phone-item-detail">本平台对接OPenAI的付费账号采用 新加坡合法付款通道支付，均为有 GPT4权限，消费额度不封顶的账 号，保证不风控，稳定可用。</div>
          </div>
          <div class="phone-box-item">
            <div class="phone-item-top">
              <img class="phone-item-icon" src="../../assets/img/billing.png" alt="">
              <div class="phone-item-name">多账户精准计费</div>
            </div>
            <div class="phone-item-detail">采用分布式集群，支持高并发 助力企业成长。</div>
          </div>
          <div class="phone-box-item">
            <div class="phone-item-top">
              <img class="phone-item-icon" src="../../assets/img/lock.png" alt="">
              <div class="phone-item-name">稳定安全</div>
            </div>
            <div class="phone-item-detail">使用阿里云机房分布式部署API保证高可用 使用AuthingIDaaS保障用户信息安全。 账户余额等数据每日5份全球备份，确保 故障无数据丢失。您的请求数据仅用于计 费统计，无任何备份。</div>
          </div>
        </div>
      </div>
    </div>

    <Login ref="loginForm" />
    <Register ref="registerForm" />
  </div>
</template>

<script>
import RentApi from './RentApi/index.vue'
import ApiDocs from './ApiDocs/index.vue'
import LimitSearch from './LimitSearch/index.vue'
import PrivateKey from './RentApi/PrivateKey.vue'
import Login from './Login.vue'
import Register from './Register.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'FirstView',
  components: {
    RentApi,
    ApiDocs,
    LimitSearch,
    PrivateKey,
    Login,
    Register
  },
  data() {
    return {
      dataList: [
        { name: "首页", type: "1", img: require('../../assets/phoneImg/tab1.png'), activeImg: require('../../assets/phoneImg/tab11.png') },
        { name: "文档", type: "2", img: require('../../assets/phoneImg/tab2.png'), activeImg: require('../../assets/phoneImg/tab22.png') },
        { name: "API市场", type: "3", img: require('../../assets/phoneImg/tab3.png'), activeImg: require('../../assets/phoneImg/tab33.png') },
        { name: "出租API", type: "4", img: require('../../assets/phoneImg/tab4.png'), activeImg: require('../../assets/phoneImg/tab44.png') },
        { name: "额度查询", type: "5", img: require('../../assets/phoneImg/tab5.png'), activeImg: require('../../assets/phoneImg/tab55.png') }
        // { name: "控制台", type: "5", img: require('../../assets/phoneImg/tab5.png'), activeImg: require('../../assets/phoneImg/tab55.png') }
      ],
      currentIndex: "1",
      leftStyle: {},
      isPhone: false,
      detailId: null
    }
  },
  computed: {
    ...mapGetters(['token'])
  },
  created() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.isPhone = true
    } else {
      this.isPhone = false
    }
    console.log('isPhone', this.isPhone)
  },
  mounted() {
    this.changeline()
  },
  methods: {
    ...mapActions(['Logout']),
    //获取下划线距离左边的长度
    changeline() {
      this.dataList.forEach((item, index) => {
        if (item.type === this.currentIndex) {
          let target = null
          if (!this.isPhone) {
            target = document.getElementsByClassName('item-text')[index]
          } else {
            target = document.getElementsByClassName('phone-item-text')[index]
          }
          const left = target.getBoundingClientRect().left + 'px'
          const width = target.getBoundingClientRect().width + 'px'
          this.leftStyle = { left, width }
        }
      });
    },
    handleChange(id) {
      this.detailId = id
    },
    //tabs切换
    ChangeAtTabs(type) {
      this.currentIndex = type
      this.changeline()
      this.detailId = null
      if (type === '4' && !this.token) {
        setTimeout(() => {
          this.$router.push('/login')
        }, 500);
      }
      if (type === '6') {
        this.$router.push('/login')
      }
    },
    // 点击登录
    handleLogin() {
      this.$router.push('/login')
    },
    // 点击注册
    handleRegist() {
      this.$router.push('/Register')
    },
    // 点击退出
    handleLogOut() {
      this.Logout().then(() => {
        this.$message.success('退出成功');
        this.currentIndex = '1'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #1E242E;
}
.pc-container {
  width: 100%;
  height: 100%;
}
.b-header {
  width: 100%;
  position: relative;
}
.login-box {
  position: absolute;
  right: 80px;
  top: 40px;
  width: 100px;
  text-align: right;
}
.login-item {
  color: #fff;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
.tabs-bar {
  display: flex;
  width: 100%;
  padding-left: 35%;
  padding-right: 25%;
  position: relative;
}
.tabs-item {
  width: 20%;
  text-align: center;
  color: #646566;
  font-size: 16px;
  color: #fff;
  padding-top: 40px;
}
.active-tab {
  color: #3B87FF;
  font-weight: bold;
}
.tabs-item_line {
  position: absolute;
  bottom: -6px;
  z-index: 1;
  height: 4px;
  background-color: #3B87FF;
  transition: all 0.3s linear;
  border-radius: 2px;
}
.b-main {
  display: flex;
  align-items: center;
  padding: 120px 80px 0;
}
.b-main2 {
  padding-top: 30px;
}
.b-main4 {
  padding: 120px 40px 0;
}
.main-left {
  align-self: stretch;
  width: 396px;
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left-title {
  height: 110px;
  font-size: 40px;
  color: #FFFFFF;
  line-height: 110px;
}
.left-center1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.center-text {
  width: 130px;
  height: 100px;
  font-size: 70px;
  font-weight: 600;
  line-height: 100px;
  letter-spacing: 6px;
  background: linear-gradient(90deg, #F5A70A 0%, #2A68C7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.left-center2 {
  height: 20px;
  font-size: 14px;
  color: #FFFFFF;
  line-height: 20px;
  margin-top: 30px;
  margin-bottom: 70px;
}
.left-center3 {
  height: 20px;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 20px;
  margin-bottom: 30px;
}
.icon-box {
  width: 53px;
  height: 53px;
}
.main-right {
  margin-left: 50px;
}
.right-bottom {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
}
.right-top1 {
  height: 20px;
  font-size: 12px;
  color: #D9D9D9;
  line-height: 20px;
}
.right-top2, .top3-text {
  height: 60px;
  font-size: 40px;
  color: #FFFFFF;
  line-height: 60px;
}
.right-top1, .right-top3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-top1 {
  width: 38px;
}
.right-top3 {
  width: 160px;
}
.box-item {
  width: 30%;
  align-self: stretch;
  padding: 20px 35px 50px 35px;
  background: #161C24;
  box-shadow: inset -5px 0px 30px 10px rgba(0,0,0,0.05);
  border-radius: 20px 20px 20px 20px;
  box-sizing: border-box;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
}
.item-name {
  height: 40px;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 40px;
  margin-bottom: 30px;
}
.item-detail {
  font-size: 14px;
  color: #FFFFFF;
  line-height: 20px;
  text-align: center;
}


.phone-container {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.phone-header {
  position: fixed;
  top: 0;
  left: 0;;
  width: 100%;
  height: 0.93rem;
  background: #2C3646;
}
.phone-tabs-bar {
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.phone-tabs-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.14rem;
  color: rgba(255,255,255,0.7);
}
.phone-tab-icon {
  width: 0.28rem;
  height: 0.28rem;
  margin-bottom: 0.10rem;
}
.phone-active-tab {
  color: #3B87FF;
  font-weight: bold;
}
.phone-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.93rem 0.20rem 0;
}
.phone-left-title {
  height: 0.80rem;
  font-size: 0.24rem;
  color: #FFFFFF;
  line-height: 0.80rem;
}
.phone-left-center1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.phone-center-text {
  width: 0.90rem;
  height: 0.50rem;
  font-size: 0.50rem;
  line-height: 0.50rem;
  background: linear-gradient(90deg, #F5A70A 0%, #2A68C7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.20rem;
}
.phone-left-center2 {
  height: 0.20rem;
  font-size: 0.13rem;
  color: #FFFFFF;
  line-height: 0.20rem;
}
.phone-left-center3 {
  height: 0.20rem;
  font-size: 0.16rem;
  color: #FFFFFF;
  line-height: 0.20rem;
  margin: 0.20rem 0;
}
.phone-icon-box {
  width: 0.53rem;
  height: 0.53rem;
  margin-bottom: 0.50rem;
}
.phone-right-top1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0.20rem;
  font-size: 0.12rem;
  color: #D9D9D9;
  line-height: 0.20rem;
}
.phone-right-top2 {
  height: 0.30rem;
  font-size: 0.24rem;
  color: #FFFFFF;
  line-height: 0.30rem;
  margin-top: 0.10rem;
  margin-bottom: 0.05rem;
}
.phone-right-top3 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.20rem;
}
.phone-top1-text {
  width: 0.20rem;
  height: 0.20rem;
  font-size: 0.12rem;
  color: #D9D9D9;
  line-height: 0.20rem;
}
.phone-top3-text {
  width: 0.35rem;
  height: 0.30rem;
  font-size: 0.24rem;
  color: #FFFFFF;
  line-height: 0.30rem;
}
.phone-right-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.phone-box-item {
  height: 1.80rem;
  align-self: stretch;
  padding: 0.20rem 0.15rem;
  background: #161C24;
  box-shadow: inset -0.05rem 0rem 0.30rem 0.10rem rgba(0,0,0,0.05);
  border-radius: 0.20rem 0.20rem 0.20rem 0.20rem;
  margin-bottom: 0.15rem;
  .phone-item-top {
    display: flex;
    margin-bottom: 0.10rem;
    .phone-item-icon {
      width: 0.37rem;
      height: 0.37rem;
    }
    .phone-item-name {
      height: 0.40rem;
      font-size: 0.16rem;
      color: #FFFFFF;
      line-height: 0.40rem;
      margin-left: 0.20rem;
    }
  }
  .phone-item-detail {
    font-size: 0.14rem;
    color: #FFFFFF;
    line-height: 0.20rem;
  }
}
</style>
