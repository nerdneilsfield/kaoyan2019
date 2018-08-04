<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <!-- <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5"> -->
        <p class="text-md-center count-title font-kai">距离 2019 年研究生入学考试还有:</p>
        <p class="text-md-center count font-kai"> <b><u>{{restDays.days}}</u></b> 天 <b><u>{{restDays.hours}}</u></b> 小时 <b><u>{{restDays.mins}}</u></b> 分钟 <b><u>{{restDays.secs}}</u></b> 秒。</p>
        <blockquote class="font-fang-song blockquote">
              <p>&#8220;{{blockquote.quote}}&#8221;</p>
          <footer>
            <small>
              <em>&mdash;{{blockquote.author}}</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: "CountDown",
  props: {
    msg: String
  },
  data() {
    return {
      dateNow: new Date(),
      countDown: 199,
      quotes: [
        {
          quote: "韶华不为少年留，恨悠悠，几时休。",
          author: "『江城子·西城杨柳弄春柔』"
        },
        { quote: "青春岂不惜，行乐非所欲。", author: "文天祥" },
        {
          quote: "请别错怪那韶光改人容颜，我们自己才是那个化装师。",
          author: "席慕蓉"
        },
        { quote: "所有的时间都用来彷徨，只有一瞬间用来成长。", author: "温瑶" },
        { quote: "像每一滴酒回不了最初的葡萄，我回不了年少。", author: "简媜" },
        { quote: "没有轻蔑克服不了的命运。", author: "加缪" },
        {
          quote:
            "嗟乎！草木无情，有时飘零。人为动物，惟物之灵；百忧感其心，万事劳其形；有动于中，必摇其精。而况思其力之所不及，忧其智之所不能；宜其渥然丹者为槁木，黟然黑者为星星。奈何以非金石之质，欲与草木而争荣？念谁为之戕贼，亦何恨乎秋声！",
          author: "『秋声赋』"
        },
        { quote: "人生如逆旅，我亦是行人。", author: "『临江仙 送钱穆父』" }
      ]
    };
  },
  computed: {
    restDays: function() {
      var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      // var firstDate = new Date();
      // var secondDate = new Date(2018,12,22);
      // let now = new Date();
      let kaoyan = new Date(Date.UTC(2018, 11, 22, 1, 0, 0));
      let differ = kaoyan - this.dateNow;
      let diffDays = Math.floor(Math.abs(differ / oneDay));
      differ = differ - oneDay * diffDays;
      let diffHours = Math.floor(Math.abs(differ / (3600 * 1000)));
      differ = differ - 3600 * 1000 * diffHours;
      let diffMins = Math.floor(Math.abs(differ / (60 * 1000)));
      differ = differ - 60 * 1000 * diffMins;
      let diffSecs = Math.ceil(Math.abs(differ / 1000));
      let result = {
        days: diffDays,
        hours: diffHours,
        mins: diffMins,
        secs: diffSecs
      };
      return result;
    },
    blockquote: function() {
      return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    }
  },
  methods: {
    setTime: function() {
      let that = this;
      this.dateNow = new Date();
      setInterval(that.setTime, 1000);
    }
  },
  mounted: function() {
    this.setTime();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.count-title {
  font-size: 2rem;
  margin-top: 8rem;
}
.count {
  font-size: 5rem;
  margin: 2rem auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.blockquote {
  font-style: 0.5rem;
}
</style>
