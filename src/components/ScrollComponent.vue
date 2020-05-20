<template>
  <v-container>
    <v-card>
      <v-container>
        <v-row>
          <v-col>
            <v-row>
              <v-col>
                <v-select
                  @change="initialize"
                  :items="modes"
                  v-model="selectedMode"
                  label="Mode"
                  persistent-hint
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-switch v-model="overflowAnchor" label="Scroll Anchor"></v-switch>
              </v-col>
            </v-row>

            <v-row v-if="selectedMode !== 'Single Page'">
              <v-col v-if="selectedMode === 'Static List'">
                <v-text-field v-model="numNodes" type="number" label="List Size" hide-details />
              </v-col>
              <v-col v-if="selectedMode !== 'Single Page'">
                <v-text-field
                  v-model="selectedNode"
                  type="number"
                  label="Selected Node"
                  hide-details
                />
              </v-col>
              <v-col v-if="selectedMode === 'Continuous List'">
                <v-text-field
                  v-model="selectedNodeOffset"
                  type="number"
                  label="Offset"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <v-col>
                <v-switch
                   v-model="ImageConfig.addImages"
                   @change="initialize"
                   label="Insert Images">
                   </v-switch>
                   </v-col>
            </v-row>
            <v-row v-if="ImageConfig.addImages">
              <v-col>
                <v-switch v-model="ImageConfig.insertImageSkeleton"
                   @change="initialize" label="Skeleton">
                </v-switch>
              </v-col>
              <v-col>
                <v-switch
                  v-model="ImageConfig.randomSize"
                  @change="initialize"
                  label="Random Size">
                </v-switch>
              </v-col>
            </v-row>
            <v-row v-if="!ImageConfig.addImages || ImageConfig.insertImageSkeleton">
              <v-col>
                <v-btn
                  @click="addImagesAfter"
                >{{
                  !ImageConfig.insertImageSkeleton ? "Add Images After" : "Set Images Src" }}
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <v-col>
            <v-btn @click="initialize">Reload</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-switch
                  v-model="attachMutationObserver"
                  @change="initialize"
                  label="Mutation Observer">
                </v-switch>
              </v-col>
              <v-col v-if="attachMutationObserver && overflowAnchor">
                <v-switch
                  v-model="filterScrolls"
                  @change="initialize"
                  label="Filter Scrolls">
                </v-switch>
              </v-col>
            </v-row>
              <v-row>
                <v-col>
                  Scroll Count: {{scrollCount}}
                </v-col>
                <v-col v-if="filterScrolls">
                  Filter Count: {{filterCount}}
                </v-col>
            </v-row>

          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-container>
      <div
        ref="scrollArea"
        class="scrollArea"
        id="scrollArea"
        :style="overflowAnchor ? 'overflow-anchor:auto' : 'overflow-anchor:none'"
      ></div>
    </v-card>
  </v-container>
</template>

<script>
import { LoremIpsum } from 'lorem-ipsum';

export default {
  name: 'ScrollComponent',
  data() {
    return {
      overflowAnchor: true,
      modes: ['Single Page', 'Continuous List', 'Static List'],
      selectedMode: 'Single Page',
      selectedNodeOffset: 5,
      ImageConfig: {
        addImages: true,
        insertImageSkeleton: false,
        randomSize: false,
      },
      itemsLoaded: false,
      attachMutationObserver: false,
      filterScrolls: false,
      lastScrollEvent: '',
      imageLoaded: false,
      interval: null,
      rootEl: null,
      messageList: [],
      imageList: [],
      numNodes: 0,
      selectedNode: 0,
      scrollCount: 0,
      filterCount: 0,
    };
  },
  created() {
    console.log(window.location.href);
    const paramList = ['overflowAnchor', 'selectedMode', 'selectedNodeOffset', 'attachMutationObserver', 'filterScrolls', 'numNodes', 'filterCount'];
    const params = new URLSearchParams(window.location.href.substring(window.location.href.indexOf('?'), window.location.href.length));
    for (let i = 0; i < paramList.length; i += 1) {
      const val = params.has(paramList[i]);
      if (val) {
        console.log(`${paramList[i]}:${this[paramList[i]]}`);
        this[paramList[i]] = this.convertBasedonType(params.get(paramList[i]), this[paramList[i]]);
        console.log(`${paramList[i]}:${this[paramList[i]]}`);
      }
    }
  },
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      clearInterval(this.interval);
      this.messageList = [];
      this.imageList = [];
      this.lastScrollEvent = '';
      this.imageLoaded = false;
      this.$refs.scrollArea.innerHTML = '';
      this.$refs.scrollArea.scrollTop = 0;
      this.scrollCount = 0;
      this.filterCount = 0;
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
      if (this.attachMutationObserver) {
        this.mutationObserver();
      }
      if (this.selectedMode === 'Static List' && this.numNodes === 0) {
        this.numNodes = 10;
      }
      if (this.selectedMode === 'Single Page') {
        this.singlePage(this.$refs.scrollArea);
      } else {
        this.multipleElements(this.$refs.scrollArea);
        if (this.selectedNode !== 0) {
          // this.selectNode(this.selectedNode);
        }
      }
      this.itemsLoaded = true;
    },
    convertBasedonType(item, source) {
      if (typeof (source) === 'boolean') {
        if (item.toLowerCase() !== 'false') {
          return true;
        }
        return false;
      }
      if (typeof (source) === 'number') {
        return Number(item);
      }
      return null;
    },
    getParams(url) {
      const params = {};
      const parser = document.createElement('a');
      parser.href = url;
      const query = parser.search.substring(1);
      const vars = query.split('&');
      for (let i = 0; i < vars.length; i += 1) {
        const pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
      }
      return params;
    },
    singlePage(ref) {
      // Add in a large image
      const centerDiv = document.createElement('div');
      centerDiv.className = 'centerDiv';
      if (this.ImageConfig.addImages) {
        const img = document.createElement('img');
        const imgsize = Math.floor(600 + Math.random() * 300);
        img.onload = () => {
          this.imageLoaded = true;
        };
        this.imageList.push(img);
        if (!this.ImageConfig.insertImageSkeleton) {
          img.src = `https://picsum.photos/${imgsize}`;
        } else {
          img.src = '';
        }
        centerDiv.appendChild(img);

        ref.appendChild(centerDiv);
      }
      // Now lets add some random text
      const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4,
        },
        wordsPerSentence: {
          max: 16,
          min: 4,
        },
      });

      const div = document.createElement('div');
      div.innerText = lorem.generateParagraphs(25);
      ref.appendChild(div);
    },
    multipleElements(ref) {
      // Continually add in multiple elements
      const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4,
        },
        wordsPerSentence: {
          max: 16,
          min: 4,
        },
      });

      let numNodes = 10;
      if (this.selectedMode === 'Static List') {
        numNodes = this.numNodes;
      }
      for (let i = 0; i < numNodes; i += 1) {
        const message = this.addMessage(ref, lorem);
        message.setAttribute('data-index', i);
        this.messageList.push(message);
        if (this.selectedNode !== 0 && i === Number(this.selectedNode) + 10) {
          this.selectNode(this.selectedNode);
        }
      }
      if (this.selectedMode === 'Continuous List') {
        this.interval = setInterval(() => {
          if (this.messageList.length >= 50) {
            clearInterval(this.interval);
            return;
          }
          const message = this.addMessage(ref, lorem);
          message.setAttribute('data-index', this.messageList.length - 1);
          this.messageList.push(message);
          const i = this.messageList.length - 1;
          if (
            this.selectedNode !== 0
            && i === Number(this.selectedNode) + Number(this.selectedNodeOffset)
          ) {
            this.selectNode(this.selectedNode);
          }
        }, 1000);
      }
    },
    addMessage(ref, lorem) {
      const div = document.createElement('div');
      div.innerText = lorem.generateParagraphs(1);
      div.className = 'message';
      div.addEventListener('click', () => {
        if (div.className.indexOf('selected') !== -1) {
          div.className.replace('selected', '');
        }
        div.className += ' selected';
      });
      if (this.ImageConfig.addImages) {
        let size = 100;
        if (this.ImageConfig.randomSize) {
          size = Math.floor(25 + Math.random() * 75);
        }
        this.imageList.push(this.addImage(div, size));
      }
      ref.prepend(div);
      return div;
    },
    addImage(ref, size) {
      const img = document.createElement('img');
      img.onload = () => {
        this.imageLoaded = true;
      };
      if (!this.ImageConfig.insertImageSkeleton) {
        img.src = `https://picsum.photos/${size}?random=${this.imageList.length}`;
      } else {
        img.src = '';
      }
      ref.prepend(img);
      return img;
    },
    addImagesAfter() {
      if (this.selectedMode === 'Single Page') {
        if (!this.ImageConfig.insertImageSkeleton) {
          this.imageList.push(this.addImage(this.$refs.scrollArea, 700));
        } else {
          this.imageList[0].src = 'https://picsum.photos/700?random=1';
        }
      } else {
        if (this.selectedMode === 'Continuous List') {
          clearInterval(this.interval);
        }
        if (!this.ImageConfig.insertImageSkeleton) {
          for (let i = 0; i < this.messageList.length; i += 1) {
            let size = 100;
            if (this.ImageConfig.randomSize) {
              size = Math.floor(25 + Math.random() * 75);
            }
            this.imageList.push(this.addImage(this.messageList[i], size));
          }
        } else {
          for (let i = 0; i < this.imageList.length; i += 1) {
            let size = 100;
            if (this.ImageConfig.randomSize) {
              size = Math.floor(25 + Math.random() * 75);
            }
            this.imageList[i].src = `https://picsum.photos/${size}?random=${i}`;
          }
        }
      }
    },
    selectNode(num) {
      if (num < this.messageList.length) {
        const top = this.messageList[num].offsetTop;
        const newTop = top - this.$refs.scrollArea.offsetHeight;
        if (top !== newTop) {
          this.$refs.scrollArea.scrollTop = newTop;
          this.scrollCount += 1;
        }
        if (this.messageList[num].className.indexOf('selected') === -1) {
          this.messageList[num].className += ' selected';
        }
      }
    },
    mutationObserver() {
      const { offsetTop } = this.$refs.scrollArea;
      const self = this;
      function onLoadImage() {
        if (self.selectedNode !== 0) {
          if (!self.filterScrolls) {
            self.selectNode(self.selectedNode);
          } else if (self.$refs.scrollArea.scrollTop < this.offsetTop
          && this.offsetTop
           < self.$refs.scrollArea.scrollTop + self.$refs.scrollArea.offsetHeight) {
            console.log(`offsetTop: ${offsetTop} scollTop:${self.$refs.scrollArea.scrollTop} clientHeight: ${self.$refs.scrollArea.offsetHeight} imgEl: ${this.offsetTop}`);
            self.selectNode(self.selectedNode);
            self.filterCount += 1;
          }
        }
      }
      this.observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutations.addedNodes) {
            return;
          }
          mutation.addedNodes.forEach((node) => {
            const imgs = node.getElementsByTagName('img');
            imgs.forEach((image) => {
              // eslint-disable-next-line no-param-reassign
              image.onload = onLoadImage;
            });
          });
        });
      });

      this.observer.observe(this.$refs.scrollArea, { childList: true, subtree: true });
    },
  },
};
</script>

<style>
.scrollArea {
  max-height: 600px;
  overflow-y: auto;
}
.centerDiv {
  width: 100%;
  left: 50%;
  margin: auto;
}
.message {
  padding: 0.5em;
  border-radius: 1em;
  margin: 0.5em;
  line-height: 1.1em;
  background-color: lightblue;
}
.message:hover {
  background-color: aquamarine;
}
.message.selected {
  background-color: aqua;
}
</style>
