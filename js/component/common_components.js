Vue.component('function-form', {
    props: {
        jsonData: {
            type: Object,
            required: true
        },
        fenleiChildren: {
            type: Array,
            required: true
        },
        fenleiKey: {
            type: String,
            default: ''
        },
        fenleiIndex: {
            type: Number,
            required: true
        },
        sectionsChildren: {
            type: Array,
            required: true
        }
    },
    data: function () {
        return {
            split3: 0.2,
            split4: 0.8,
            summary: '',
            iframeSrc: '',
        }
    },
    methods: {
        showSummary: function (summary) {
            this.summary = summary;
        },
        showContent: function (url) {
            let path = 'pages/excel/' + url;
            this.iframeSrc = path;
        }
    },
    template: `
    <div class="my-split">
    <Split v-model="split3" min="150px">
      <!--左侧-->
      <div slot="left" class="my-split-pane no-padding">
        <Split v-model="split4" mode="vertical">

          <!--左侧上面板-->
          <div slot="top" class="my-split-pane_top">
            <div style="padding-bottom: 3px" v-if="sectionsChildren.length>0">
              共计搜索到{{sectionsChildren.length}}个函数：
            </div>
            <ul class="live" v-if="sectionsChildren.length>0">
              <li v-for="(childrenItem,index_item) in sectionsChildren">
                <a
                  @mouseenter="showSummary(childrenItem.summary)"
                  @click="showContent(childrenItem.href)"
                  href="#">
                  {{childrenItem.name}}
                </a>
              </li>
            </ul>

            <ul class="live" v-else>
              <li v-for="(childrenItem,index_item) in fenleiChildren">
                <a
                  @mouseenter="showSummary(jsonData.topics[childrenItem].summary)"
                  @click="showContent(jsonData.topics[childrenItem].href)"
                  href="#">
                  {{jsonData.topics[childrenItem].name}}
                </a>
              </li>
            </ul>
          </div>

          <!--左侧下面板-->
          <div slot="bottom" class="my-split-pane_bottom">
            {{summary}}
          </div>
        </Split>
      </div>

      <!--右侧面板-->
      <div slot="right" class="my-split-pane_right">
        <div style="padding: 30px;overflow: auto">
          <iframe :src="iframeSrc" width="100%" height="500px" frameborder=no border=0 marginwidth=0
                  marginheight=0></iframe>
        </div>
      </div>

    </Split>
  </div>
     `
});

Vue.component('test',{
    template: `
    <h1>dsjdhjshdjsd</h1>
    `
});