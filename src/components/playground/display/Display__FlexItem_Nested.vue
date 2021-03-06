<template>
  <div class="flex-item--nested--outer flexbox">
    <div 
      @click="activate_ColorPicker"
      :class="[nestedFlexDirection, { 'nested-margin': nestedFlexMargin }]"
      tabindex="-1"
      class="flex-item--nested--inner flex-1 flexbox">
      <div 
        v-for="(nestedFlexItem, nestedIndex) in nestedFlexGroup"
        :key="nestedIndex"

        :style="[
          { 'flex': nestedFlexItem.flex, 'background-color': nestedFlexItem.customColor }
        ]"
        :class="
        isNestedFlexDirectionRow ? 
          flexdirRow_Rowrev ? 
            {'nested-flex-item--border-row': nestedIndex < nestedFlexGroup.length - 1} : {'nested-flex-item--border-rowrev': nestedIndex < nestedFlexGroup.length - 1}
          :
          flexdirCol_Colrev ?
            {'nested-flex-item--border-col': nestedIndex < nestedFlexGroup.length - 1} :
            {'nested-flex-item--border-colrev': nestedIndex < nestedFlexGroup.length - 1}"

        class="nested--flex-item flexbox-space-center">

        <input 
          @change="setNestedFlexColor($event, nestedIndex)"
          :class="{ 'active': colorPickerActive }"
          class="click-color-picker--nested"
          type="color"
        >
        
        <span 
          v-if="!nestedFlexItem.highlightActive"
          class="nested--flex-item--text"
          >Flex {{ nestedFlexItem.flex }}
        </span>

        <flex-item-highlight 
          v-show="nestedFlexItem.highlightActive">
          <highlight--nested-flex-info
            :nestedIndex="nestedIndex"
            :nestedFlexItem="nestedFlexItem"
            :nestedFlexDirection="nestedFlexDirection">
          </highlight--nested-flex-info>
        </flex-item-highlight>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Display__FlexItem_Highlight from './flex-item-highlight/Display__FlexItem_Highlight';
import FlexItem_Highlight__NestedFlexInfo from './flex-item-highlight/FlexItem_Highlight__NestedFlexInfo';

export default {
  data() {
    return {
      colorPickerActive: false
    }
  },
  props: ['parentIndex'],
  components: {
    'flex-item-highlight': Display__FlexItem_Highlight,
    'highlight--nested-flex-info': FlexItem_Highlight__NestedFlexInfo
  },
  computed: {
    flexItem () {
      return this.$store.getters.getFlexGroupItem(this.parentIndex);
    },
    nestedFlexMargin () {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).nested.nestedFlexMargin;
    },
    nestedFlexGroup () {
      return this.$store.getters.getNestedFlexGroup(this.parentIndex).nestedFlexGroup;
    },
    nestedFlexDirection () {
      return this.$store.getters.getNestedFlexDirection(this.parentIndex);
    },
    isNestedFlexDirectionRow () {
      if (this.nestedFlexDirection === 'flexdir-row' || this.nestedFlexDirection === 'flexdir-rowrev') {
        return true;
      }
      return false;
    },
    flexdirRow_Rowrev () {
      if (this.nestedFlexDirection === 'flexdir-row') {
        return true;
      }
      return false;
    },
    flexdirCol_Colrev () {
      if (this.nestedFlexDirection === 'flexdir-col') {
        return true;
      }
      return false;
    }
  },
  watch: {
    nestedFlexGroup: {
      deep: true,
      handler() {
        setTimeout(() => {
          this.calculateNestedItemDimensions();
        }, 50)
      }
    }
  },
  methods: {
    ...mapActions(['setNestedFlexColor_STORE', 'setNestedPixelWidth_STORE', 'setNestedPixelHeight_STORE']),
    activate_ColorPicker() {
      this.colorPickerActive = true;
      setTimeout(() => {
        this.colorPickerActive = false
      }, 3000);
    },
    deactivate_ColorPicker() {
      this.colorPickerActive = false;
    },
    setNestedFlexColor($event, nestedIndex) {
      const payload = {
        parentIndex: this.parentIndex,
        nestedIndex,
        newValue: $event.target.value
      };
      this.setNestedFlexColor_STORE(payload);
    },
    calculateNestedItemDimensions() {
      const nestedGroupHTML = this.$el.children[0].children;
      const tempNestedArray = Array.from(nestedGroupHTML);
      tempNestedArray.forEach((nestedItem, nestedIndex) => {
        const itemHTML = window.getComputedStyle(nestedItem);
        const pixelWidth = itemHTML.getPropertyValue('width');
        const pixelHeight = itemHTML.getPropertyValue('height');
        const payload = {
          parentIndex: this.parentIndex,
          nestedIndex,
          pixelWidth,
          pixelHeight,
        };
        this.setNestedPixelWidth_STORE(payload);
        this.setNestedPixelHeight_STORE(payload);
      })
    },

  },
  mounted() {
    this.calculateNestedItemDimensions();
  }
}
</script>

<style scoped>
.flex-item--nested--outer {
  height: 100%;
}
.flex-item--nested--inner {
  position: relative;
  z-index: 50;
  border: 0px solid var(--backgroundGrey);
  transition: margin .2s ease-in-out, border 0s ease-in 0.2s;
}
.flex-item--nested--inner.nested-margin {
  border: 2px solid var(--backgroundGrey);
  margin: 1rem;
  transition: margin .2s ease-in-out;
}
.nested--flex-item {
  position: relative;
  transition: flex .1s ease-in-out;
  background-color: var(--mainTurq);
}
.nested-flex-item--border-row {
  border-right: 2px solid var(--backgroundGrey);
}
.nested-flex-item--border-col {
  border-bottom: 2px solid var(--backgroundGrey);
}
.nested-flex-item--border-rowrev {
  border-left: 2px solid var(--backgroundGrey);
}
.nested-flex-item--border-colrev {
  border-top: 2px solid var(--backgroundGrey);
}
.click-color-picker--nested {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.click-color-picker--nested.active {
  z-index: 10;
}
.nested--flex-item--text {
  z-index: 15;
}
</style>
