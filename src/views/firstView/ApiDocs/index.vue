<template>
  <div class="doc-box">
    <h3>我们的愿景</h3>
    <section>我们的目标是让开发者能够便捷地基于全球优质AI模型能力，构建专业且专注于特定场景的业务应用。同时，我们也希望所有用户都能够高速、稳定且安全地使用AI服务。</section>
    <h3>快速开始</h3>
    <section>使用AI ZW的模型API网关，与使用模型官方接口没有任何区别。这是为了兼容围绕模型构建的周边应用。平台目前已经接入了OpenAI大部分接口，接下来的示范以OpenAI为例。</section>
    <section>在API市场完成兑换后，进入API Key管理 页面，获取您使用模型接口的访问密钥。</section>
    <section>复制好您的密钥串后，还需要在访问时将OpenAI官方接口的域名地址替换为本平台提供的网关地址，如果不替换为AI zw网关地址，直接用密钥串访问OpenAI，是无法识别的。</section>
    <h4>OpenAI 官方访问地址</h4>
    <section><a class="doc-a" href="https://api.openai.com" target="_blank">https://api.openai.com</a></section>
    <h4>AI zw 访问地址</h4>
    <section><a class="doc-a" href="https://api.aizw.io" target="_blank">https://api.aizw.io</a></section>
    <h4>如果您已经理解了上述概念，其实就可以通过OpenAI官方模型接口文档文档，来上手进行测试了，访问时只需要将OpenAI官方访问地址替换为AI zw访问地址。</h4>
    <section><a class="doc-a" href="https://platform.openai.com/docs/api-reference/introduction" target="_blank">OpenAI官方接口文档</a></section>
    <h3>AIZW为开发者提供参数兼容的、一站式全球精选 API。目前支持：</h3>
    <section class="e-item"><span class="e-dot"></span>OpenAI 聊天接口( <span class="e-link">/v1/chat/completions</span> )</section>
    <section class="e-item"><span class="e-dot"></span>OpenAI 内容补全接口( <span class="e-link">/v1/completionss</span> )</section>
    <section class="e-item"><span class="e-dot"></span>OpenAI 文本编辑接口( <span class="e-link">/v1/edits</span> )</section>
    <section class="e-item"><span class="e-dot"></span>OpenAI 向量生成接口( <span class="e-link">/v1/embeddings</span> )</section>
    <section class="e-item"><span class="e-dot"></span>OpenAI 图片生成接口( <span class="e-link">/v1/images/generations</span> )</section>
    <section class="e-item"><span class="e-dot"></span>向量数据库接口( 内测中，支持向量写入和基于向量搜索，可以用来构建知识库 )</section>
    <section class="e-item"><span class="e-dot"></span>2023.06.14：已经和 OpenAI 同步模型。支持 gpt-4-0613，gpt-3.5-turbo-0613，gpt-3.5-turbo-16k，gpt-3.5-turbo-16k-0613</section>
    <h3>出租API</h3>
    <section>商家登录后可以直接在API出租页面绑定自己的key进行分发出租。价格自定义。</section>
    <h3>关于定价</h3>
    <section>定价和官方同步，按美元结算。10分钟内消耗少于0.01美元的按0.01美元计算。</section>
  </div>
</template>
<script>
export default {
  name: 'ApiDocs',
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.doc-box {
  width: 1200px;
  margin: 0 auto;
  color: #fff;
  overflow: auto;
}
section {
  text-indent: 28px;
  font-size: 14px;
}
.doc-a {
  color: #3B87FF;
}
.e-item {
  vertical-align: middle;
}
.e-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 8px;
}
.e-link {
  color: #E6A23C;
}
</style>
